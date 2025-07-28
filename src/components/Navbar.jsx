import{ useRef, useState } from 'react'
import Container from './Container'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";






const Navbar = () => {
    let cateRef = useRef()
    let accRef = useRef()
    let cartRef = useRef()
    let [show, setShow] = useState(false)
    let [accshow, setAccShow] = useState(false)
    let [cartshow, setCartShow] = useState(false)
    useEffect(()=>{
       
        
        document.addEventListener("click",(e) =>{
            if(cateRef.current.contains(e.target) == true){
               setShow(!show)
            }else{
                setShow(false)
            }
            if(accRef.current.contains(e.target) == true){
               setAccShow(!accshow)
            }else{
                setAccShow(false)
            }
             if(cartRef.current.contains(e.target) == true){
               setCartShow(!cartshow)
            }else{
                setCartShow(false)
            }
            
            
        })
        
    }, []);
   
  return (
    <div className="bg-[#F5F5F3] py-3">
        <Container>
        <div className="flex items-center">
        <div className="w-2/7 relative">
        <div ref={cateRef} className="flex items-center gap-x-2">
            <FaBarsStaggered />
            <h3>Shop by Category</h3>
        </div>
       {show &&
       <div className="bg-[#262626] py-3 absolute left-0 top-[33px] w-full z-100">
            <ul>
                <li className="text-[rgba(255,255,255,0.7)] pl-[20px] hover:pl-[30px] duration-300 ease-in-out py-2 border-b-[1px] border-[#D8D8D8] hover:text-[#ffff]">
                    <div className="flex justify-between items-center pr-2">
                        <span>Accessories</span>
                        <FaChevronRight />
                    </div>
                    </li>
                <li className="text-[rgba(255,255,255,0.7)] pl-[20px] hover:pl-[30px] duration-300 ease-in-out py-2 border-b-[1px] border-[#D8D8D8] hover:text-[#ffff]">
                    <div className="flex justify-between items-center pr-2">
                        <span>Furniture</span>
                        <FaChevronRight />
                    </div>
                    
                    </li>
                <li className="text-[rgba(255,255,255,0.7)] pl-[20px] hover:pl-[30px] duration-300 ease-in-out py-2 border-b-[1px] border-[#D8D8D8] hover:text-[#ffff]">
                     <div className="flex justify-between items-center pr-2">
                        <span>Electronics</span>
                        <FaChevronRight />
                    </div>
                    </li>
                <li className="text-[rgba(255,255,255,0.7)] pl-[20px] hover:pl-[30px] duration-300 ease-in-out py-2 border-b-[1px] border-[#D8D8D8] hover:text-[#ffff]">
                    <div className="flex justify-between items-center pr-2">
                        <span>Clothes</span>
                        <FaChevronRight />
                    </div>
                    </li>
                <li className="text-[rgba(255,255,255,0.7)] pl-[20px] hover:pl-[30px] duration-300 ease-in-out py-2 border-b-[1px] border-[#D8D8D8] hover:text-[#ffff]">
                    <div className="flex justify-between items-center pr-2">
                        <span>Bags</span>
                        <FaChevronRight />
                    </div>
                    </li>
                <li className="text-[rgba(255,255,255,0.7)] pl-[20px] hover:pl-[30px] duration-300 ease-in-out py-2 hover:text-[#ffff]">
                    <div className="flex justify-between items-center pr-2">
                        <span>Home appliances</span>
                        <FaChevronRight />
                    </div>
                    </li>
            </ul>
        </div>
       }
        </div>
        <div className="w-4/7">
        <div className="relative">
          <input
      type="text"
      placeholder="Search Products"
      className="py-3 w-full pl-4 bg-[#ffff] text-[#C4C4C4] font-dm text-[14px] font-[400] outline-0"
         />

          <div className="absolute right-6 top-[50%] translate-y-[-50%]">
            <FaSearch />

          </div>
        </div>
        </div>
        <div className="w-1/7 relative">
        <div className="flex items-center justify-end gap-x-4">
            <div ref={accRef} className="flex">
               <FaUser className="" />
               <FaCaretDown />
            </div>
            <div ref={cartRef} className="">
                <FaCartArrowDown />
            </div>
        </div>
       {accshow &&
        <div className="bg-[#fff] py-3 absolute left-0 top-[33px] w-full text-[#262626] z-100">
            <ul>
                <li className="hover:bg-[#262626] hover:text-[#fff] py-2 text-center duration-300 ease-in-out">My Account</li>
                <li className="hover:bg-[#262626] hover:text-[#fff] py-2 text-center duration-300 ease-in-out">Login</li>
            </ul>
        </div>
       }
      {cartshow &&
       <div className="w-[270px] absolute top-[38px] left-0 z-100 ">
        <div className="flex items-center p-[10px] bg-[#F5F5F5] justify-between">
        <div className="h-[80px] w-[80px] bg-[#D8D8D8]"></div>
                <div className="font-dm text-[14px] font-bold">
                    <p>Black Smart Watch</p>
                    <p>$44.00</p>
                </div>
            <div className="">
                    <RxCross2 />

                </div>

       </div>
       <div className="p-[10px]">
        <div className="">
            <p className='text-[14px] font-dm text-[#767676]'>Subtotal: <span className="font-bold text-[#262626]"> $44.00</span></p>
        </div>
        <div className="pt-5">
            <ul className='flex justify-between'>
                <li className='border-2 border-[#2B2B2B] py-5 px-5 text-[14px] font-bold font-dm text-center hover:text-[#ffff] hover:bg-[#262626]'>View Cart</li>
                <li className='border-2 border-[#2B2B2B] py-5 px-5 text-[14px] font-bold font-dm text-center hover:text-[#ffff] hover:bg-[#262626]'>Checkout</li>
            </ul>
            

        </div>
       </div>
       </div>

      }
        </div>

        </div>
    </Container>

    </div>
  )
}

export default Navbar