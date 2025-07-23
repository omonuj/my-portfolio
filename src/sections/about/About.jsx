import AboutImage from '../../assets/logo.jpg'
import CV from '../../assets/jonah.pdf'
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
                    Hi, my name is Jonah, i am a Software Engineer based in Lagos, Nigeria, with a Bachelor's degree 
                    in Economics, and a one-year professional training certificate in Software Engineering.
                    During my training, I gained practical experience in DevOps, cloud engineering, 
                    and full-stack development — enabling me to build, deploy, and manage scalable 
                    web applications end-to-end.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About