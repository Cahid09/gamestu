import Accordion from "./Accordion"

function AboutSection(){
    return(
        <div className="about-section">
<div className="about-container">
   <div className="left-bar">
   <div className="top-content">
   <h6>About Us</h6>
    <h1>We are a team of super artists ut interdum nunc, vel pretium ligula.</h1>
   </div>
   <div className="bottom-content">
    <p>Vestibulum sapien nisl, auctor vel feugiat et, pellentesque vitae arcu. Phasellus accumsan quis dui non tempus. Aenean venenatis malesuada quam quis posuere.</p>
  <a href="#">Read More</a>
   </div>
   </div>
   <div className="right-bar">
    <img src="./about-img.jpg"></img>
   </div>
</div>
<Accordion/>
        </div>
    )
}
export default AboutSection