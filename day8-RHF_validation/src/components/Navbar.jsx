import React from 'react'

const Navbar = ({ setToggle }) => {
  return (
    <div className='p-4  flex   rounded justify-between items-center bg-black text-white'>
      <img className='rounded-full'
      width="50"
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <div className='flex gap-6 font-semibold'>
        <p onClick={() => setToggle(true)} className='cursor-pointer'>Home</p>
        <p onClick={() => setToggle(true)} className='cursor-pointer'>About</p>
        <p onClick={() => setToggle(true)} className='cursor-pointer'>Contact</p>
      </div>
      <button
      onClick={() => setToggle(prev => !prev)}
      className='bg-blue-700 p-2 text-white rounded cursor-pointer'>Create User</button>
    </div>
  )
}

export default Navbar
