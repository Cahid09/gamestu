import CountUp from "react-countup";
function Facts(){
    const items=[
        {
            id:15,
            text:"Years of experience"
        },
        {
            id:120,
            text:"Clients That Love us"
        },
        {
            id:75,
            text:"Talented Artists"
        },
        {
            id:50,
            text:"games Developed"
        }
    ]
    return(
        <div className="facts-home">
 <div className="facts-container">
    <div className="facts-content flex flex-col">
        <h1>Some Gaming Facts</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque magna, laoreet cursus velit sed, laoreet congue turpis. Aliquam erat volutpat. Sed egestas dignissim nibh, ut posuere odio. Sed luctus ipsum elit, id sodales metus.</p>
    </div>
    <div className="grid grid-cols-4 max-[540px]:mt-[40px] max-[1130px]:grid-cols-1 p-[0px] pb-[0px] max-[1130px]:p-[0px]">
{
    items.map(item=>{
        return <div className="w-1/1  p-[50px] max-[540px]:p-[10px] flex flex-col border-b-0 border-[1px] border-[#57555F]">
 <CountUp className="count-up" start={0} end={item.id} duration={5} />
<h1 className="small-title service-text ">{item.text}</h1>
            </div>
    })
}
        </div>
 </div>
        </div>
    )
}
export default Facts