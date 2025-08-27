import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { FaRegRectangleList } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { GoChevronLeft } from "react-icons/go";
import { FaCaretUp } from "react-icons/fa";
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
  let [scshow, setScShow] = useState(false)
  let [scshow2, setScShow2] = useState(false)
  let [scshow3, setScShow3] = useState(false)
  let [scshow4, setScShow4] = useState(false)
  let [scshow5, setScShow5] = useState(false)
  let [show3, setShow3] = useState(false)
  let [sbshow, setSbShow] = useState(false)
  let [sbshow2, setSbShow2] = useState(false)
  let [sbshow3, setSbShow3] = useState(false)
  let [sbshow4, setSbShow4] = useState(false)
  let [sbshow5, setSbShow5] = useState(false)
  let [show4, setShow4] = useState(false)
  let [spshow, setSpShow] = useState(false)
  let [spshow2, setSpShow2] = useState(false)
  let [spshow3, setSpShow3] = useState(false)
  let [spshow4, setSpShow4] = useState(false)
  let [spshow5, setSpShow5] = useState(false)
  let [category, setCategory] = useState([])
  let [filterCategory, setFilterCategory] = useState([])
  let [active, setActive] = useState("")




  let pageNumber = [];
  for (let i=1; i<= Math.ceil(info.length / perPage); i++){
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
   

useEffect(()=>{
    setCategory([...new Set(info.map((item)=> item.category))])
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
              <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
                <div className="w-[11px] h-[11px] rounded-full translate-[50%] border-none bg-[#000] mt-10 mb-5"></div>
              <p onClick={()=>setScShow(!scshow)} className='font-dm text-[16px] text-[#767676] pl-4 pt-10 pb-5'>Color 1</p>
              {scshow ? <FaMinus /> : <FaPlus /> }
            </div>

            {scshow &&
             <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>one</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>two</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>three</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>four</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>five</li>
             </ul>
             }
              </li>
              <li>
                <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
              <div className="w-[11px] h-[11px] rounded-full translate-[50%] border-none bg-[#FF8686] mt-5 mb-3"></div>
              <p onClick={()=>setScShow2(!scshow2)} className='font-dm text-[16px] text-[#767676] pl-4 pt-5 pb-3'>Color 2</p>
              {scshow2 ? <FaMinus /> : <FaPlus /> }
            </div>
            {scshow2 &&
             <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>six</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>seven</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>eight</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>nine</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>ten</li>
             </ul>
             }
              </li>
              <li>
                <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
              <div className="w-[11px] h-[11px] rounded-full translate-[50%] border-none bg-[#7ED321] mt-5 mb-3"></div>
              <p onClick={()=>setScShow3(!scshow3)} className='font-dm text-[16px] text-[#767676] pl-4 pt-5 pb-3'>Color 3</p>
              {scshow3 ? <FaMinus /> : <FaPlus /> }
            </div>
            {scshow3 &&
             <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>eleven</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twelve</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>thirteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>fourteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>fifteen</li>
             </ul>
             }
              </li>
              <li>
                <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
              <div className="w-[11px] h-[11px] rounded-full translate-[50%] border-none bg-[#B6B6B6] mt-5 mb-3"></div>
              <p onClick={()=>setScShow4(!scshow4)} className='font-dm text-[16px] text-[#767676] pl-4 pt-5 pb-3'>Color 4</p>
              {scshow4 ? <FaMinus /> : <FaPlus /> }
            </div>
            {scshow4 &&
             <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>sixteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>seventeen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>eightteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>ninteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty</li>
             </ul>
             }
              </li>
              <li>
              <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
              <div className="w-[11px] h-[11px] rounded-full translate-[50%] border-none bg-[#15CBA5] mt-5 mb-5"></div>
              <p onClick={()=>setScShow5(!scshow5)} className='font-dm text-[16px] text-[#767676] pl-4 pt-5 pb-3'>Color 5</p>
              {scshow5 ? <FaMinus /> : <FaPlus /> }
            </div>
            {scshow5 &&
             <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty one</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty two</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty three</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty four</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty five</li>
             </ul>
             }
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
              <li>
                <div className=" flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p onClick={()=>setSbShow(!sbshow)} className='text-[16px] font-dm text-[#767676] pt-10 pb-5'>Brand 1</p>
            {sbshow ? <FaMinus /> : <FaPlus />}
            </div>
             {sbshow &&
             <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>one</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>two</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>three</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>four</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>five</li>
             </ul>
             }
              </li>
             <li>
              <div className=" flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p onClick={()=>setSbShow2(!sbshow2)} className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>Brand 2</p>
            {sbshow2 ? <FaMinus /> : <FaPlus />}
            </div>
            {sbshow2 &&
             <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>six</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>seven</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>eight</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>nine</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>ten</li>
             </ul>
             }
             </li>
             <li>
            <div className=" flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p onClick={()=>setSbShow3(!sbshow3)} className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>Brand 3</p>
            {sbshow3 ? <FaMinus /> : <FaPlus />}
            </div>
            {sbshow3 &&
             <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>eleven</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twelve</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>thirteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>fourteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>fifteen</li>
             </ul>
             }
             </li>
             <li>
               <div className=" flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p onClick={()=>setSbShow4(!sbshow4)} className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>Brand 4</p>
            {sbshow4 ? <FaMinus /> : <FaPlus />}
            </div>
            {sbshow4 &&
             <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>sixteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>seventeen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>eightteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>ninteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty</li>
             </ul>
             }
             </li>
             <li>
               <div className=" flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p onClick={()=>setSbShow5(!sbshow5)} className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>Brand 5</p>
            {sbshow5 ? <FaMinus /> : <FaPlus />}
            </div>
            {sbshow5 &&
             <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty one</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty two</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty three</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty four</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty five</li>
             </ul>
             }
             </li>
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
                <li>
              <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p onClick={()=>setSpShow(!spshow)} className='text-[16px] font-dm text-[#767676] pt-10 pb-5'>$0.00 - $9.99</p>
            {spshow ? <FaMinus /> : <FaPlus /> }
            </div>
            {spshow &&
             <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>one</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>two</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>three</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>four</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>five</li>
             </ul>
            }
                </li>
                <li>
              <div className=" flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            
              <p onClick={()=>setSpShow2(!spshow2)} className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>$10.00 - $19.99</p>
              {spshow2 ? <FaMinus /> : <FaPlus /> }
            </div>
            {spshow2 &&
            <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>six</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>seven</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>eight</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>nine</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>ten</li>
             </ul>
             
            }
                </li>
                <li>
              <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p onClick={()=>setSpShow3(!spshow3)} className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>$20.00 - $29.99</p>
            {spshow3 ? <FaMinus /> : <FaPlus /> }
            </div>
            {spshow3 && 
            <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>eleven</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twelve</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>thirteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>fourteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>fifteen</li>
             </ul>
            }
                </li>
                <li>
                  <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p onClick={()=>setSpShow4(!spshow4)} className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>$30.00 - $39.99</p>
            {spshow4 ? <FaMinus /> : <FaPlus /> }
            </div>
            {spshow4 &&
            <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>sixteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>seventeen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>eightteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>ninteen</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty</li>
             </ul>
            }
                </li>
                <li>
               <div className="flex justify-between items-center border-b-[2px] border-[#F0F0F0]">
            <p onClick={()=>setSpShow5(!spshow5)} className='text-[16px] font-dm text-[#767676] pt-5 pb-3'>$40.00 - $69.99</p>
            {spshow5 ? <FaMinus /> : <FaPlus /> }
            </div>
            {spshow5 &&
            <ul>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty one</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty two</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty three</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty four</li>
              <li className='text-[16px] font-dm text-[#767676] py-1'>twenty five</li>
             </ul>
            }
                </li>
              </ul>
              }
            </div>
          </div>
          <div className="w-8/12">
          <div className="flex justify-between">
              <div className="w-2/12">
                <div className="flex justify-between">
                  <div className="h-[36px] w-[36px] border-2 border-[#F0F0F0] relative  hover:bg-[#262626] hover:text-[#ffff] hover:border-none duration-300 ease-in-out">
                   <HiMiniRectangleGroup className='absolute top-[10px] left-[10px]' /></div>
                  <div onClick={handleActive} className="h-[36px] w-[36px] border-2 border-[#F0F0F0] relative hover:bg-[#262626] hover:text-[#ffff] hover:border-none duration-300 ease-in-out">
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