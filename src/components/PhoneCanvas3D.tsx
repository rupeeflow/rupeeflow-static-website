'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function PhoneCanvas3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const getSize = () => ({ w: mount.clientWidth, h: mount.clientHeight })
    let { w, h } = getSize()

    // ── Scene ──
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(36, w / h, 0.1, 100)
    camera.position.set(0, 0, 7)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Phone plane ──
    const texture = new THREE.TextureLoader().load('/phone-mockup.png')
    texture.colorSpace = THREE.SRGBColorSpace

    const geo = new THREE.PlaneGeometry(2.8, 5.2)
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
    })
    const phone = new THREE.Mesh(geo, mat)
    scene.add(phone)

    // ── Animation state ──
    // Start: tilted like the reference image (Pine Labs style)
    const START_ROT_Y = -0.55 // ~-32° angled view
    const END_ROT_Y = 0.0 // face-on after scroll
    const START_ROT_X = 0.06
    const END_ROT_X = 0.0

    let currentRotY = START_ROT_Y
    let currentRotX = START_ROT_X
    let currentPosY = 0
    let floatT = 0

    // ── Scroll: 0 → face-on over the first 60vh of scroll ──
    let scrollProgress = 0
    const heroEl = mount.closest('section') ?? document.documentElement

    const onScroll = () => {
      const scrolled = window.scrollY
      const threshold = window.innerHeight * 0.6 // fully face-on after 60vh scroll
      scrollProgress = Math.min(scrolled / threshold, 1)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

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
    let rafId: number
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      floatT += 0.01

      const targetRotY =
        START_ROT_Y + (END_ROT_Y - START_ROT_Y) * scrollProgress
      const targetRotX =
        START_ROT_X + (END_ROT_X - START_ROT_X) * scrollProgress
      const floatY = Math.sin(floatT) * 0.07

      // Smooth lerp
      currentRotY += (targetRotY - currentRotY) * 0.07
      currentRotX += (targetRotX - currentRotX) * 0.07
      currentPosY += (floatY - currentPosY) * 0.04

      phone.rotation.y = currentRotY
      phone.rotation.x = currentRotX
      phone.position.y = currentPosY

      renderer.render(scene, camera)
    }
    animate()

    // suppress unused variable warning
    void heroEl

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      mat.dispose()
      geo.dispose()
      if (mount.contains(renderer.domElement))
        mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}
