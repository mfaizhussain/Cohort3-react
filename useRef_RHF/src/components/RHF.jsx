import React from 'react'
import { useForm } from 'react-hook-form'

const RHF = () => {
  const {
    register,
    handleSubmit,
  } = useForm()

console.log("Recat Hook form");

  
  return (
  <div className=' rounded-xl w-80 bg-white'>
    REACT HOOK FORM
      <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        // reset()
      })}
      action="" className='flex p-6 flex-col gap-4 '>
        <input
        {...register("productName")}
        type="text" className='p-2 border border-gr rounded' placeholder='Product name' />
        <input 
        {...register("price")}
        type="text" className='p-2 border border-gr rounded' placeholder='Price' />
        <span className=' p-2 border border-gray-400 rounded'>Select Category</span>
        <select 
        {...register("category")}
        >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
        </select>
        <input
        {...register("image")}
        className='p-2 border border-gray-400 rounded' type="text" placeholder='image' />
        <button className='p-2 bg-blue-600 text-white '>Create</button>
      </form>

    </div>
  )  
  
}

export default RHF
