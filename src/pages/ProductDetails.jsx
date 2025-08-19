import React, { useEffect } from 'react'
import Container from '../components/Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Fifteen from "../assets/fifteen.png"
import Thirteen from "../assets/thirteen.png"
import Twelve from "../assets/twelve.png"
import Eleven from "../assets/eleven.png"
import { TiStar } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";



const ProductDetails = () => {
    let productId = useParams()
    let singleProduct = () =>{
       axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
        console.log(response.data);
        
       })
    }
    useEffect(()=>{
      singleProduct()
    },[])
    
  return (
    <Container>
        <div className="flex justify-between">
        <div className="w-6/12">
        <img className='w-full' src={Fifteen} alt="" />
        </div>
        <div className="w-6/12">
        <img className='w-full' src={Thirteen} alt="" />
        </div>
        </div>
        <div className="flex justify-between py-5">
          <div className="w-6/12">
           <img className='w-full' src={Twelve} alt="" />
          </div>
          <div className="w-6/12">
          <img className='w-full' src={Eleven} alt="" />
          </div>
        </div>

        <div className="w-6/12 py-4">
          <div className="w-3/12 flex justify-between items-center">
            <div className="flex text-[#FFD881]">
              <TiStar />
              <TiStar />
              <TiStar />
              <TiStar />
              <TiStar />
            </div>
            <div className="font-dm text-[#767676] text-[16px]">
              <p>1Review</p>
            </div>
          </div>
          <div className="w-3/12 py-4 flex justify-between items-center">
            <div className="relative">
            <p className='text-[16px] font-dm text-[#767676] font-[400]'>$88.00</p>
              <div className="w-12 border-1 border-[#767676] absolute bottom-3 left-0"></div>
            </div>
            <div className="">
              <h5 className='font-dm text-[20px] font-[700] text-[#262626]'>$44.00</h5>
            </div>
          </div>
          <div className="border-b-1 border-[#F0F0F0]"></div>
          <div className="w-5/12 flex justify-between items-center py-4">
            <div className="font-dm text-[16px] font-[700] text-[#262626] pr-5 "><p>COLOR:</p></div>
            <div className="w-[20px] h-[20px] bg-[#e3dddd] rounded-full"></div>
            <div className="w-[28px] h-[28px] bg-[#FF8686] rounded-full"></div>
            <div className="w-[20px] h-[20px] bg-[#7ED321] rounded-full"></div>
            <div className="w-[20px] h-[20px] bg-[#B6B6B6] rounded-full"></div>
            <div className="w-[20px] h-[20px] bg-[#15CBA5] rounded-full"></div>
            </div>
            <div className="w-4/12 flex justify-between items-center">
              <div className="font-dm text-[16px] font-[700] text-[#262626] pr-5"><h6>SIZE:</h6></div>
              <div className="">
                <select name="" id="" className="pl-[25px] pr-[60px] py-2 bg-[#ffff] my-5 text-[#C4C4C4] font-dm text-[14px] font-[400] outline-1">
                 <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="Xl">Xl</option>
                  <option value="Xll">Xll</option>
                </select>
              </div>
            </div>
            <div className="w-3/12 flex justify-between items-center">
          <div className="font-dm text-[16px] font-[700] text-[#262626] pr-5"><p>QUANTITY:</p></div>
          <input type="text" placeholder='- 1 +' className='pl-[20px] py-2 bg-[#ffff] my-5 text-[#C4C4C4] font-dm text-[14px] font-[400] outline-1'/>

            </div>
         <div className="border-b-1 border-[#F0F0F0]"></div>
         <div className="w-3/12 py-4 flex justify-between items-center">
            <div className="">
            <h6 className='text-[16px] font-dm text-[#262626] font-[700]'>STATUS:</h6>
            </div>
            <div className="">
              <p className='font-dm text-[16px] font-[400] text-[#767676]'>In stock</p>
            </div>
          </div>
        <div className="border-b-1 border-[#F0F0F0]"></div>
        <div className="w-8/12 flex justify-between items-center py-4">
          <div className="px-[40px] py-4 border-1 border-[#262626] text-[#262626] text-[14px] font-dm font-[700] hover:border-none hover:bg-[#262626] hover:text-[#fff]">
            <p>Add to Wish List</p>
          </div>
          <div className="px-[40px] py-4 border-1 border-[#262626] text-[#262626] text-[14px] font-dm font-[700] hover:border-none hover:bg-[#262626] hover:text-[#fff]">
            <p>Add to Cart</p>
          </div>
        </div>
      <div className="border-b-1 border-[#F0F0F0]"></div>

          <div className="py-4 flex justify-between items-center">
            <div className="font-dm text-[16px] text-[#262626] font-[700]">
              <h6>FEATURES  & DETAILS</h6>
            </div>
            <div className="">
            <FaPlus />

            </div>
          </div>
         <div className="border-b-1 border-[#F0F0F0]"></div>
         <div className="py-4 flex justify-between items-center">
            <div className="font-dm text-[16px] text-[#262626] font-[700]">
              <h6>SHIPPING & RETURNS</h6>
            </div>
            <div className="">
            <FaPlus />

            </div>
          </div>
         <div className="border-b-1 border-[#F0F0F0]"></div>

         <p className='font-dm text-[16px] font-[400] text-[#767676] py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</p>

        </div>

        <div className="w-full py-20">
        <div className="w-3/12 flex justify-between items-center">
          <div className="font-dm text-[20px] font-[400] text-[#767676]">
            <p>Description</p>
          </div>
          <div className="font-dm text-[20px] font-[700] text-[#262626]">
            <h5>Reviews (1)</h5>
          </div>
        </div>
        <p className='font-dm text-[14px] font-[400] pt-8 pb-4 text-[#767676]'>1 review for Product</p>
        <div className="border-b-1 border-[#F0F0F0]"></div>
        <div className="w-2/12 flex justify-between items-center">
          <div className="font-dm text-[16px] font-[400] pt-8 pb-4  text-[#262626]">
            <p>John Ford</p>
          </div>
          <div className="flex text-[#FFD881] pt-8 pb-4">
            <TiStar />
            <TiStar />
            <TiStar />
            <TiStar />
            <TiStar />
          </div>
        </div>
          <p className='font-dm text-[16px] font-[400] text-[#767676] pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</p>
         <div className="border-b-1 border-[#F0F0F0]"></div>

        </div>
        <div className="w-6/12 pb-5">
        <div className="">
          <h5 className='font-dm text-[20px] font-[700] text-[#262626]'>Add a Review</h5>
          <h6 className='font-dm text-[16px] font-[700] text-[#262626] pt-10'>Name</h6>
          <input type="text" name="" id="" placeholder='Your name here' className='pt-4 font-dm text-[14px] font-[400] text-[#767676]' />
        </div>
        <div className="border-b-1 border-[#F0F0F0] py-2"></div>

        <div className="">
      <h6 className='font-dm text-[16px] font-[700] text-[#262626] pt-10'>Email</h6>
    <input type="text" name="" id="" placeholder='Your email here' className='pt-4 font-dm text-[14px] font-[400] text-[#767676]' />


        </div>
       <div className="border-b-1 border-[#F0F0F0] py-2"></div>
       <div className="">
      <h6 className='font-dm text-[16px] font-[700] text-[#262626] pt-10'>Review</h6>
      <input type="text" name="" id="" placeholder='Your review here' className='pt-4 font-dm text-[14px] font-[400] text-[#767676] pb-14'/>


       </div>
      <div className="border-b-1 border-[#F0F0F0] py-2"></div>

           <div className="w-4/12">
            <div className="px-[40px] py-4 mt-10 mb-[200px] bg-[#262626] border-none text-[#fff] text-[14px] font-dm font-[700] text-center">
            <p>Post</p>
           </div>
           </div>
        </div>
       
    </Container>
  )
}

export default ProductDetails