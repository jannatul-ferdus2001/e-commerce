import React from 'react'
import Container from './Container'
import Six from '../assets/six.png'
import Seven from '../assets/seven.png'
import Eight from '../assets/eight.png'
import Nine from '../assets/nine.png'
import { FaHeart } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import Slider from 'react-slick'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

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


const Newone = () => {
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='py-[70px]'>
            <Container>
                <Slider {...settings}>
                    <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Six} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>
                        </div>
                        <div className="bg-[#ffff] w-full absolute bottom-[11%] left-0 opacity-0 group-hover:opacity-100">
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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Seven} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>

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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Eight} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>


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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Nine} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>

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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Six} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">10%</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>
                        </div>
                        <div className="bg-[#ffff] w-full absolute bottom-[11%] left-0 opacity-0 group-hover:opacity-100">
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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Seven} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>

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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Eight} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>


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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Nine} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>

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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Six} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">10%</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>
                        </div>
                        <div className="bg-[#ffff] w-full absolute bottom-[11%] left-0 opacity-0 group-hover:opacity-100">
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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Seven} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>

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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Eight} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>


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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Nine} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>

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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Six} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">10%</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>
                        </div>
                        <div className="bg-[#ffff] w-full absolute bottom-[11%] left-0 opacity-0 group-hover:opacity-100">
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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Seven} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>

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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Eight} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>


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
                <div className="w-3/12 group pr-6">
                    <div className="relative">
                        <img src={Nine} alt="" />
                        <div className="absolute top-[5%] left-[7%] bg-[#262626] pt-[5px] pl-[15px] pr-[15px] pb-[5px] text-[#ffff] font-dm font-[700] text-[14px]">New</div>
                        <div className="flex justify-between items-center pt-3">
                            <h5 className="font-dm font-[700] text-[20px] text-[#262626]">Basic Crew  Neck Tee</h5>
                            <p className="font-dm font-[400] text-[16px] text-[#767676]">$44.00</p>

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





                </Slider>


            </Container>
        </div>
    )
}

export default Newone