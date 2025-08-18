
import { FaHeart } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

const Post = ({allPage, filterCategory}) => {
  console.log(filterCategory);
  
    
    
  return (
    <>
     {filterCategory.length > 0 
     ? filterCategory.map((item)=>(
        <div className="w-[32%]">
                <div className="relative group">
                  <img className='w-full' src={item.thumbnail} alt="" />
                  <div className="flex justify-between items-center pt-3">
                    <h5 className="font-dm font-[700] text-[20px] text-[#262626]">{item.title}</h5>
                    <p className="font-dm font-[400] text-[16px] text-[#767676]">{item.price}</p>

                  </div>
                  <div className="font-dm font-[400] text-[16px] text-[#767676] pt-4">Black</div>
                  <div className="bg-[#ffff] w-full absolute bottom-[30%] left-0 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center">
                      <p className='font-dm text-[16px] text-[#767676] pt-[20px] pl-[100px]'>Add to Wish List</p>
                      <div className="pl-[10px] pt-[20px]"> <FaHeart /></div>

                    </div>
                    <div className="pt-[20px] pl-[230px]"><FiRefreshCcw /></div>
                    <div className="flex items-center">
                      <p className='font-bold font-dm text-[16px] text-[#262626] pt-[20px] pl-[120px] pb-[20px]'>Add to Cart</p>
                      <div className="pl-[20px] pt-[20px] pb-[20px]"><FaShoppingCart /></div>
                    </div>

                  </div>
                </div>
              </div>

    ))
      :  allPage.map((item)=>(
        <div className="w-[32%]">
                <div className="relative group">
                  <img className='w-full' src={item.thumbnail} alt="" />
                  <div className="flex justify-between items-center pt-3">
                    <h5 className="font-dm font-[700] text-[20px] text-[#262626]">{item.title}</h5>
                    <p className="font-dm font-[400] text-[16px] text-[#767676]">{item.price}</p>

                  </div>
                  <div className="font-dm font-[400] text-[16px] text-[#767676] pt-4">Black</div>
                  <div className="bg-[#ffff] w-full absolute bottom-[30%] left-0 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center">
                      <p className='font-dm text-[16px] text-[#767676] pt-[20px] pl-[100px]'>Add to Wish List</p>
                      <div className="pl-[10px] pt-[20px]"> <FaHeart /></div>

                    </div>
                    <div className="pt-[20px] pl-[230px]"><FiRefreshCcw /></div>
                    <div className="flex items-center">
                      <p className='font-bold font-dm text-[16px] text-[#262626] pt-[20px] pl-[120px] pb-[20px]'>Add to Cart</p>
                      <div className="pl-[20px] pt-[20px] pb-[20px]"><FaShoppingCart /></div>
                    </div>

                  </div>
                </div>
              </div>

    ))}

   
    </>
    
  )
}

export default Post