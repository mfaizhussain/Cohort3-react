import React from 'react'

const ProductCard = ({ product, del }) => {
    
    
  return (
    <div className='w-40 border-2 p-4 flex flex-col gap-4'>
        <div className=''>
            <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
        </div>
        <div>
            <h3 className='font-semibold text-blue-500'>{product.name.substring(0,20)}</h3>
            <p>{product.category}</p>
            <p className='text-green-400'>{product.price}</p>
           
        </div>
        <button onClick={() => del(product.id)} className='p-2 rounded-3xl bg-red-600'>Delete</button>
    </div>
  )
}

export default ProductCard
