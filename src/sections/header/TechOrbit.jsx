import './tech-orbit.css'

const orbitItems = [
  { label: 'Java',   bg: '#f89820', color: '#fff'    },
  { label: 'K8s',    bg: '#326ce5', color: '#fff'    },
  { label: 'React',  bg: '#00d8ff', color: '#0d0d18' },
  { label: 'AWS',    bg: '#ff9900', color: '#fff'    },
  { label: 'Node',   bg: '#68a063', color: '#fff'    },
  { label: 'PY',     bg: '#3776ab', color: '#fff'    },
  { label: 'TS',     bg: '#3178c6', color: '#fff'    },
  { label: 'Docker', bg: '#2496ed', color: '#fff'    },
]

const DURATION = 22 // seconds per full orbit
const RADIUS   = 170 // px from centre — sized for desktop

const TechOrbit = () => {
  const n = orbitItems.length

  return (
    <div className="tech-orbit">
      {orbitItems.map((item, i) => (
        <div
          key={i}
          className="tech-orbit__item"
          style={{
            animationDelay: `${-DURATION * i / n}s`,
            animationDuration: `${DURATION}s`,
            '--radius': `${RADIUS}px`,
          }}
        >
          <span
            className="tech-orbit__badge"
            style={{ background: item.bg, color: item.color }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TechOrbit
