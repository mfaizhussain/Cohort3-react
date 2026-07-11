import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

const Form = ({ setToggle, setUsers ,  users , updatedUser, setUpdatedUser }) => {

  console.log("updatedUser", updatedUser);
    //  console.log(editUser, editIndex);
    let { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange",
        defaultValues: updatedUser,
    })

   const formSubmit = (data) => {


    if(updatedUser){
        const updatedUsers = users.map((user) => user.id === updatedUser.id ? data : user)
        setUsers(updatedUsers)
        localStorage.setItem("users", JSON.stringify(updatedUsers))
        setUpdatedUser(null)
    }else{ 
        
        console.log(data)
        let arr = [...users, {...data, id: nanoid()}]
        setUsers(arr)
        localStorage.setItem("users", JSON.stringify(arr))
    }
    // console.log(user);
    
    setToggle(true)
   }
    console.log(errors);
    

  return (
    <div className='flex flex-col border h-[50%] p-6 w-80 gap-6'>
      <h1 className="text-xl font-bold">Create User</h1>
      <form 
      onSubmit={handleSubmit(formSubmit)} action="" className='flex border-white flex-col gap-4'>
        <input
        {...register("name", { 
            required:"Name is required" 
        })}
        className='border-2 p-2 border-gray-500 rounded'
        type="text" placeholder='Name' />
        { errors.name && <p className='text-red-500'>{errors.name.message}</p> }
        <input
        {...register("email", {
             required: "Email is required", 
             pattern:{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
             }
            })}
        className='border-2 p-2 border-gray-500 rounded'
        type="email" placeholder='Email' />
         <p className='text-red-500'>{errors.email?.message}</p> 
        <input
        {...register("contact", {
            required: "Contact is required", 
            minLength: {
                value: 10,
                message: "Contact must be 10 digits"
            },
            maxLength: {
                value: 10,
                message: "Contact must be 10 digits"
            },
            pattern: {
                value: /^[0-9]+$/,
                message: "Contact must be a number"
            }
        })}
        className='border-2 p-2 border-gray-500 rounded'
        type="number" placeholder='Contact' />
        <p className='text-red-500'>{errors.contact?.message}</p>
        <input
        {...register("image", { 
            required: "Image is required" 
        })}
        className='border-2 p-2 border-gray-500 rounded'
        type="url" placeholder='Image URL' />
        <p className='text-red-500'>{errors.image?.message}</p>
        <button className='bg-blue-600 p-2 rounded-xl'>Add User</button>
      </form>
    </div>
  )
}

export default Form
