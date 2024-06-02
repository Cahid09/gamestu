import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
function Header(){
const [menu,setMenu]=useState(false)
    const menuItems=[
{
    title:"Home",
    path:"/home"
},
{
    title:"Projects",
    path:"/projects"
},
{
    title:"About",
    path:"/about"
},
{
    title:"Contact",
    path:"/contact"
}

    ]
    return(
        <div className="absolute overflow-hidden top-0 left-0 w-full h-[70px] border-b-[1px] border-b-[#EAEAEA] max-[990px]:border-0 flex justify-between items-center p-[20px]">
<div>
    <img src="./logo.png"></img>
</div>
<div className={`${menu ? "fixed top-16 left-0 z-[99999999] bg-[#293445]  w-full" : "max-[1130px]:hidden"}`}>
    <ul className={`flex  ${menu ? "flex flex-col h-full" : "flex flex-row gap-[20px]"}`}>
        {menuItems.map((item,index)=>{
            return <Link to={`${item.path}`}>
                <li className={`text-[#FAFAFA]  ${menu ? "p-[15px] flex items-center" : "p-0"}`}>{item.title}</li>
            </Link>
        })}
    </ul>
</div>
<div onClick={()=>{setMenu(menu ? false : true)}} className='hidden max-[1130px]:flex items-center justify-center bg-[#FD307A] w-[40px] h-[40px] rounded-full'>
   {menu ? <CloseIcon className='text-white'/> : <MenuIcon className='text-white'/>}
</div>
        </div>
    )
}
export default Header