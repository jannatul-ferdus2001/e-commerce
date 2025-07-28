import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const Header = () => {
    let [menu, setMenu] = useState(false)
  return (
    <header className='py-3'>
        <Container>
        <div className='lg:flex items-center'>
            <div className='lg:w-2/12 relative z-[1]'>
             <img src={Logo} alt="" />
        </div>
        <div className=' w-full lg:w-10/12'>
            <ul className={`lg:flex gap-6 justify-center duration-300 ease-in-out ${menu == true ? "bg-[#eccdcd] h-[0px] opacity-0" : "bg-[#a79d9d] h-[120px] opacity-100 lg:h-[0px]"}`}>
                <li className='font-dm text-[#767676] text-[14px] hover:text-[#262626] duration-300 ease-in-out hover:font-bold leading-[0px]'>Home</li>
                <li className='font-dm text-[#767676] text-[14px] hover:text-[#262626] duration-300 ease-in-out hover:font-bold leading-[0px]'>Shop</li>
                <li className='font-dm text-[#767676] text-[14px] hover:text-[#262626] duration-300 ease-in-out hover:font-bold leading-[0px]'>About</li>
                <li className='font-dm text-[#767676] text-[14px] hover:text-[#262626] duration-300 ease-in-out hover:font-bold leading-[0px]'>Contacts</li>
                <li className='font-dm text-[#767676] text-[14px] hover:text-[#262626] duration-300 ease-in-out hover:font-bold leading-[0px]'>Journal</li>




            </ul>
        </div>
        <div className='lg:hidden absolute top-[10px] right-2' onClick={()=>setMenu(!menu)}>
            {menu ?  <RxCross2/> : <FaBars/>}
          
        </div>
        </div>
    </Container>
    </header>
  )
}

export default Header