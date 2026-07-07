

import React from 'react'

const Usercard = ({ user }) => {
  console.log(user);
  
  return (
    <div className='p-4 flex flex-col border-gray-400 border rounded bg-white'>
       <div className='w-50 h-60 rounded overflow-hidden'>
        <img className='w-full h-full' src={user.url}  />
       </div>
       <div>
        <h1> {user.name}</h1>
        <p>{user.email}</p>
       </div>
       <button>delete</button>
    </div>
  )
}

export default Usercard
