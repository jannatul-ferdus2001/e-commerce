import React from 'react'
import Container from './Container'
import logo_one from '../assets/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="py-10 bg-[#F5F5F3]">
        <Container>
           <div className="flex justify-between">
             <div className="w-2/12">
            <div className="">
                <h2 className="font-dm text-[16px] font-bold text-[#262626]">MENU</h2>
                <ul className="pt-[20px] text-[#6D6D6D] font-dm text-[14px]">
                    <li>Home</li>
                    <li className="pt-[10px]!">Shop</li>
                    <li className="pt-[10px]!">About</li>
                    <li className="pt-[10px]!">Contact</li>
                    <li className="pt-[10px]!">Journal</li>
                </ul>
            </div>

            </div>
            <div className="w-2/12">
             <div className="">
                <h2 className="font-dm text-[16px] font-bold text-[#262626]">SHOP</h2>
                <ul className="pt-[20px] text-[#6D6D6D] font-dm text-[14px]">
                    <li>Category 1</li>
                    <li className="pt-[10px]!">Category 2</li>
                    <li className="pt-[10px]!">Category 3</li>
                    <li className="pt-[10px]!">Category 4</li>
                    <li className="pt-[10px]!">Category 5</li>
                </ul>
            </div>
            </div>
            <div className="w-2/12">
            <div className="">
                <h2 className="font-dm text-[16px] font-bold text-[#262626]">HELP</h2>
                <ul className="pt-[20px] text-[#6D6D6D] font-dm text-[14px]">
                    <li>Privacy Policy</li>
                    <li className="pt-[10px]!">Terms & Conditions</li>
                    <li className="pt-[10px]!">Special E-shop</li>
                    <li className="pt-[10px]!">Shipping</li>
                    <li className="pt-[10px]!">Secure Payments</li>
                </ul>
            </div>
            </div>
            <div className="w-3/12">
            <div className="font-dm text-[16px] font-bold text-[#262626]">
                <h2>(052) 611-5711</h2>
            <h3>company@domain.com</h3>
            </div>
            </div>
            <div className="w-3/12">
            <div className="">
                <img src={logo_one} alt="" />
            </div>
            </div>
           </div>
           <div className="flex">
            <div className="w-2/12">
            <div className="flex gap-2 pt-10 text-[#262626]">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
             
            </div>
            </div>
            <div className="w-10/12">
            <div className="text-[#6D6D6D] font-dm text-[14px] pt-10 text-end">
                <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default Footer