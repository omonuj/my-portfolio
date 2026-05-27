import CV from '../../assets/Jonah_CV.docx.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import AboutOrbit from './AboutOrbit'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <AboutOrbit />
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                    Senior Software Engineer with 7+ years designing and delivering backend systems,
                    fintech platforms, healthcare APIs, and AI infrastructure at scale. I've built
                    payment engines processing 100k+ monthly transactions at Stax, HIPAA-compliant
                    healthcare platforms for 50k+ patients at Reliance Health, backend systems for
                    10k+ users at Andela, and distributed Kubernetes infrastructure for LLM
                    benchmarking at Bespoke Labs.
                </p>
                <p>
                    My stack spans Java, Spring Boot, Python, Node.js, TypeScript, React, and Next.js,
                    with cloud-native delivery on AWS and GCP using Docker, Kubernetes, Terraform, and
                    CI/CD pipelines. I also build RAG systems, integrate LLM pipelines, and ship ML
                    models into production. I care deeply about reliability, observability, and writing
                    code that other engineers are proud to maintain.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About
