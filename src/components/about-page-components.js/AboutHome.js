import Footer from "../Footer"
import TalkABout from "../common/TalkAbout"
import Clients from "../homepage-components/Clients"
import AboutPage from "./About"
import AboutHomeSection from "./AboutHomeSection"
import Facts from "./Facts"

function AboutHome(){
    const bgImage="./talks-about2.jpg"
    return(
        <div>
        <AboutPage/>
            <div>
                <AboutHomeSection/>
                <Facts/>
                <Clients/>
         <TalkABout bgImage={bgImage}/>
           <Footer/>
        </div>
        </div>
    )
}
export default AboutHome