import React from 'react'
import ad_1 from "../assets/Ad_1.png"
import ad_2 from "../assets/Ad_2.png"
import ad_3 from "../assets/Ad_3.png"
import Container from './Container'

const Body = () => {
  return (
    <div className="bg-[#ffff] pt-[100px] pb-[70px]">
        <Container>
           <div className="flex items-center space-x-2 lg:space-x-10">
             <div className="w-6/12">
        <img className="w-full" src={ad_1} alt="" />
        </div>
        <div className="w-6/12 space-y-2 lg:space-y-8">
        <div className="">
            <img className="w-full" src={ad_2} alt="" />
        </div>
        <div>
            <img className="w-full" src={ad_3} alt="" />
        </div>
        </div>
           </div>
        </Container>
    </div>
  )
}

export default Body