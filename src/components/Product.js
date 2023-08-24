import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';


const Product = ({ product }) => {

  const { id, title, image, category, price } = product;


  return (
    <div>
      <div className="border-2 relative  flex items-center justify-center border-gray-500 h-[300px] overflow-hidden group transition">
        <div className='w-[200px] mx-auto  '>
          <img className='max-h-[170px] w-[90%]  ' src={image} alt="" />
        </div>

        <div className='flex flex-col justify-center items-center group absolute -right-10 top-3  group opacity-0 group-hover:opacity-100 group-hover:right-7  transition-all duration-300  '>
          <button className='text-white text-2xl bg-red-600 px-2 mb-1'>
            +
          </button>

          <button className='p-2 shadow-2xl   '>
            <VisibilityIcon className='  hover:text-white'/>
          </button>

        </div>
      </div>
      {/* products details */}
      <div className='flex flex-col'>
        <div className='text-gray-600 mb-1 font-semibold text-sm capitalize '>
          {category}
          
        </div>
        <p className='font-semibold mb-1 '>
          {title}
        </p>
        <div className='text-gray-600 font-semibold text-sm'>
          ${price}
          
        </div>
      </div>
    </div>
  )
}

export default Product
