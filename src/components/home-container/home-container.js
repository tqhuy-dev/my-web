import AboutMe from '../about-me/about-me';
import Portfolio from '../portfolio/portfolio';
import ServiceContainer from '../service-container/services-container';
import ExperienceContainer from '../experience-container/experience-container';
import ContactContainer from '../contact-container/contact-container';
function HomeContainer() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000A24' }}>
            <AboutMe/>
            <ServiceContainer/>
            <Portfolio/>
            <ExperienceContainer/>
            <ContactContainer/>
        </div>
    )
}

export default HomeContainer;