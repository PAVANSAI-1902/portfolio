import { useEffect } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let lenisInstance
    let rafId = 0
    let cancelled = false

    const startLenis = async () => {
      const [{ default: Lenis }, scrollTriggerModule] = await Promise.all([
        import('lenis'),
        import('gsap/ScrollTrigger'),
      ])

      if (cancelled) return

      const gsapModule = await import('gsap')
      const gsap = gsapModule.default
      const ScrollTrigger = scrollTriggerModule.default || scrollTriggerModule.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      lenisInstance = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      })

      const raf = (time) => {
        lenisInstance.raf(time)
        ScrollTrigger.update()
        rafId = window.requestAnimationFrame(raf)
      }

      lenisInstance.on('scroll', ScrollTrigger.update)
      rafId = window.requestAnimationFrame(raf)
      ScrollTrigger.refresh()
    }

    startLenis()

    return () => {
      cancelled = true
      if (rafId) window.cancelAnimationFrame(rafId)
      if (lenisInstance) lenisInstance.destroy()
    }
  }, [])

  return <Component {...pageProps} />
}
