'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Card definitions — staircase from bottom-left → top-right with z-depth
const CARDS = [
  {
    src: '/different/collections.png',
    pos: [-2.8, -1.6, 0.6] as const,
    floatOffset: 0.0,
  },
  {
    src: '/different/gateway.png',
    pos: [-1.2, -0.6, 0.2] as const,
    floatOffset: 0.9,
  },
  {
    src: '/different/vendor.png',
    pos: [0.4, 0.4, -0.2] as const,
    floatOffset: 1.8,
  },
  {
    src: '/different/business.png',
    pos: [2.0, 1.4, -0.6] as const,
    floatOffset: 2.7,
  },
]

// Shared tilt for the whole staircase — isometric perspective angle
const GROUP_ROT_X = -0.18
const GROUP_ROT_Y = 0.32

export default function FloatingCards3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const getSize = () => ({ w: mount.clientWidth, h: mount.clientHeight })
    let { w, h } = getSize()

    // ── Scene ──
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100)
    camera.position.set(0.4, 0, 9)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Group holds all cards so we tilt the whole scene together ──
    const group = new THREE.Group()
    group.rotation.set(GROUP_ROT_X, GROUP_ROT_Y, 0)
    scene.add(group)

    const loader = new THREE.TextureLoader()
    const meshes: { mesh: THREE.Mesh; baseY: number; floatOffset: number }[] =
      []

    // Card background plane (white, slightly larger) for shadow/depth effect
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.55,
    })

    CARDS.forEach(card => {
      const tex = loader.load(card.src)
      tex.colorSpace = THREE.SRGBColorSpace

      // Portrait card ratio ~0.62 (card images are phone screenshots)
      const cardW = 1.7
      const cardH = 2.75

      // Subtle white backing (gives card depth)
      const backGeo = new THREE.PlaneGeometry(cardW + 0.06, cardH + 0.06)
      const back = new THREE.Mesh(backGeo, shadowMat.clone())
      back.position.set(card.pos[0], card.pos[1], card.pos[2] - 0.01)
      group.add(back)

      // Card face
      const geo = new THREE.PlaneGeometry(cardW, cardH)
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(card.pos[0], card.pos[1], card.pos[2])

      group.add(mesh)
      meshes.push({ mesh, baseY: card.pos[1], floatOffset: card.floatOffset })
    })

    // ── Mouse parallax ──
    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Resize ──
    const onResize = () => {
      const s = getSize()
      w = s.w
      h = s.h
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // ── Animate ──
    let t = 0
    let rafId: number
    let currentX = GROUP_ROT_Y
    let currentY = GROUP_ROT_X

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      t += 0.01

      // Gentle float per card
      meshes.forEach(({ mesh, baseY, floatOffset }) => {
        mesh.position.y = baseY + Math.sin(t + floatOffset) * 0.07
      })

      // Subtle mouse parallax on group rotation
      const targetX = GROUP_ROT_Y + mouseX * 0.08
      const targetY = GROUP_ROT_X - mouseY * 0.06
      currentX += (targetX - currentX) * 0.04
      currentY += (targetY - currentY) * 0.04
      group.rotation.y = currentX
      group.rotation.x = currentY

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement))
        mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}
