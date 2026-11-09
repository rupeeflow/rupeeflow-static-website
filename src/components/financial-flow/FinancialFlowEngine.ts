import * as THREE from 'three'
import {
  FINANCIAL_FLOW_DATA,
  type FlowModule,
} from '@/data/financialFlowNetwork'
import {
  BRAND,
  CENTER_COLOR,
  MODULE_COLORS,
  flowTypeToDirection,
  getLayout,
} from './config'
import type {
  FlowLine,
  FlowNode,
  FlowStreak,
  EngineRefs,
  FlowDirection,
} from './types'

// Shared geometries & materials (minimize draw-call overhead)
const sphereGeoCache = new Map<number, THREE.BufferGeometry>()
const getSphereGeo = (r: number, segments = 24) => {
  const key = r * 100 + segments
  if (!sphereGeoCache.has(key)) {
    sphereGeoCache.set(key, new THREE.SphereGeometry(r, segments, segments))
  }
  return sphereGeoCache.get(key)!
}

const materialCache = new Map<string, THREE.MeshStandardMaterial>()
const getNodeMaterial = (color: string) => {
  if (!materialCache.has(color)) {
    materialCache.set(
      color,
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(color).multiplyScalar(0.35),
        emissiveIntensity: 0.6,
        metalness: 0.15,
        roughness: 0.45,
        transparent: true,
        opacity: 1,
      })
    )
  }
  return materialCache.get(color)!
}

const glowMaterialCache = new Map<string, THREE.MeshBasicMaterial>()
const getGlowMaterial = (color: string) => {
  if (!glowMaterialCache.has(color)) {
    glowMaterialCache.set(
      color,
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0,
        side: THREE.BackSide,
        depthWrite: false,
      })
    )
  }
  return glowMaterialCache.get(color)!
}

const streakGeo = new THREE.BoxGeometry(0.14, 0.028, 0.028)
const streakMatCache = new Map<string, THREE.MeshBasicMaterial>()

const getStreakMaterial = (color: string) => {
  if (!streakMatCache.has(color)) {
    streakMatCache.set(
      color,
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.75,
        depthWrite: false,
      })
    )
  }
  return streakMatCache.get(color)!
}

export class FinancialFlowEngine {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private nodes = new Map<string, FlowNode>()
  private lines: FlowLine[] = []
  private streaks: FlowStreak[] = []
  private expandedId: string | null = null
  private hoveredId: string | null = null
  private mobileOffset = 0
  private isMobile: boolean
  private layout: ReturnType<typeof getLayout>
  private camTarget = new THREE.Vector3()
  private camCurrent = new THREE.Vector3()
  private parallaxTarget = new THREE.Vector2()
  private parallaxCurrent = new THREE.Vector2()
  private raycaster = new THREE.Raycaster()
  private mouse = new THREE.Vector2()
  private permLabelEls = new Map<string, HTMLDivElement>()
  private subLabelEls = new Map<string, HTMLDivElement>()
  private rafId = 0
  private time = 0
  private autoRotateTimer = 0
  private disposed = false

  private onMouseMove: (e: MouseEvent) => void
  private onClick: (e: MouseEvent) => void
  private onTouchStart: (e: TouchEvent) => void
  private onResize: () => void

  constructor(private refs: EngineRefs) {
    this.isMobile = window.innerWidth < 768
    this.layout = getLayout(this.isMobile)

    const { wrap, canvas, labelsDiv } = refs
    const W = wrap.clientWidth
    const H = wrap.clientHeight

    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(56, W / H, 0.1, 100)
    this.camTarget.set(0, this.layout.camY, this.layout.camZ)
    this.camCurrent.copy(this.camTarget)
    this.camera.position.copy(this.camCurrent)

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !this.isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(W, H)
    this.renderer.setClearColor(0xffffff, 0)

    this.setupLighting()
    this.buildGraph()
    this.createFlowStreaks()
    this.setupLabels(labelsDiv)

    this.onMouseMove = e => this.handlePointerMove(e.clientX, e.clientY)
    this.onClick = e => this.handleClick(e.clientX, e.clientY)
    this.onTouchStart = e => {
      if (!e.touches.length) return
      this.handleClick(e.touches[0].clientX, e.touches[0].clientY)
    }
    this.onResize = () => this.handleResize()

    canvas.addEventListener('mousemove', this.onMouseMove)
    canvas.addEventListener('click', this.onClick)
    canvas.addEventListener('touchstart', this.onTouchStart, { passive: true })
    window.addEventListener('resize', this.onResize)

    this.animate()
  }

