import Footer from "./Footer"
import TalkABout from "./common/TalkAbout"
import AboutSection from "./homepage-components/AboutSection"
import CustomAccordion from "./homepage-components/Accordion"
import Clients from "./homepage-components/Clients"
import Home from "./homepage-components/Home"
import Projects from "./homepage-components/Projects"
import WhyUs from "./homepage-components/WhyUs"

function Homepage(){
    const bgImage="./talkabout.jpg"
    return(
        <>
        <Home/>
        <div className="homepage-container">
            <AboutSection/>
            <Projects/>
            <WhyUs/>
            <Clients/>
            <TalkABout bgImage={bgImage}/>
        </div>
        <Footer/>
        </>
    )
}
export default Homepage