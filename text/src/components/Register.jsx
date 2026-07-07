import React, { useState } from 'react'

const Register = ({ setToggle, setUsers }) => {

  const [formData, setFormData] = useState({
    name:"Faiz",
    email:"faiz@hussain.com",
    url:"",
    password:""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData()
    setUsers((users) => {

      console.log(users);
      
      return [...users, formData]
    })
    
    setFormData({
      name:"",
      email:"",
      url:"",
      password:""
    })
    
    // setToggle((toggle) => !toggle )
  }
   console.log(formData);
   
   
   

 const handleChange =(e)=>{
  let  { name, value } = e.target
  setFormData({...formData, [name]:value })
  console.log(formData);
  
  
  
 }

  return (
    <div className='flex w-90 flex-col rounded-xl bg-slate-100 p-6 shadow-xl'>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col gap-4'>
        <label htmlFor="">Register</label>
        <input
        required
        value={formData.name}
        name="name"
        onChange={handleChange}
          className='rounded border border-gray-400 p-2'
          type='name'
          placeholder='Name'
        />
        <input
        required
        value={formData.email}
        name="email"
        onChange={handleChange}
          className='rounded border border-gray-400 p-2 '
          type='email'
          placeholder='Email'
        />
        <input
        required
        value={formData.url}
        name="url"
        onChange={handleChange}
          className='rounded border border-gray-400 p-2 '
          type='url'
          placeholder='Image Url'
        />
        <input
        required
        value={formData.password}
        
        name="password"
        onChange={handleChange}
          className='rounded border border-gray-400 p-2'
          type='password'
          placeholder='Password'
        />
        <button className='p-2 bg-blue-500  text-white'>
          Register
        </button>
      </form>
      <p className=''>
        Already have an Account? <span 
        className='text-blue-600 cursor-pointer'
        onClick={() => setToggle((prev) => !prev)}
        >Login here</span>
      </p>
    </div>
  )
}

export default Register
