import { useEffect } from 'react'
import HeaderImage from '../../assets/profile.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const stats = [
  { value: '7+',    label: 'Years\nExp.' },
  { value: '4',     label: 'Companies' },
  { value: '50k+',  label: 'Users' },
  { value: '99.9%', label: 'Uptime' },
]

const ticker = [
  'Java', 'Spring Boot', 'Node.js', 'TypeScript', 'React', 'Next.js',
  'AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL',
  'Python', 'NestJS', 'Prometheus', 'Grafana', 'CI/CD', 'Redis',
]

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true })
  }, [])

  return (
    <header id="header">
      <div className="container header__container">

        {/* LEFT COLUMN */}
        <div className="header__left" data-aos="fade-right">
          <p className="header__eyebrow">Senior Software Engineer</p>

          <h1 className="header__name">
            Jonah<br />
            <em>Odoh</em>
          </h1>

          <p className="header__bio">
            7+ years building distributed systems and full-stack platforms
            across fintech, healthcare, and AI infrastructure.
            I write the code, own the architecture, and ship.
          </p>

          <div className="header__stats">
            {stats.map((s, i) => (
              <div key={i} className="header__stat">
                <span className="header__stat-value">{s.value}</span>
                <span className="header__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="header__cta">
            <a href="#contact" className="btn primary">Let's Talk</a>
            <a href="#portfolio" className="btn outline">View Work</a>
          </div>

          <div className="header__socials">
            {data.map(item => (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="header__right" data-aos="fade-left">
          <div className="header__photo-wrap">
            {/* Subtle glow ring */}
            <div className="header__photo-ring" />
            {/* Photo */}
            <div className="header__photo">
              <img src={HeaderImage} alt="Jonah Odoh" />
            </div>
          </div>
        </div>

      </div>

      {/* SCROLLING TICKER */}
      <div className="header__ticker" aria-hidden="true">
        <div className="header__ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="header__ticker-item">
              {t}
              <span className="header__ticker-dot">&nbsp;·&nbsp;</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
