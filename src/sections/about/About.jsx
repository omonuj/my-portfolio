import AboutImage from '../../assets/logo.jpg'
import CV from '../../assets/Gjonah.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
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
                Building projects my clients love have always been my passion. Being in 
                the tech industry for over 3 years and serving more than 21
                 happy clients worldwide, I'm always motivated to do more!
                </p>
                <p>
                    Software Engineer with over 4 years of experience building scalable and 
                    reliable systems in fintech and beyond. Proven track record at Karabo Fintech,
                     where I developed fraud detection systems, payment services, and real-time 
                     transaction monitoring to enhance security and efficiency. Skilled in 
                     microservices architecture, API integrations, and real-time data pipelines,
                      with strong expertise in cloud platforms (AWS, GCP), CI/CD automation, 
                      and containerized deployments using Docker and Kubernetes. Dedicated 
                      to delivering secure, high-performance, and collaborative software solutions.


                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About