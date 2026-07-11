import React from 'react'

const Cart = () => {
  return (
    <aside className='mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl font-semibold text-gray-900'>Your Cart</h3>
        <span className='text-sm text-gray-500'>0 items</span>
      </div>

      <p className='mt-4 text-sm text-gray-500'>Your selected products will appear here.</p>

      <div className='mt-6 flex items-center justify-between border-t border-gray-200 pt-4'>
        <span className='text-lg font-semibold text-gray-900'>Total</span>
        <span className='text-lg font-semibold text-purple-600'>₹0</span>
      </div>
    </aside>
  )
}

export default Cart
