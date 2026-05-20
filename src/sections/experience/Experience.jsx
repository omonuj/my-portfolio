import data from './data'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <p>Engineering across fintech, healthcare, and AI platforms</p>
      <div className="container experience__container" data-aos="fade-up">
        {data.map(item => (
          <article key={item.id} className="experience__item">
            <div className="experience__item-header">
              <div className="experience__item-title">
                <h4>{item.role}</h4>
                <h5 className="experience__company">
                  {item.company}
                  <span className="experience__location"> · {item.location}</span>
                </h5>
              </div>
              <span className="experience__period">{item.period}</span>
            </div>
            <ul className="experience__bullets">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="experience__tags">
              {item.stack.map((tag, i) => (
                <span key={i} className="experience__tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
