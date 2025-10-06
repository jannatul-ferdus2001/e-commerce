import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
    let [menu, setMenu] = useState(false)

    let location = useLocation()
    console.log(location);
    
    
  return (
    <header className='py-3'>
        <Container>
        <div className='lg:flex items-center'>
            <div className='w-2/12 relative'>
             <img src={Logo} alt="" />
        </div>
        <div className='w-full lg:w-10/12'>
            <ul className={`lg:flex gap-6 lg:bg-transparent justify-center duration-300 ease-in-out 
                ${ menu == true 
                ? "bg-[#eccdcd]"
                : "mt-[-200px] lg:mt-0"}`}>
                <li className= {`font-dm text-[#767676] text-[14px] ${location.pathname=="/" ? "text-red-500 text-4xl" : "text-[#767676]"} hover:text-[#262626] duration-300 ease-in-out hover:font-bold`}><Link to="/">Home</Link></li>
                <li className= {`font-dm text-[#767676] text-[14px] ${location.pathname=="/shop" ? "text-red-500 text-4xl" : "text-[#767676]"} hover:text-[#262626] duration-300 ease-in-out hover:font-bold`}><Link to="/shop">Shop</Link></li>
                <li className={`font-dm text-[#767676] text-[14px] ${location.pathname=="/about" ? "text-red-500 text-4xl" : "text-[#767676]"} hover:text-[#262626] duration-300 ease-in-out hover:font-bold`}>About</li>
                <li className={`font-dm text-[#767676] text-[14px] ${location.pathname=="/contact" ? "text-red-500 text-4xl" : "text-[#767676]"} hover:text-[#262626] duration-300 ease-in-out hover:font-bold`}>Contacts</li>
                <li className={`font-dm text-[#767676] text-[14px] ${location.pathname=="/journal" ? "text-red-500 text-4xl" : "text-[#767676]"} hover:text-[#262626] duration-300 ease-in-out hover:font-bold`}>Journal</li>




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