import { useEffect, useRef } from 'react'
import {
  SiKubernetes, SiTypescript, SiReact, SiNodedotjs,
  SiPython, SiDocker, SiAmazonaws, SiPostgresql,
  SiSpringboot, SiNestjs, SiGrafana, SiRedis,
  SiGooglecloud, SiGithub, SiHelm, SiTerraform,
  SiNextdotjs, SiPrometheus
} from 'react-icons/si'
import './about-orbit.css'

const techItems = [
  { icon: SiKubernetes,  color: '#326ce5' },
  { icon: SiTypescript,  color: '#3178c6' },
  { icon: SiReact,       color: '#61dafb' },
  { icon: SiNodedotjs,   color: '#68a063' },
  { icon: SiPython,      color: '#3776ab' },
  { icon: SiDocker,      color: '#2496ed' },
  { icon: SiAmazonaws,   color: '#ff9900' },
  { icon: SiPostgresql,  color: '#336791' },
  { icon: SiSpringboot,  color: '#6db33f' },
  { icon: SiNestjs,      color: '#e0234e' },
  { icon: SiGrafana,     color: '#f46800' },
  { icon: SiRedis,       color: '#dc382d' },
  { icon: SiGooglecloud, color: '#4285f4' },
  { icon: SiGithub,      color: '#e0e0e0' },
  { icon: SiHelm,        color: '#277a9f' },
  { icon: SiTerraform,   color: '#7b42bc' },
  { icon: SiNextdotjs,   color: '#e0e0e0' },
  { icon: SiPrometheus,  color: '#e6522c' },
]

const RADIUS = 165

// Distribute items evenly on a sphere using Fibonacci lattice
const buildPositions = (n) =>
  Array.from({ length: n }, (_, i) => {
    const phi   = Math.acos(-1 + (2 * i) / n)
    const theta = Math.sqrt(n * Math.PI) * phi
    return {
      x: Math.cos(theta) * Math.sin(phi),
      y: Math.sin(theta) * Math.sin(phi),
      z: Math.cos(phi),
    }
  })

const AboutOrbit = () => {
  const containerRef = useRef(null)
  const rafRef       = useRef(null)
  const rotX         = useRef(0.3)
  const rotY         = useRef(0)

  useEffect(() => {
    const positions = buildPositions(techItems.length)
    const items     = Array.from(
      containerRef.current.querySelectorAll('.about-sphere__item')
    )

    const tick = () => {
      rotY.current += 0.006
      rotX.current += 0.002

      const cosX = Math.cos(rotX.current), sinX = Math.sin(rotX.current)
      const cosY = Math.cos(rotY.current), sinY = Math.sin(rotY.current)

      positions.forEach((pos, i) => {
        // Rotate around Y axis
        const x1 =  pos.x * cosY + pos.z * sinY
        const z1 = -pos.x * sinY + pos.z * cosY
        // Rotate around X axis
        const y1 =  pos.y * cosX - z1  * sinX
        const z2 =  pos.y * sinX + z1  * cosX

        const scale   = (z2 + 2) / 3
        const opacity = Math.max(0.15, (z2 + 1.4) / 2.4)

        if (items[i]) {
          items[i].style.transform = `translate(${(x1 * RADIUS).toFixed(2)}px, ${(y1 * RADIUS).toFixed(2)}px) scale(${scale.toFixed(3)})`
          items[i].style.opacity   = opacity.toFixed(3)
          items[i].style.zIndex    = Math.round(scale * 100)
        }
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className="about-sphere" ref={containerRef}>
      {techItems.map(({ icon: Icon, color }, i) => (
        <div key={i} className="about-sphere__item">
          <Icon style={{ color }} />
        </div>
      ))}
    </div>
  )
}

export default AboutOrbit
