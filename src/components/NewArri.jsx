import React, { useContext } from 'react'
import Container from './Container'
import { FaHeart } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import Slider from 'react-slick'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ApiData } from './ContextApi'
import { Link } from 'react-router-dom'



function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      onClick={onClick}
    >
        <FaLongArrowAltRight className="h-[50px] w-[50px] bg-[rgba(40,38,38,0.2)] rounded-[50%] text-[#fff] absolute top-[40%] right-[60px] z-100 translate-y-[-50%]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div className=""
      onClick={onClick}
    >
        <FaLongArrowAltLeft className="h-[50px] w-[50px] bg-[rgba(40,38,38,0.2)] rounded-[50%] text-[#fff]  absolute top-[40%] left-[30px] z-100 translate-y-[-50%]"/>
    </div>
  );
}



const NewArri = () => {
    let {info, loading} = useContext(ApiData) 
    const newProduct = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  

 if(loading){
     return(
        <Container>
                    <h2 className='text-center font-dm text-[#262626] font-bold'>Loading.........</h2>
        </Container>
     )
 }




  return (
    <div>
     <Container>
        <div className="pb-10">
            <p className="text-[39px] text-[#262626] font-dm font-[700]">New Arrivals</p>
        </div> 
              <Slider {...newProduct}>
                {info.map((item)=>(
                  <div className="w-3/12 group pr-6">
            <div className="relative">
              <Link to="/shop">
                <img src={item.thumbnail} alt="" />
                </Link>
                <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pr-[15px] pl-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">{item.discountPercentage}</div>
                <div className="flex justify-between items-center pt-3">
                    <h5 className="font-dm font-[700] text-[20px] text-[#262626]">{item.title}</h5>
                    <p className="font-dm font-[400] text-[16px] text-[#767676]">${item.price}</p>
                </div>
                 <div className="font-dm font-[400] text-[16px] text-[#767676] pt-4">Black</div>
                <div className="bg-[#ffff] w-full absolute bottom-[21%] left-0 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center">
                        <p className='font-dm text-[16px] text-[#767676] pt-[20px] pl-[120px]'>Add to Wish List</p>
                       <div className="pl-[20px] pt-[20px]"> <FaHeart /></div>

                    </div>
                <div className="pt-[20px] pl-[250px]"><FiRefreshCcw /></div>
                <div className="flex items-center">
                    <p className='font-bold font-dm text-[16px] text-[#262626] pt-[20px] pl-[140px] pb-[20px]'>Add to Cart</p>
                    <div className="pl-[20px] pt-[20px] pb-[20px]"><FaShoppingCart /></div>
                </div>

                </div>
            </div>
            </div>
                

              ))}
              </Slider>
            
     </Container>
      
    </div>
  )
}

export default NewArri