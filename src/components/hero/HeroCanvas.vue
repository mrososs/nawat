<script setup lang="ts">
/**
 * HeroCanvas — animated hero backdrop via Three.js.
 * A glowing node-network + perspective grid floor in brand navy/azure/cyan.
 * Transparent renderer so the CSS sky/glow shows behind. Pauses when the tab
 * is hidden and renders a single static frame under prefers-reduced-motion.
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type * as THREE from 'three'

const host = ref<HTMLDivElement | null>(null)

let renderer: THREE.WebGLRenderer | undefined
let raf = 0
let alive = false
let onResize: (() => void) | undefined
let onPointer: ((e: PointerEvent) => void) | undefined
let onVisibility: (() => void) | undefined

onMounted(async () => {
  const el = host.value
  if (!el) return
  alive = true

  // Lazy-load three.js so it ships as its own chunk and never blocks first paint.
  const THREE = await import('three')
  if (!alive || !host.value) return

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const w = el.clientWidth || window.innerWidth
  const h = el.clientHeight || window.innerHeight

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
  renderer.setSize(w, h)
  renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;'
  el.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100)
  camera.position.set(0, 1.2, 16)

  const AZURE = 0x00a2ff
  const CYAN = 0x4af3f8
  const group = new THREE.Group()
  scene.add(group)

  /* ---- node network ---- */
  const N = 130
  const spread = { x: 26, y: 13, z: 12 }
  const pos: THREE.Vector3[] = []
  for (let i = 0; i < N; i++) {
    pos.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * spread.x,
        (Math.random() - 0.5) * spread.y,
        (Math.random() - 0.5) * spread.z,
      ),
    )
  }
  const pGeo = new THREE.BufferGeometry().setFromPoints(pos)
  const pMat = new THREE.PointsMaterial({ color: CYAN, size: 0.26, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false })
  group.add(new THREE.Points(pGeo, pMat))

  const segs: THREE.Vector3[] = []
  const maxD = 4.4
  const maxLinks = 3
  for (let i = 0; i < N; i++) {
    let links = 0
    for (let j = i + 1; j < N && links < maxLinks; j++) {
      if (pos[i].distanceTo(pos[j]) < maxD) {
        segs.push(pos[i], pos[j])
        links++
      }
    }
  }
  const lGeo = new THREE.BufferGeometry().setFromPoints(segs)
  const lMat = new THREE.LineBasicMaterial({ color: AZURE, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false })
  group.add(new THREE.LineSegments(lGeo, lMat))

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 24, 24),
    new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending }),
  )
  group.add(core)

  /* ---- perspective grid floor ---- */
  const grid = new THREE.GridHelper(60, 40, AZURE, AZURE)
  const gridMat = grid.material as THREE.LineBasicMaterial
  gridMat.transparent = true
  gridMat.opacity = 0.12
  gridMat.depthWrite = false
  grid.position.y = -7.5
  scene.add(grid)

  /* ---- interaction + animation ---- */
  let mx = 0
  let my = 0
  let tx = 0
  let ty = 0
  onPointer = (e: PointerEvent) => {
    mx = e.clientX / window.innerWidth - 0.5
    my = e.clientY / window.innerHeight - 0.5
  }
  window.addEventListener('pointermove', onPointer, { passive: true })

  onResize = () => {
    if (!renderer) return
    const W = el.clientWidth || window.innerWidth
    const H = el.clientHeight || window.innerHeight
    camera.aspect = W / H
    camera.updateProjectionMatrix()
    renderer.setSize(W, H)
  }
  window.addEventListener('resize', onResize)

  const clock = new THREE.Clock()
  const draw = () => renderer?.render(scene, camera)

  if (reduce) {
    group.rotation.y = 0.2
    draw()
    return
  }

  const loop = () => {
    if (!alive) return
    const time = clock.getElapsedTime()
    group.rotation.y = time * 0.045
    group.rotation.x = Math.sin(time * 0.18) * 0.04
    core.scale.setScalar(1 + Math.sin(time * 1.6) * 0.18)
    ;(core.material as THREE.MeshBasicMaterial).opacity = 0.6 + Math.sin(time * 1.6) * 0.25
    grid.position.z = ((time * 1.6) % 1.5) - 0.75
    tx += (mx * 2.4 - tx) * 0.04
    ty += (-my * 1.4 - ty) * 0.04
    camera.position.x = tx
    camera.position.y = 1.2 + ty
    camera.lookAt(0, 0, 0)
    draw()
    raf = requestAnimationFrame(loop)
  }

  onVisibility = () => {
    if (document.hidden) {
      if (raf) cancelAnimationFrame(raf)
    } else if (alive) {
      loop()
    }
  }
  document.addEventListener('visibilitychange', onVisibility)
  loop()
})

onBeforeUnmount(() => {
  alive = false
  if (raf) cancelAnimationFrame(raf)
  if (onResize) window.removeEventListener('resize', onResize)
  if (onPointer) window.removeEventListener('pointermove', onPointer)
  if (onVisibility) document.removeEventListener('visibilitychange', onVisibility)
  if (renderer) {
    renderer.dispose()
    const c = renderer.domElement
    if (c.parentNode) c.parentNode.removeChild(c)
    renderer = undefined
  }
})
</script>

<template>
  <div ref="host" class="nawat-hero-scene" aria-hidden="true" />
</template>
