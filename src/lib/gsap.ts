import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Only register in the browser — prevents SSR crashes
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }
