function WhyUs(){
    const items=[
        {
            title:"High Standards",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            title:"Cooperative Spirit",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            title:"Creative Passion",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
    ]
    return(
        <div className="why-us">
            <div className="why-us-container">
                <h6>Why choose us</h6>
                <h1>We have put together a very talented and highly skilled visual artist...</h1>
            </div>
            <div className="why-us-slider grid grid-cols-3 max-[570px]:grid-cols-1 border-b-[1px] border-[#B1ADAE]">
    {items.map((item,index)=>{
        return <div>
<h5>{item.title}</h5>
<p>{item.description}</p>
        </div>
    })}
            </div>

        </div>
    )
}
export default WhyUs