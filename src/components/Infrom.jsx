import React from 'react'
import Two from '../assets/two.png'
import Shape from '../assets/shape.png'
import path from '../assets/Path.png'
import Container from './Container'

const Infrom = () => {
  return (
    <div className="py-[30px] border-b-[1px] border-[#F0F0F0] bg-[#ffff]">
        <Container>
            <div className="flex justify-between">
                <div className="w-4/12">
        <div className="flex">
            <img src={Two} alt="" />
            <p className="pl-2 font-dm text-[16px] font-[400] text-[#6D6D6D]">Two years warranty</p>
        </div>
        </div>
        <div className="w-4/12">
        <div className="flex pl-[100px]">
            <img src={Shape} alt="" />
            <p className="pl-2 font-dm text-[16px] font-[400] text-[#6D6D6D]">Free shipping</p>
        </div>
        </div>
        <div className="w-4/12">
        <div className="flex justify-end">
           <img src={path} alt="" />
           <p className="pl-2 font-dm text-[16px] font-[400] text-[#6D6D6D]">Return policy in 30 days</p>
         </div>
        </div>
            </div>
        </Container>
    </div>
  )
}

export default Infrom