import Platforms from "./PlatformsSection"

function AboutHomeSection(){
    return(
        <div className="flex flex-col items-center justify-center bg-[#293445] pb-[60px]">
<img src="./about-hero.jpg" className="max-[600px]:w-[90%]"></img>
<Platforms/>
        </div>
    )
}
export default AboutHomeSection