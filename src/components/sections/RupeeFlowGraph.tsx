'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// ─── Graph data ──────────────────────────────────────────────────────────────

// MAIN_R / SUB_R are set inline per mobile breakpoint below

const CATEGORIES = [
  {
    id: 'collect',
    label: 'Collect Money',
    color: '#4ECDC4',
    angle: Math.PI / 2,
    children: [
      'Payment Links',
      'QR Payments',
      'UPI Collect',
      'Checkout',
      'Payment Pages',
    ],
  },
  {
    id: 'pay',
    label: 'Make Payments',
    color: '#60A5FA',
    angle: Math.PI / 2 + (2 * Math.PI) / 3,
    children: [
      'Payouts',
      'Vendor Payments',
      'Salary Payments',
      'Bank Transfers',
      'Bulk Payments',
    ],
  },
  {
    id: 'credit',
    label: 'Get Credit',
    color: '#C084FC',
    angle: Math.PI / 2 + (4 * Math.PI) / 3,
    children: [
      'Credit Line',
      'Invoice Financing',
      'Merchant Advance',
      'Working Capital',
    ],
  },
]

// ─── Types ───────────────────────────────────────────────────────────────────

interface NodeState {
  mesh: THREE.Mesh
  glowMesh: THREE.Mesh
  id: string
  label: string
  color: string
  type: 'center' | 'main' | 'sub'
  parentId?: string
  basePos: THREE.Vector3
  targetPos: THREE.Vector3
  currentPos: THREE.Vector3
  targetScale: number
  currentScale: number
  targetOpacity: number
  currentOpacity: number
  isHovered: boolean
}

interface LineState {
  line: THREE.Line
  fromId: string
  toId: string
  targetOpacity: number
  currentOpacity: number
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function RupeeFlowGraph() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const labelsRef = useRef<HTMLDivElement>(null)
  const expandedId = useRef<string | null>(null)
  const hoveredId = useRef<string | null>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    const labelsDiv = labelsRef.current
    if (!wrap || !canvas || !labelsDiv) return

    const mobile = () => window.innerWidth < 768

    // ── Scene ──────────────────────────────────────────────────────────────
    const scene = new THREE.Scene()

    // ── Camera ─────────────────────────────────────────────────────────────
    const W = wrap.clientWidth
    const H = wrap.clientHeight
    const camZ = mobile() ? 10 : 9
    const camY = 0.5 // shift up so triangle centroid is centered
    const camera = new THREE.PerspectiveCamera(58, W / H, 0.1, 100)
    camera.position.set(0, camY, camZ)
    const camTarget = new THREE.Vector3(0, camY, camZ)
    const camCurrent = new THREE.Vector3(0, camY, camZ)

