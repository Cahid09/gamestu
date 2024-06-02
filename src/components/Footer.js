function Footer(){
    return(
        <div className="footer grid grid-cols-3 max-[990px]:grid-cols-1 place-items-center">
<div className="flex flex-col gap-[20px] basis-[30%] w-1/1 p-[50px] max-[990px]:items-center">
<img src="./logo-footer.png" className="h-[60px] w-[150px]"></img>
<h6 className="max-[990px]:text-center">Copyright © 2024 Game Dev Studio

Powered by Game Dev Studio</h6>
</div>
<div className="flex flex-col items-center gap-[20px] w-1/1 p-[50px]">
<div>
    <h1>Links</h1>
</div>
<div className="flex flex-col gap-[5px] max-[990px]:items-center">
<h6 className="hover:text-[#FD307A] cursor-pointer">Home</h6>
<h6  className="hover:text-[#FD307A] cursor-pointer">Projects</h6>
<h6  className="hover:text-[#FD307A] cursor-pointer">About</h6>
<h6  className="hover:text-[#FD307A] cursor-pointer">Contact</h6>
</div>
</div>
<div className="flex flex-col gap-[20px] w-1/1 p-[50px] max-[990px]:items-center">
<div>
    <h1>Adress</h1>
</div>
<div className="flex flex-col gap-[5px] max-[990px]:items-center">
    <h6  className="hover:text-[#FD307A] cursor-pointer max-[990px]:text-center">104 Doyers St. 9 Arlington Dr. 150 SW Bay Blvd.</h6>
    <h6  className="hover:text-[#FD307A] cursor-pointer">contact@info.com</h6>
    <h6  className="hover:text-[#FD307A] cursor-pointer">555-388-7890</h6>
</div>
</div>
        </div>
    )
}
export default Footer