  private setupLighting() {
    this.scene.add(new THREE.AmbientLight(0x8899bb, 0.45))
    const key = new THREE.DirectionalLight(0xffffff, 0.55)
    key.position.set(2, 4, 6)
    this.scene.add(key)
    const rim = new THREE.PointLight(0x4ecdc4, 1.2, 30)
    rim.position.set(-3, -2, 5)
    this.scene.add(rim)
  }

  private makeNode(
    id: string,
    label: string,
    color: string,
    kind: FlowNode['kind'],
    pos: THREE.Vector3,
    radius: number,
    flowType: FlowNode['flowType'],
    parentId?: string
  ): FlowNode {
    const mat = getNodeMaterial(color)
    const mesh = new THREE.Mesh(getSphereGeo(radius), mat)
    mesh.position.copy(pos)

    const glowMesh = new THREE.Mesh(
      getSphereGeo(radius * 1.75, 16),
      getGlowMaterial(color)
    )
    glowMesh.position.copy(pos)
    glowMesh.renderOrder = -1

    this.scene.add(mesh, glowMesh)

    return {
      mesh,
      glowMesh,
      id,
      label,
      color,
      flowType,
      kind,
      parentId,
      basePos: pos.clone(),
      targetPos: pos.clone(),
      currentPos: pos.clone(),
      targetScale: 1,
      currentScale: 1,
      targetOpacity: 1,
      currentOpacity: 1,
      isHovered: false,
      floatPhase: Math.random() * Math.PI * 2,
    }
  }