    // ── Renderer ───────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !mobile(),
      alpha: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)

    // ── Lighting ───────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const ptLight = new THREE.PointLight(0x4ecdc4, 2, 25)
    ptLight.position.set(0, 0, 6)
    scene.add(ptLight)

    // ── Nodes / Lines ──────────────────────────────────────────────────────
    const nodes = new Map<string, NodeState>()
    const lines: LineState[] = []

    // Permanent labels (center + main only) — sub-node labels created dynamically
    labelsDiv.innerHTML = ''
    const permLabelEls = new Map<string, HTMLDivElement>() // center + main
    const subLabelEls = new Map<string, HTMLDivElement>() // sub (created on expand)

    const labelCSS = (type: NodeState['type'], color: string) => `
      position:absolute;pointer-events:none;
      transform:translate(-50%,-50%);
      color:${type === 'sub' ? `rgba(11,22,40,0.85)` : '#0B1628'};
      font-size:${type === 'center' ? '13px' : type === 'main' ? '11px' : '9.5px'};
      font-weight:${type === 'center' ? '800' : '700'};
      font-family:system-ui,sans-serif;
      text-align:center;white-space:nowrap;
      text-shadow:0 1px 4px rgba(255,255,255,0.9),0 0 8px ${color}44;
      letter-spacing:0.02em;
    `

    const makePermLabel = (node: NodeState) => {
      const el = document.createElement('div')
      el.style.cssText = labelCSS(node.type, node.color)
      el.textContent = node.label
      labelsDiv.appendChild(el)
      permLabelEls.set(node.id, el)
    }

    // ── Node factory ───────────────────────────────────────────────────────
    const makeNode = (
      id: string,
      label: string,
      color: string,
      type: NodeState['type'],
      pos: THREE.Vector3,
      r: number,
      parentId?: string
    ): NodeState => {
      const mat = new THREE.MeshPhongMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(color).multiplyScalar(0.25),
        shininess: 120,
        transparent: true,
        opacity: 1,
      })
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 32), mat)
      mesh.position.copy(pos)

      const glowMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0,
        side: THREE.BackSide,
      })
      const glowMesh = new THREE.Mesh(
        new THREE.SphereGeometry(r * 1.7, 16, 16),
        glowMat
      )
      glowMesh.position.copy(pos)

      scene.add(mesh, glowMesh)

      return {
        mesh,
        glowMesh,
        id,
        label,
        color,
        type,
        parentId,
        basePos: pos.clone(),
        targetPos: pos.clone(),
        currentPos: pos.clone(),
        targetScale: 1,
        currentScale: 1,
        targetOpacity: 1,
        currentOpacity: 1,
        isHovered: false,
      }
    }

    // ── Line factory ───────────────────────────────────────────────────────
    const makeLine = (
      fromId: string,
      toId: string,
      from: THREE.Vector3,
      to: THREE.Vector3,
      color: string,
      opacity = 0
    ): LineState => {
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
      scene.add(line)
      return {
        line,
        fromId,
        toId,
        targetOpacity: opacity,
        currentOpacity: opacity,
      }
    }

    // ── Build graph ────────────────────────────────────────────────────────
    const mr = mobile() ? 2.2 : 3.0
    const sr = mobile() ? 1.3 : 1.7

    const centerPos = new THREE.Vector3(0, 0, 0)
    const center = makeNode(
      'root',
      'RupeeFlow',
      '#FFD700',
      'center',
      centerPos,
      0.5
    )
    nodes.set('root', center)
    makePermLabel(center)

    CATEGORIES.forEach(cat => {
      const mainPos = new THREE.Vector3(
        Math.cos(cat.angle) * mr,
        Math.sin(cat.angle) * mr,
        0
      )
      const mainNode = makeNode(
        cat.id,
        cat.label,
        cat.color,
        'main',
        mainPos,
        0.33
      )
      nodes.set(cat.id, mainNode)
      makePermLabel(mainNode)

      lines.push(makeLine('root', cat.id, centerPos, mainPos, cat.color, 0.55))

      const spread = (Math.PI * 0.7) / Math.max(cat.children.length - 1, 1)
      const startAngle = cat.angle - (spread * (cat.children.length - 1)) / 2

      cat.children.forEach((childLabel, ci) => {
        const childId = `${cat.id}_${ci}`
        const childAngle = startAngle + spread * ci
        const childPos = new THREE.Vector3(
          mainPos.x + Math.cos(childAngle) * sr,
          mainPos.y + Math.sin(childAngle) * sr,
          0
        )

        const childNode = makeNode(
          childId,
          childLabel,
          cat.color,
          'sub',
          mainPos.clone(),
          0.16,
          cat.id
        )
        childNode.basePos = childPos.clone() // real target when expanded
        childNode.targetPos = mainPos.clone() // start collapsed at parent
        childNode.targetScale = 0
        childNode.currentScale = 0
        childNode.targetOpacity = 0
        childNode.currentOpacity = 0
        childNode.mesh.scale.setScalar(0)
        childNode.glowMesh.scale.setScalar(0)
        ;(childNode.mesh.material as THREE.MeshPhongMaterial).opacity = 0
        nodes.set(childId, childNode)

        // sub lines hidden initially
        lines.push(makeLine(cat.id, childId, mainPos, childPos, cat.color, 0))
      })
    })

    // ── Particles ──────────────────────────────────────────────────────────
    const pCount = mobile() ? 120 : 320
    const pPos = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 24
      pPos[i + 1] = (Math.random() - 0.5) * 18
      pPos[i + 2] = (Math.random() - 0.5) * 4 - 1
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        color: 0x0b7a74,
        size: 0.07,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
      })
    )
    scene.add(particles)

    // ── Expand / collapse (with DOM label lifecycle) ───────────────────────
    const removeSublabels = () => {
      subLabelEls.forEach(el => el.remove())
      subLabelEls.clear()
    }

    const createSublabels = (catId: string) => {
      const cat = CATEGORIES.find(c => c.id === catId)
      if (!cat) return
      cat.children.forEach((_, ci) => {
        const childId = `${catId}_${ci}`
        const node = nodes.get(childId)
        if (!node) return
        const el = document.createElement('div')
        el.style.cssText = labelCSS('sub', cat.color)
        el.style.opacity = '0'
        el.textContent = node.label
        labelsDiv.appendChild(el)
        subLabelEls.set(childId, el)
      })
    }

    const setExpanded = (catId: string | null) => {
      const prev = expandedId.current

      // Collapse all subs
      nodes.forEach(n => {
        if (n.type !== 'sub') return
        n.targetScale = 0
        n.targetOpacity = 0
        n.targetPos = nodes.get(n.parentId!)!.basePos.clone()
      })
      lines.forEach(l => {
        if (nodes.get(l.toId)?.type === 'sub') l.targetOpacity = 0
      })
      removeSublabels()

      if (catId && catId !== prev) {
        expandedId.current = catId
        nodes.forEach(n => {
          if (n.type === 'sub' && n.parentId === catId) {
            n.targetScale = 1
            n.targetOpacity = 1
            n.targetPos = n.basePos.clone()
          }
        })
        lines.forEach(l => {
          const tn = nodes.get(l.toId)
          if (tn?.type === 'sub' && tn.parentId === catId)
            l.targetOpacity = 0.22
        })
        createSublabels(catId)
        const cn = nodes.get(catId)!
        camTarget.set(
          cn.basePos.x * 0.25,
          cn.basePos.y * 0.25 + camY,
          mobile() ? 9.5 : 7.5
        )
      } else {
        expandedId.current = null
        camTarget.set(0, camY, camZ)
      }
    }

    // ── Raycasting ─────────────────────────────────────────────────────────
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const hittable = () =>
      Array.from(nodes.values())
        .filter(n => n.type !== 'sub' || n.currentScale > 0.05)
        .map(n => n.mesh)

    const toNDC = (cx: number, cy: number) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = ((cx - r.left) / r.width) * 2 - 1
      mouse.y = -((cy - r.top) / r.height) * 2 + 1
    }

    const resolve = (obj: THREE.Object3D) =>
      Array.from(nodes.values()).find(n => n.mesh === obj)

    const onMouseMove = (e: MouseEvent) => {
      toNDC(e.clientX, e.clientY)
      raycaster.setFromCamera(mouse, camera)
      const hit = raycaster.intersectObjects(hittable())[0]
      const newId = hit ? (resolve(hit.object)?.id ?? null) : null
      if (newId === hoveredId.current) return
      if (hoveredId.current) {
        const p = nodes.get(hoveredId.current)
        if (p) {
          p.isHovered = false
          p.targetScale = 1
        }
      }
      hoveredId.current = newId
      if (newId) {
        const c = nodes.get(newId)!
        c.isHovered = true
        c.targetScale = 1.28
        canvas.style.cursor = 'pointer'
      } else {
        canvas.style.cursor = 'default'
      }
    }

    const onClick = (e: MouseEvent) => {
      toNDC(e.clientX, e.clientY)
      raycaster.setFromCamera(mouse, camera)
      const hit = raycaster.intersectObjects(hittable())[0]
      if (!hit) {
        setExpanded(null)
        return
      }
      const n = resolve(hit.object)
      if (!n) return
      if (n.type === 'main')
        setExpanded(n.id === expandedId.current ? null : n.id)
      if (n.type === 'center') setExpanded(null)
    }

    const onTouch = (e: TouchEvent) => {
      if (!e.touches.length) return
      const t = e.touches[0]
      toNDC(t.clientX, t.clientY)
      raycaster.setFromCamera(mouse, camera)
      const hit = raycaster.intersectObjects(hittable())[0]
      if (!hit) {
        setExpanded(null)
        return
      }
      const n = resolve(hit.object)
      if (!n) return
      if (n.type === 'main')
        setExpanded(n.id === expandedId.current ? null : n.id)
      if (n.type === 'center') setExpanded(null)
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('click', onClick)
    canvas.addEventListener('touchstart', onTouch, { passive: true })

    // ── Animation loop ─────────────────────────────────────────────────────
    const tmp = new THREE.Vector3()
    let time = 0
    let rafId = 0

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      time += 0.007

      particles.rotation.z = time * 0.012
      particles.rotation.y = time * 0.006

      // Center pulse
      const cn = nodes.get('root')!
      const pulse = 1 + Math.sin(time * 2.2) * 0.055
      cn.mesh.scale.setScalar(pulse)
      cn.glowMesh.scale.setScalar(pulse)
      ;(cn.glowMesh.material as THREE.MeshBasicMaterial).opacity =
        0.14 + Math.sin(time * 2.2) * 0.06

      // Node lerp
      nodes.forEach(n => {
        if (n.type === 'center') return
        const float =
          n.type === 'main'
            ? Math.sin(time * 1.4 + n.basePos.x * 1.5) * 0.055
            : 0
        n.currentPos.lerp(n.targetPos, 0.085)
        n.mesh.position.set(n.currentPos.x, n.currentPos.y + float, 0)
        n.glowMesh.position.set(n.currentPos.x, n.currentPos.y + float, 0)
        n.currentScale += (n.targetScale - n.currentScale) * 0.1
        n.mesh.scale.setScalar(n.currentScale)
        n.glowMesh.scale.setScalar(n.currentScale)
        n.currentOpacity += (n.targetOpacity - n.currentOpacity) * 0.085
        ;(n.mesh.material as THREE.MeshPhongMaterial).opacity = Math.max(
          0,
          Math.min(1, n.currentOpacity)
        )
        const glowTarget = n.isHovered ? 0.38 : n.type === 'sub' ? 0.07 : 0.09
        const gm = n.glowMesh.material as THREE.MeshBasicMaterial
        gm.opacity += (glowTarget * n.currentOpacity - gm.opacity) * 0.1
      })

      // Line lerp + endpoint update
      lines.forEach(l => {
        l.currentOpacity += (l.targetOpacity - l.currentOpacity) * 0.085
        ;(l.line.material as THREE.LineBasicMaterial).opacity = l.currentOpacity
        const fn = nodes.get(l.fromId),
          tn = nodes.get(l.toId)
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

      // Camera lerp
      camCurrent.lerp(camTarget, 0.055)
      camera.position.copy(camCurrent)

      // Project permanent labels (center + main)
      const rect = canvas.getBoundingClientRect()
      permLabelEls.forEach((el, id) => {
        const n = nodes.get(id)
        if (!n) return
        tmp.set(n.mesh.position.x, n.mesh.position.y, 0)
        tmp.project(camera)
        const sx = ((tmp.x + 1) / 2) * rect.width
        const sy = ((-tmp.y + 1) / 2) * rect.height
        const offY = n.type === 'center' ? 40 : 30
        el.style.left = `${sx}px`
        el.style.top = `${sy + offY}px`
      })

      // Project sub labels (only exist in DOM when expanded)
      subLabelEls.forEach((el, id) => {
        const n = nodes.get(id)
        if (!n) return
        tmp.set(n.mesh.position.x, n.mesh.position.y, 0)
        tmp.project(camera)
        const sx = ((tmp.x + 1) / 2) * rect.width
        const sy = ((-tmp.y + 1) / 2) * rect.height
        el.style.left = `${sx}px`
        el.style.top = `${sy + 20}px`
        el.style.opacity = String(Math.max(0, n.currentOpacity))
      })

      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ─────────────────────────────────────────────────────────────
    const onResize = () => {
      const w = wrap.clientWidth,
        h = wrap.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('click', onClick)
      canvas.removeEventListener('touchstart', onTouch)
      renderer.dispose()
      scene.clear()
      labelsDiv.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="relative w-full select-none"
      style={{ height: 'clamp(680px, 92vh, 1100px)' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        ref={labelsRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase text-gray-400 pointer-events-none whitespace-nowrap">
        Click a category · tap to expand
      </p>
    </div>
  )
}
