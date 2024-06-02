import Services from "./Services"

function Home(){
    return(
        <div className="home">
            <div className="home-container flex flex-col">
<h6 className="text-[#f8f8f8]">Welcome, we are a cool</h6>
<h1>Game <br></br>Development<br></br> Studio</h1>
<Services/>
            </div>

        </div>
    )
}
export default Home