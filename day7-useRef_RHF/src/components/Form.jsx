import React, { useRef, useState } from 'react'

const Form = () => {
    console.log("app");
    
    // const [formData, setFormData] = useState({})
    const [products, setProducts] = useState({});
    const formRef = useRef({});
    
    console.log("form is rendering..");
    
    // let inputRef =  useRef()
    // console.log(inputRef);
    console.log(formRef);
    console.log(products);
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      let obj = {
        productName:formRef.current.productName.value,
        price:formRef.current.price.value,
        category:formRef.current.category.value,
        image:formRef.current.image.value
      }

      setProducts(obj)
      // e.target.reset()
    }
    
  return (
    <div className=' rounded-xl w-80 bg-white'>
      <form
      onSubmit={handleSubmit}
      action="" className='flex p-6 flex-col gap-4 '>
        <input
        ref={e => formRef.current.productName = e}
        
        type="text" className='p-2 border border-gr rounded' placeholder='Product name' name="" id="" />
        <input 
        ref={e => formRef.current.price = e}
        
        type="text" className='p-2 border border-gr rounded' placeholder='Price' name="" id="" />
        <span className=' p-2 border border-gray-400 rounded'>Select Category</span>
        <select 
        ref={e => formRef.current.category = e}
        
        
        >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
        </select>
        <input
        ref={e => formRef.current.image = e}
        
        className='p-2 border border-gray-400 rounded' type="text" placeholder='image' />
        <button className='p-2 bg-blue-700 text-white '>Create</button>
      </form>

      <h1>{products.productName}</h1>
      <h1>{products.price}</h1>
      <h1>{products.category}</h1>

    </div>
  )
}

export default Form