  private makeLine(
    fromId: string,
    toId: string,
    from: THREE.Vector3,
    to: THREE.Vector3,
    color: string,
    opacity = 0,
    flowDirection: FlowDirection = 'both'
  ): FlowLine {
    const geo = new THREE.BufferGeometry().setFromPoints([
      from.clone(),
      to.clone(),
    ])
    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity,
    })
    const line = new THREE.Line(geo, mat)
    this.scene.add(line)
    return {
      line,
      fromId,
      toId,
      color,
      targetOpacity: opacity,
      currentOpacity: opacity,
      flowDirection,
    }
  }

  private moduleAngle(index: number, total: number) {
    return -Math.PI / 2 + (index / total) * Math.PI * 2
  }

  private isModuleVisibleOnMobile(moduleIndex: number) {
    if (!this.isMobile) return true
    const total = FINANCIAL_FLOW_DATA.modules.length
    const visible = this.layout.mobileVisibleModules
    for (let i = 0; i < visible; i++) {
      const idx = (this.mobileOffset + i) % total
      if (idx === moduleIndex) return true
    }
    return false
  }

  private buildGraph() {
    const { mainRadius } = this.layout
    const centerPos = new THREE.Vector3(0, 0, 0)

    const center = this.makeNode(
      'center',
      FINANCIAL_FLOW_DATA.center,
      CENTER_COLOR,
      'center',
      centerPos,
      this.layout.centerRadius,
      'center'
    )
    this.nodes.set('center', center)

    FINANCIAL_FLOW_DATA.modules.forEach((mod, mi) => {
      const angle = this.moduleAngle(mi, FINANCIAL_FLOW_DATA.modules.length)
      const color = MODULE_COLORS[mod.id] ?? '#ffffff'
      const mainPos = new THREE.Vector3(
        Math.cos(angle) * mainRadius,
        Math.sin(angle) * mainRadius,
        0
      )

      const mainNode = this.makeNode(
        mod.id,
        mod.name,
        color,
        'main',
        mainPos,
        this.layout.mainRadiusMesh,
        mod.type
      )
      this.nodes.set(mod.id, mainNode)

      const visible = this.isModuleVisibleOnMobile(mi)
      if (!visible) {
        mainNode.targetOpacity = 0.12
        mainNode.currentOpacity = 0.12
        mainNode.targetScale = 0.75
        mainNode.currentScale = 0.75
      }

      this.lines.push(
        this.makeLine(
          'center',
          mod.id,
          centerPos,
          mainPos,
          color,
          visible ? 0.55 : 0.1,
          flowTypeToDirection(mod.type)
        )
      )

      this.buildSubNodes(mod, mainPos, color)
    })
  }

  private buildSubNodes(
    mod: FlowModule,
    mainPos: THREE.Vector3,
    color: string
  ) {
    const { subRadius } = this.layout
    const spread = (Math.PI * 0.85) / Math.max(mod.sub.length - 1, 1)
    const baseAngle = Math.atan2(mainPos.y, mainPos.x)
    const startAngle = baseAngle - (spread * (mod.sub.length - 1)) / 2

    mod.sub.forEach((label, si) => {
      const childId = `${mod.id}_sub_${si}`
      const childAngle = startAngle + spread * si
      const childPos = new THREE.Vector3(
        mainPos.x + Math.cos(childAngle) * subRadius,
        mainPos.y + Math.sin(childAngle) * subRadius,
        0
      )

      const child = this.makeNode(
        childId,
        label,
        color,
        'sub',
        mainPos.clone(),
        this.layout.subRadiusMesh,
        mod.type,
        mod.id
      )
      child.basePos = childPos.clone()
      child.targetPos = mainPos.clone()
      child.targetScale = 0
      child.currentScale = 0
      child.targetOpacity = 0
      child.currentOpacity = 0
      child.mesh.scale.setScalar(0)
      child.glowMesh.scale.setScalar(0)
      ;(child.mesh.material as THREE.MeshStandardMaterial).opacity = 0

      this.nodes.set(childId, child)
      this.lines.push(
        this.makeLine(
          mod.id,
          childId,
          mainPos,
          childPos,
          color,
          0,
          flowTypeToDirection(mod.type)
        )
      )
    })
  }

  private createFlowStreaks() {
    const streaksPerLine = this.isMobile ? 1 : 2

    this.lines.forEach(line => {
      for (let i = 0; i < streaksPerLine; i++) {
        const dir: 1 | -1 =
          line.flowDirection === 'out'
            ? 1
            : line.flowDirection === 'in'
              ? -1
              : i % 2 === 0
                ? 1
                : -1

        const mesh = new THREE.Mesh(streakGeo, getStreakMaterial(line.color))
        mesh.renderOrder = 2
        this.scene.add(mesh)

        this.streaks.push({
          mesh,
          fromId: line.fromId,
          toId: line.toId,
          t: (i + 0.5) / streaksPerLine,
          speed: 0.004 + Math.random() * 0.002,
          direction: dir,
        })
      }
    })
  }

  private labelCSS(kind: FlowNode['kind'], color: string) {
    const textColor = kind === 'sub' ? `${BRAND.deepGreen}BF` : BRAND.deepGreen
    return `
      position:absolute;pointer-events:none;
      transform:translate(-50%,-50%);
      color:${textColor};
      font-size:${kind === 'center' ? '13px' : kind === 'main' ? '11px' : '9px'};
      font-weight:${kind === 'center' ? '800' : '700'};
      font-family:system-ui,-apple-system,sans-serif;
      text-align:center;white-space:nowrap;
      letter-spacing:0.02em;
      text-shadow:0 1px 4px rgba(255,255,255,0.9),0 0 8px ${color}33;
    `
  }

  private setupLabels(labelsDiv: HTMLDivElement) {
    labelsDiv.innerHTML = ''
    this.nodes.forEach(node => {
      if (node.kind === 'sub') return
      const el = document.createElement('div')
      el.style.cssText = this.labelCSS(node.kind, node.color)
      el.textContent = node.label
      labelsDiv.appendChild(el)
      this.permLabelEls.set(node.id, el)
    })
  }

  private removeSubLabels() {
    this.subLabelEls.forEach(el => el.remove())
    this.subLabelEls.clear()
  }

  private createSubLabels(moduleId: string) {
    const mod = FINANCIAL_FLOW_DATA.modules.find(m => m.id === moduleId)
    if (!mod) return
    const color = MODULE_COLORS[moduleId] ?? '#fff'

    mod.sub.forEach((_, si) => {
      const childId = `${moduleId}_sub_${si}`
      const node = this.nodes.get(childId)
      if (!node) return
      const el = document.createElement('div')
      el.style.cssText = this.labelCSS('sub', color)
      el.style.opacity = '0'
      el.textContent = node.label
      this.refs.labelsDiv.appendChild(el)
      this.subLabelEls.set(childId, el)
    })
  }

  private setExpanded(moduleId: string | null) {
    const prev = this.expandedId

    this.nodes.forEach(n => {
      if (n.kind !== 'sub') return
      n.targetScale = 0
      n.targetOpacity = 0
      n.targetPos = this.nodes.get(n.parentId!)!.basePos.clone()
    })
    this.lines.forEach(l => {
      if (this.nodes.get(l.toId)?.kind === 'sub') l.targetOpacity = 0
    })
    this.removeSubLabels()

    if (moduleId && moduleId !== prev) {
      this.expandedId = moduleId
      this.nodes.forEach(n => {
        if (n.kind === 'sub' && n.parentId === moduleId) {
          n.targetScale = 1
          n.targetOpacity = 1
          n.targetPos = n.basePos.clone()
        }
      })
      this.lines.forEach(l => {
        const tn = this.nodes.get(l.toId)
        if (tn?.kind === 'sub' && tn.parentId === moduleId) {
          l.targetOpacity = 0.35
        }
      })
      this.createSubLabels(moduleId)

      const mn = this.nodes.get(moduleId)!
      this.camTarget.set(
        mn.basePos.x * 0.3,
        mn.basePos.y * 0.3 + this.layout.camY,
        this.isMobile ? 8.5 : 6.8
      )
    } else {
      this.expandedId = null
      this.camTarget.set(0, this.layout.camY, this.layout.camZ)
    }
  }

  private updateMobileVisibility() {
    if (!this.isMobile) return
    FINANCIAL_FLOW_DATA.modules.forEach((mod, mi) => {
      const visible = this.isModuleVisibleOnMobile(mi)
      const node = this.nodes.get(mod.id)!
      if (this.expandedId === mod.id) return
      node.targetOpacity = visible ? 1 : 0.15
      node.targetScale = visible ? 1 : 0.72
    })
    this.lines.forEach(l => {
      if (l.fromId !== 'center') return
      const mod = this.nodes.get(l.toId)
      if (!mod || this.expandedId === l.toId) return
      const mi = FINANCIAL_FLOW_DATA.modules.findIndex(m => m.id === l.toId)
      l.targetOpacity = this.isModuleVisibleOnMobile(mi) ? 0.5 : 0.06
    })
  }

  private hittable() {
    return Array.from(this.nodes.values())
      .filter(n => {
        if (n.kind === 'sub' && n.currentScale < 0.05) return false
        if (n.kind === 'main' && this.isMobile && n.currentOpacity < 0.3)
          return false
        return true
      })
      .map(n => n.mesh)
  }

  private toNDC(cx: number, cy: number) {
    const r = this.refs.canvas.getBoundingClientRect()
    this.mouse.x = ((cx - r.left) / r.width) * 2 - 1
    this.mouse.y = -((cy - r.top) / r.height) * 2 + 1
  }

  private resolveNode(obj: THREE.Object3D) {
    return Array.from(this.nodes.values()).find(n => n.mesh === obj)
  }

  private handlePointerMove(cx: number, cy: number) {
    if (this.isMobile) return

    this.toNDC(cx, cy)
    this.parallaxTarget.set(this.mouse.x * 0.35, this.mouse.y * 0.25)

    this.raycaster.setFromCamera(this.mouse, this.camera)
    const hit = this.raycaster.intersectObjects(this.hittable())[0]
    const newId = hit ? (this.resolveNode(hit.object)?.id ?? null) : null

    if (newId === this.hoveredId) return

    if (this.hoveredId) {
      const prev = this.nodes.get(this.hoveredId)
      if (prev) {
        prev.isHovered = false
        prev.targetScale = 1
      }
    }

    this.hoveredId = newId
    if (newId) {
      const node = this.nodes.get(newId)!
      node.isHovered = true
      node.targetScale = 1.22
      this.refs.canvas.style.cursor = 'pointer'
    } else {
      this.refs.canvas.style.cursor = 'default'
    }
  }

  private handleClick(cx: number, cy: number) {
    this.toNDC(cx, cy)
    this.raycaster.setFromCamera(this.mouse, this.camera)
    const hit = this.raycaster.intersectObjects(this.hittable())[0]

    if (!hit) {
      this.setExpanded(null)
      return
    }

    const node = this.resolveNode(hit.object)
    if (!node) return

    if (node.kind === 'main') {
      this.setExpanded(node.id === this.expandedId ? null : node.id)
    } else if (node.kind === 'center') {
      this.setExpanded(null)
    }
  }

  private handleResize() {
    const wasMobile = this.isMobile
    this.isMobile = window.innerWidth < 768
    if (wasMobile !== this.isMobile) {
      this.layout = getLayout(this.isMobile)
    }

    const w = this.refs.wrap.clientWidth
    const h = this.refs.wrap.clientHeight
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
  }

  private updateFlowStreaks() {
    const xAxis = new THREE.Vector3(1, 0, 0)
    const lineDir = new THREE.Vector3()

    this.streaks.forEach(s => {
      const fn = this.nodes.get(s.fromId)
      const tn = this.nodes.get(s.toId)
      if (!fn || !tn) return

      const subHidden = tn.kind === 'sub' && tn.currentScale < 0.05
      const parentHidden = fn.kind === 'main' && fn.currentOpacity < 0.2

      if (subHidden || parentHidden) {
        s.mesh.visible = false
        return
      }

      s.mesh.visible = true
      s.t += s.speed * s.direction
      if (s.t > 1) s.t -= 1
      if (s.t < 0) s.t += 1

      const from = fn.mesh.position
      const to = tn.mesh.position
      lineDir.subVectors(to, from)
      if (lineDir.lengthSq() < 0.0001) return

      lineDir.normalize()
      s.mesh.position.copy(from).lerp(to, s.t)
      s.mesh.quaternion.setFromUnitVectors(xAxis, lineDir)
    })
  }

  private animate = () => {
    if (this.disposed) return
    this.rafId = requestAnimationFrame(this.animate)
    this.time += 0.008

    if (this.isMobile && !this.expandedId) {
      this.autoRotateTimer += 0.008
      if (this.autoRotateTimer > 4) {
        this.autoRotateTimer = 0
        this.mobileOffset =
          (this.mobileOffset + 1) % FINANCIAL_FLOW_DATA.modules.length
        this.updateMobileVisibility()
      }
    }

    this.updateMobileVisibility()

    // Center pulse
    const center = this.nodes.get('center')!
    const pulse = 1 + Math.sin(this.time * 2) * 0.04
    center.mesh.scale.setScalar(pulse)
    center.glowMesh.scale.setScalar(pulse * 1.1)
    ;(center.glowMesh.material as THREE.MeshBasicMaterial).opacity =
      0.1 + Math.sin(this.time * 2) * 0.04

    // Nodes
    this.nodes.forEach(n => {
      if (n.kind === 'center') return

      const float =
        n.kind === 'main'
          ? Math.sin(this.time * 1.2 + n.floatPhase) * 0.04
          : Math.sin(this.time * 1.5 + n.floatPhase) * 0.025

      n.currentPos.lerp(n.targetPos, 0.09)
      n.mesh.position.set(n.currentPos.x, n.currentPos.y + float, 0)
      n.glowMesh.position.copy(n.mesh.position)

      n.currentScale += (n.targetScale - n.currentScale) * 0.11
      n.mesh.scale.setScalar(n.currentScale)
      n.glowMesh.scale.setScalar(n.currentScale * 1.25)

      n.currentOpacity += (n.targetOpacity - n.currentOpacity) * 0.09
      ;(n.mesh.material as THREE.MeshStandardMaterial).opacity = Math.max(
        0,
        Math.min(1, n.currentOpacity)
      )

      const glowTarget = n.isHovered ? 0.28 : n.kind === 'sub' ? 0.06 : 0.08
      const gm = n.glowMesh.material as THREE.MeshBasicMaterial
      gm.opacity += (glowTarget * n.currentOpacity - gm.opacity) * 0.12
    })

    // Lines — soft base connectors
    this.lines.forEach(l => {
      l.currentOpacity += (l.targetOpacity - l.currentOpacity) * 0.09
      ;(l.line.material as THREE.LineBasicMaterial).opacity =
        l.currentOpacity * 0.35

      const fn = this.nodes.get(l.fromId)
      const tn = this.nodes.get(l.toId)
      if (fn && tn) {
        const arr = (l.line.geometry as THREE.BufferGeometry).attributes
          .position.array as Float32Array
        arr[0] = fn.mesh.position.x
        arr[1] = fn.mesh.position.y
        arr[2] = 0
        arr[3] = tn.mesh.position.x
        arr[4] = tn.mesh.position.y
        arr[5] = 0
        ;(
          l.line.geometry as THREE.BufferGeometry
        ).attributes.position.needsUpdate = true
      }
    })

    this.updateFlowStreaks()

    // Camera + parallax
    this.parallaxCurrent.lerp(this.parallaxTarget, 0.06)
    this.camCurrent.lerp(this.camTarget, 0.055)
    this.camera.position.set(
      this.camCurrent.x + this.parallaxCurrent.x,
      this.camCurrent.y + this.parallaxCurrent.y * 0.5,
      this.camCurrent.z
    )

    // Labels
    const tmp = new THREE.Vector3()
    const rect = this.refs.canvas.getBoundingClientRect()

    this.permLabelEls.forEach((el, id) => {
      const n = this.nodes.get(id)
      if (!n) return
      tmp.copy(n.mesh.position)
      tmp.project(this.camera)
      el.style.left = `${((tmp.x + 1) / 2) * rect.width}px`
      el.style.top = `${((-tmp.y + 1) / 2) * rect.height + (n.kind === 'center' ? 38 : 28)}px`
      el.style.opacity = String(Math.max(0.15, n.currentOpacity))
    })

    this.subLabelEls.forEach((el, id) => {
      const n = this.nodes.get(id)
      if (!n) return
      tmp.copy(n.mesh.position)
      tmp.project(this.camera)
      el.style.left = `${((tmp.x + 1) / 2) * rect.width}px`
      el.style.top = `${((-tmp.y + 1) / 2) * rect.height + 18}px`
      el.style.opacity = String(Math.max(0, n.currentOpacity))
    })

    this.renderer.render(this.scene, this.camera)
  }

  dispose() {
    this.disposed = true
    cancelAnimationFrame(this.rafId)
    window.removeEventListener('resize', this.onResize)
    this.refs.canvas.removeEventListener('mousemove', this.onMouseMove)
    this.refs.canvas.removeEventListener('click', this.onClick)
    this.refs.canvas.removeEventListener('touchstart', this.onTouchStart)

    this.renderer.dispose()
    this.scene.clear()
    this.refs.labelsDiv.innerHTML = ''
  }
}

export function createFinancialFlowEngine(refs: EngineRefs) {
  return new FinancialFlowEngine(refs)
}
