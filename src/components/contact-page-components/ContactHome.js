import Footer from "../Footer"
import ContactForm from "./ContactForm"
import ContactPage from "./ContactPage"
import Map from "./MapSection"

function ContactHome(){
    return(
        <div>
        <ContactPage/>
            <div>
    <ContactForm/>
    <Map/>
           <Footer/>
        </div>
        </div>
    )
}
export default ContactHome