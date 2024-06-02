import SimpleSlider from "./Slider"


function Clients(){
    return(
        <div className="clients-container">
            <div className="clients-container-content flex flex-col gap-[20px]">
                <h6>Popular Clients</h6>
                <h1>Trusted by great<br></br> companies</h1>
            </div>
<SimpleSlider/>
        </div>
    )
}
export default Clients