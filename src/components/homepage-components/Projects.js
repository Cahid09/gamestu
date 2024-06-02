import Card from "./Card"

function Projects(){
    const games=[
        {
            name:"Electronic Games",
            head:"Worlds of Robots",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
            background:"./card1.jpg"
        },
        {
            name:"Beautiful Amalthea",
            head:"Gaming Company",
            description:"Dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            background:"./card2.jpg"
        },
        {
            name:"Games X",
            head:"The Warriors Lounge",
            description:"Amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo tellus.",
            background:"./card3.jpg"
        },
        {
            name:"Super Games",
            head:"Jungle Adventures",
            description:"Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis dapibus.",
            background:"./card4.jpg"
        }
    ]
    return(
        <div className="home-proejcts-container">
<div className="projects-top-section flex justify-between items-center max-[570px]:flex-col max-[570px]:items-start max-[570px]:gap-[20px]">
    <h1>Our Game Projects</h1>
    <a href="#" className="overflow-hidden">All projects</a>
</div>
<div className="grid grid-cols-4 max-[600px]:grid-cols-1">
  {games.map((game,index)=>{
    return <Card name={game.name} head={game.head} description={game.description} background={game.background}/>
  })}
</div>
        </div>
    )
}
export default Projects