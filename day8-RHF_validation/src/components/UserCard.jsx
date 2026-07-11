import React from 'react'

const UserCard = ({ user, setToggle, del , setUpdatedUser }) => {

    const handleEdit = () => {
        setUpdatedUser(user)
        setToggle(false)
    }

    const handleDelete = () => {
        del(user.id)
    }
  return (
    <div className='w-60 p-6 flex flex-col rounded bg-slate-200 gap-3'>
      <div className='w-full h-40'>
        <img className='rounded-xl object-fit h-full w-full'
        src={user.image}
        alt="" />
      </div>
      <div className='flex flex-col gap-1'>
        <h1 className='font-semibold text-lg'>{user.name}</h1>
        <p className='sm-text'>{user.email}</p>
        <p className='sm-text'>{user.contact}</p>
      </div>
      <div className='flex w-full justify-between gap-4'>
        <button onClick={handleDelete} className='bg-red-600 px-2 py-3 text-white rounded'>Delete</button>
        <button onClick={()=>{
          setUpdatedUser(user)
          setToggle(false)
        }} className='bg-blue-600 px-5 py-3 text-white rounded'>Edit</button>
      </div>
      
    </div>
  )
}

export default UserCard
