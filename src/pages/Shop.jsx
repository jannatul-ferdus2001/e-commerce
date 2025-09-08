import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { FaRegRectangleList } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { GoChevronLeft } from "react-icons/go";
import Post from '../components/Post';
import Pagination from '../components/Pagination';
import { ApiData } from '../components/ContextApi';
import { FaMinus } from "react-icons/fa6";
import { FaSortUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";








const Shop = () => {

  let {info} = useContext(ApiData)
  let [perPage, setPerPage] = useState(6);
  let [currentPage,setCurrentPage] = useState(1);
  let lastPage = perPage*currentPage;
  let firstPage = lastPage - perPage;
  let allPage = info.slice(firstPage, lastPage)
  let [show, setShow] = useState(false)
  let [show2, setShow2] = useState(false)
  let [show3, setShow3] = useState(false)
  let [show4, setShow4] = useState(false)
  let [low, setLow] = useState()
  let [high, setHigh] = useState()
  let [category, setCategory] = useState([])
  let [filterCategory, setFilterCategory] = useState([])
  let [active, setActive] = useState("")
  let [brand, setBrand] = useState([])




  let pageNumber = [];
  for (let i=1; i<= Math.ceil(filterCategory.length > 0 ? filterCategory : info.length / perPage); i++){
    pageNumber.push(i);
  }

  let paginate = (index) =>{
    setCurrentPage(index + 1)

    
  }
  let next =() =>{
    if(currentPage < pageNumber.length){
    setCurrentPage((state)=> state + 1)
    }
   
}
 
  let prev =() =>{
    if(currentPage > 1){
     setCurrentPage((state) => state - 1)

    }
    
  }

  let handlePageNumber = (e) =>{
    setPerPage(e.target.value);
    
  }
  let handleBrand = (bitem) => {
 let filterBrand = info.filter((item)=> item.brand == bitem)
  setFilterCategory(filterBrand)
  }
   

useEffect(()=>{
    setCategory([...new Set(info.map((item)=> item.category))])
    setBrand([...new Set(info.map((item)=> item.brand))])

 },[info])
 

let handleCategory = (citem)=>{
  let filterItem = info.filter((item)=> item.category == citem)
  setFilterCategory(filterItem);
  
}

let handleAllProduct = () =>{
  setFilterCategory("")
}

let handleActive = () =>{
  setActive("active")
  
}
let handlePrice = (value) =>{
  setLow(value.low);
  setHigh(value.high);
  let priceFilter = info.filter((item)=> item.price > value.low && item.price < value.high)
  setFilterCategory(priceFilter);
  
  
}



  
  return (
    <div>
      <Container>
        <div className="">
          <h2 className="text-[49px] font-dm text-[#262626] font-bold">Products</h2>
          <div className="flex items-center">
          <p className="font-dm text-[12px] text-[#767676]">Home</p>
          <GoChevronLeft />
          <p className="font-dm text-[12px] text-[#767676]">Products</p>            
          </div>
        </div>
        <div className="flex justify-between py-3">
          <div className="w-4/12 pr-6">
          <div className="flex justify-between items-center">
            <h3 onClick={()=>setShow(!show)} className='font-dm font-bold text-[20px] text-[#262626]'>Shop by Category</h3>
            {show ? <FaCaretDown />
            :<FaSortUp />}
             
          </div>
  
           {show &&
           <ul>
            <li onClick={handleAllProduct}>All Product</li>
            {category.map((item)=>(              
              <li>
                <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
              <p onClick={()=> handleCategory (item)} className='text-[16px] font-dm text-[#767676] pt-10 pb-5 capitalize'>{item}</p>
             </div>
             
              </li>
              ))}
           </ul>

           }
          <div className="">
            <div className="flex justify-between items-center pt-[40px]">
            <h3 onClick={()=>setShow2(!show2)} className='font-dm font-bold text-[20px] text-[#262626]'>Shop by Color</h3>
            {show2 ? <FaCaretDown />
            :<FaSortUp />}
            </div>
            {show2 &&
            <ul>
              <li>
              <div className="flex items-center border-b-[2px] border-[#F0F0F0]">
                <div className="w-[11px] h-[11px] rounded-full translate-[50%] border-none bg-[#000] mt-10 mb-5"></div>
              <p className='font-dm text-[16px] text-[#767676] pl-4 pt-10 pb-5'>Color 1</p>
            </div>
              </li>
              <li>
                <div className="flex items-center border-b-[2px] border-[#F0F0F0]">
              <div className="w-[11px] h-[11px] rounded-full translate-[50%] border-none bg-[#FF8686] mt-5 mb-3"></div>
              <p  className='font-dm text-[16px] text-[#767676] pl-4 pt-5 pb-3'>Color 2</p>
            </div>
              </li>
              <li>
                <div className="flex items-center border-b-[2px] border-[#F0F0F0]">
              <div className="w-[11px] h-[11px] rounded-full translate-[50%] border-none bg-[#7ED321] mt-5 mb-3"></div>
              <p className='font-dm text-[16px] text-[#767676] pl-4 pt-5 pb-3'>Color 3</p>
            </div>
              </li>
              <li>
                <div className="flex items-center border-b-[2px] border-[#F0F0F0]">
              <div className="w-[11px] h-[11px] rounded-full translate-[50%] border-none bg-[#B6B6B6] mt-5 mb-3"></div>
              <p className='font-dm text-[16px] text-[#767676] pl-4 pt-5 pb-3'>Color 4</p>
            </div>
              </li>
              <li>
              <div className="flex items-center border-b-[2px] border-[#F0F0F0]">
              <div className="w-[11px] h-[11px] rounded-full translate-[50%] border-none bg-[#15CBA5] mt-5 mb-5"></div>
              <p className='font-dm text-[16px] text-[#767676] pl-4 pt-5 pb-3'>Color 5</p>
            </div>
              </li>
      
            </ul>
            }
          </div>
          <div className="">
                <div className="flex justify-between items-center pt-[40px]">
              <h3 onClick={()=>setShow3(!show3)} className='font-dm font-bold text-[20px] text-[#262626]'>Shop by Brand</h3>
            {show3 ? <FaCaretDown />
            :<FaSortUp />}
            </div>
           {show3 &&
            <ul>
            {brand.map((item)=>(
            <li onClick={() => handleBrand(item)}>
                <div className=" flex justify-between items-center">
            <p className='text-[16px] font-dm text-[#767676] pt-2 pb-2'>{item}</p>
            </div>
              </li>

            ))}
            </ul>
           }
            </div>
             <div className="">
              <div className="flex justify-between items-center pt-[40px]">
                <h3 onClick={()=>setShow4(!show4)} className='font-dm font-bold text-[20px] text-[#262626]'>Shop by Price</h3>
                {show4 ? <FaCaretDown />
            :<FaSortUp /> }
              </div>
              {show4 &&
              <ul>
                <li onClick={() => handlePrice({low:0, high:10})}>
              <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p className='text-[16px] font-dm text-[#767676] pt-10 pb-5'>$0 - $10</p>
            </div>
                </li>
                <li onClick={() => handlePrice({low:11, high:20})}>
              <div className=" flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            
              <p className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>$11.00 - $20</p>
            </div>
                </li>
                <li onClick={() => handlePrice({low:21, high:30})}>
              <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>$21 - $30</p>
            </div>
                </li>
                <li onClick={() => handlePrice({low:31, high:40})}>
                  <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p  className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>$31 - $40</p>
            </div>
                </li>
                <li onClick={() => handlePrice({low:41, high:70})}>
               <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>$41 - $70</p>
            </div>
                </li>
                 <li onClick={() => handlePrice({low:71, high:100})}>
               <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>$71 - $100</p>
            </div>
                </li>
              </ul>
              }
            </div>
          </div>
          <div className="w-8/12">
          <div className="flex justify-between">
              <div className="w-2/12">
                <div className="flex justify-between">
                  <div onClick={()=>setActive("")} className={`${active == "active" ? "h-[36px] w-[36px] relative border-2 border-[#F0F0F0] bg-[#ffff] text-[#262626]" : "h-[36px] w-[36px] relative bg-[#262626] text-[#ffff]"}`}>
                   <HiMiniRectangleGroup className='absolute top-[10px] left-[10px]' /></div>
                  <div onClick={handleActive} className={`${active == "active" ? "h-[36px] w-[36px] relative bg-[#262626] text-[#ffff]" :  "h-[36px] w-[36px] relative border-2 border-[#F0F0F0] bg-[#ffff] text-[#262626]"} `}>
                    <FaRegRectangleList className='absolute top-[10px] left-[10px]' /></div>

                </div>
              </div>
              <div className="w-6/12">
                <div className="flex justify-end  relative items-center">
                  <p className="font-dm text-[16px] text-[#767676]">Sort by:</p>
                  <input
                    type="text"
                    placeholder=""
                    className="py-3 pl-4 ml-4 bg-[#ffff] text-[#C4C4C4] font-dm text-[14px] font-[400] outline-1"
                  />
                  <div className="absolute top-[15px] right-[5px] text-[#737373]"><FaCaretDown /></div>
                </div>
              </div>
              <div className="w-4/12">
                <div className="flex justify-end  relative items-center">
                  <p className="font-dm text-[16px] text-[#767676]">Show:</p>
                  <select onChange={handlePageNumber}
                  name="" id="" className= "py-3 pl-4 ml-4 bg-[#ffff] text-[#C4C4C4] font-dm text-[14px] font-[400] outline-1">
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                  </select>
                </div>
              </div>
            </div>
          
            <div>
               <Post allPage={allPage} filterCategory={filterCategory} active={active}/>
            </div>
            <Pagination pageNumber ={pageNumber} paginate={paginate} next={next} prev={prev} currentPage={currentPage} />         

          </div>
            
        </div>
      </Container>
    </div>
  )
}

export default Shop