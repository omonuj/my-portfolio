import AboutImage from '../../assets/logo.jpg'
import CV from '../../assets/jonah odoh.pdf'
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
                    <img src={AboutImage} alt="Jonah Odoh logo" />
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
                Building high-performance, distributed backend systems has been 
                my passion for over 7 years. At Andela, I’ve delivered scalable, 
                reliable solutions for global clients, impacting more than 21 organizations
                 worldwide. I thrive on designing systems my clients love while solving complex 
                 technical challenges with precision and efficiency.
                </p>
                <p>
                   I am a Backend Engineer with expertise in designing and scaling 
                   distributed systems using Python, Java, and Kubernetes, with a strong 
                   focus on reliability, performance, and high-scale transaction processing. 
                   Experienced in building idempotent systems, ensuring data consistency, and 
                   implementing robust error-handling mechanisms to drive production-grade backend 
                   solutions.


                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About