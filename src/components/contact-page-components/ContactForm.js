import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
function ContactForm(){
    return(
        <div className="bg-[#293445] max-[600px]:flex-col max-[600px]:gap-[30px] flex p-[30px]">
<div className="contact-container flex flex-col basis-[50%] gap-[30px] pt-[40px]">
<h6>Contact info</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
<div className="info flex flex-col gap-[20px]">
    <span className="flex items-center gap-[10px]">
        <LocationOnIcon fontSize="small" className='text-[#FD307A]'/>
        <h2 className="text-white hover:text-[#FD307A]">A: 104 Doyers St. 9 Arlington Dr. 150 SW Bay Blvd.</h2>
    </span>
    <span className="flex items-center  gap-[10px]">
    <LocalPhoneIcon fontSize="small" className='text-[#FD307A]'/>
        <h2 className="text-white hover:text-[#FD307A]">555-388-7890</h2>
    </span>
    <span className="flex items-center gap-[10px]">
    <EmailIcon fontSize="small" className='text-[#FD307A]'/>
        <h2 className="text-white hover:text-[#FD307A]">contatc@info.com</h2>
    </span>
</div>

</div>
<div className="form-container basis-[50%] flex items-center justify-center p-[20px] bg-[#344257]">
    <form className="w-full flex flex-col gap-[30px]">
       <div className="w-full flex gap-[20px]">
       <input type="text" placeholder="First Name" className="w-full bg-white rounded-[3px]  p-[10px] outline-none border-none"></input>
       <input type="text" placeholder="Last Name" className="w-full bg-white rounded-[3px] p-[10px] outline-none border-none"></input>
       </div>
       <div className="flex flex-col gap-[30px]">
       <input type="email" placeholder="Email" className="bg-white rounded-[3px]  p-[10px] outline-none border-none"></input>
       <textarea type="text" placeholder="Last Name" className="bg-white rounded-[3px] p-[10px] outline-none border-none"></textarea>
       </div>
       <button type="submit" className="btn">Submit</button>
    </form>
</div>
        </div>
    )
}
export default ContactForm