import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

const HERO_TAGS = ['FastAPI', 'PostgreSQL', 'Docker', 'LangChain', 'IEEE', 'Remote Roles']

function HeroFallback() {
  return (
    <div className="hero-viewport hero-viewport--fallback">
      <div className="hero-viewport-shell">
        <div className="hero-viewport-glow hero-viewport-glow--teal" />
        <div className="hero-viewport-glow hero-viewport-glow--violet" />
        <div className="hero-viewport-grid" />
        <div className="hero-viewport-core" />
        <div className="hero-viewport-content">
          <div className="hero-viewport-content-kicker">Selected signals</div>
          <h3 className="hero-viewport-content-title">Production systems, research, and shipped work.</h3>
          <p className="hero-viewport-content-copy">
            Backend APIs, multi-agent tooling, published research, and internships that map directly to the kind of
            product work recruiters want to see.
          </p>
          <div className="hero-viewport-content-grid">
            <div className="hero-viewport-mini-card">
              <strong>Backend Developer Intern</strong>
              <span>Prodigal AI Technologies Pvt. Ltd.</span>
            </div>
            <div className="hero-viewport-mini-card">
              <strong>Full-Stack Developer Intern</strong>
              <span>Bhuvih HR Solutions</span>
            </div>
            <div className="hero-viewport-mini-card">
              <strong>IEEE ICFACT-2026</strong>
              <span>AI-Enhanced Emoji Steganography</span>
            </div>
            <div className="hero-viewport-mini-card">
              <strong>AIP Proceedings</strong>
              <span>MobileNet SSD object detection</span>
            </div>
          </div>
          <div className="hero-viewport-content-tags">
            {HERO_TAGS.map((tag) => (
              <span key={tag} className="tag tag-soft">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SceneObject({ scrollProgress }) {
  const group = useRef(null)
  const core = useRef(null)
  const ring = useRef(null)

  useFrame((state, delta) => {
    if (!group.current || !core.current || !ring.current) return

    const mouseX = state.mouse.x * 0.25
    const mouseY = state.mouse.y * 0.2

    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, 0.15 + scrollProgress * 0.8 + mouseY * 0.2, 0.06)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, scrollProgress * 1.1 + mouseX * 0.3, 0.06)
    core.current.rotation.z += delta * 0.12
    ring.current.rotation.x += delta * 0.05
    ring.current.rotation.z += delta * 0.04
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -scrollProgress * 0.18, 0.06)
  })

  return (
    <group ref={group}>
      <Float speed={0.9} rotationIntensity={0.25} floatIntensity={0.35}>
        <mesh ref={core} castShadow receiveShadow>
          <icosahedronGeometry args={[1.32, 0]} />
          <meshPhysicalMaterial
            color="#102033"
            metalness={0.78}
            roughness={0.18}
            transmission={0.08}
            thickness={0.7}
            emissive="#00E5A0"
            emissiveIntensity={0.04}
          />
        </mesh>
      </Float>

      <mesh ref={ring} position={[0, -0.1, -0.18]} rotation={[1.1, 0.35, 0.18]}>
        <torusGeometry args={[1.74, 0.05, 8, 120]} />
        <meshStandardMaterial color="#6E8CFF" emissive="#6E8CFF" emissiveIntensity={0.18} transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

export default function HeroScene({ scrollProgress = 0 }) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const lowPower = (navigator.hardwareConcurrency || 4) < 6
    const mobile = window.matchMedia('(max-width: 1024px)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setEnabled(!lowPower && !mobile && !reducedMotion)
  }, [])

  if (!enabled) {
    return <HeroFallback />
  }

  return (
    <div className="hero-viewport">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <fog attach="fog" args={['#07111A', 5, 11]} />
        <ambientLight intensity={1.05} />
        <hemisphereLight intensity={1.05} color="#00E5A0" groundColor="#07111A" />
        <directionalLight position={[4, 5, 3]} intensity={1.8} color="#6E8CFF" />
        <directionalLight position={[-5, -4, 2]} intensity={1.2} color="#00E5A0" />
        <Suspense fallback={<HeroFallback />}>
          <SceneObject scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>

      <div className="hero-viewport-content">
        <div className="hero-viewport-content-kicker">Selected signals</div>
        <h3 className="hero-viewport-content-title">Production systems, research, and shipped work.</h3>
        <p className="hero-viewport-content-copy">
          Backend APIs, multi-agent tooling, published research, and internships that map directly to the kind of
          product work recruiters want to see.
        </p>

        <div className="hero-viewport-content-grid">
          <div className="hero-viewport-mini-card">
            <strong>Backend Developer Intern</strong>
            <span>Prodigal AI Technologies Pvt. Ltd.</span>
          </div>
          <div className="hero-viewport-mini-card">
            <strong>Full-Stack Developer Intern</strong>
            <span>Bhuvih HR Solutions</span>
          </div>
          <div className="hero-viewport-mini-card">
            <strong>IEEE ICFACT-2026</strong>
            <span>AI-Enhanced Emoji Steganography</span>
          </div>
          <div className="hero-viewport-mini-card">
            <strong>AIP Proceedings</strong>
            <span>MobileNet SSD object detection</span>
          </div>
        </div>

        <div className="hero-viewport-content-tags">
          {HERO_TAGS.map((tag) => (
            <span key={tag} className="tag tag-soft">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-viewport-overlay" />
    </div>
  )
}