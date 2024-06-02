function ProjectContainer(){
    return(
        <div className="project-container-box relative">
<div className="basis-[50%]  box-1">
<div className="flex flex-col gap-[60px] box-alt-1">
    <div className="flex flex-col gap-[10px]">
        <h1>Alien <br></br>Planets</h1>
        <p className="w-[70%]">Proin at justo a diam rhoncus sodales. Duis finibus lobortis ornare. Quisque vulputate velit justo, nec tempus tortor condimentum non. Vestibulum leo leo, egestas a iaculis eget, laoreet ut tellus.</p>
    </div>
    <div className="flex gap-[10px]">
        <div className="flex flex-col justify-center gap-[20px]">
            <span className="flex gap-[10px] items-center">
                <h6 className="text-[#FD307A]">Game type:</h6>
                <h5 className="text-white">P2E Game</h5>
            </span>
            <span className="flex gap-[10px] items-center">
            <h6 className="text-[#FD307A]">Game type:</h6>
                <h5 className="text-white">P2E Game</h5>
            </span>
            <span className="flex gap-[10px] items-center">
            <h6 className="text-[#FD307A]">Game type:</h6>
                <h5 className="text-white">P2E Game:</h5>
            </span>
            <span className="flex gap-[10px] items-center">
            <h6 className="text-[#FD307A]">Game type:</h6>
                <h5 className="text-white">P2E Game</h5>
            </span>
        </div>
    </div>
</div>
</div>
<div className="basis-[50%] box-2">
<div className="flex flex-col gap-[60px] box-alt-1 h-full items-center border-box">
  <img src="./box2-alt.jpg" className="absolute left-[40%] top-[5%] z-[99999] h-[500px] w-[750px] max-[990px]:relative max-[990px]:w-[100%] max-[990px]:h-[300px] max-[990px]:left-0"></img>
</div>
</div >
        </div>
    )
}
export default ProjectContainer