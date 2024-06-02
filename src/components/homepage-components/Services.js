function Services(){
    const items=[
        {
            id:"_01",
            text:"Full Cycle Game Development"
        },
        {
            id:"_02",
            text:"NFT Game Development"
        },
        {
            id:"_03",
            text:"Game Testing & Porting"
        },
        {
            id:"_04",
            text:"Gamification Services"
        }
    ]
    return(
        <div className="grid grid-cols-4 max-[540px]:mt-[40px] max-[1130px]:grid-cols-1 p-[20px] pb-[0px] max-[1130px]:p-[0px]">
{
    items.map(item=>{
        return <div className="w-1/1  p-[50px] max-[540px]:p-[10px] flex flex-col border-b-0 border-[1px] border-[#57555F]">
<h6 className="text-[#FD307A]">{item.id}</h6>
<h1 className="small-title service-text ">{item.text}</h1>
            </div>
    })
}
        </div>
    )
}
export default Services