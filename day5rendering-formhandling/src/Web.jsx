import React, { useState } from 'react'
import About from './Component.jsx/About'
import Contact from './Component.jsx/Contact'
function Web() {
    const [formData, setFormData] = useState({
        
    })
   
    console.log("FormData ->", formData);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value })
        
    }
    
  return (
    <div>
        <h1>Duke</h1>
       <div className='flex flex-col content-center gap-5 w-60'>

        <input 
        name='name'
        className="border-2" 
        onChange={handleChange}
        type="text"  
        id="" placeholder='Name' />
        <input 
        name='email'
        className="border-2" 
        onChange={handleChange}
        type="email"  
        id="" placeholder='Email' />
        <input 
        name='password'
        className="border-2" 
        onChange={handleChange}
        type="password"  
        id="" placeholder='password' />

        <h1>Name is {formData.name}</h1>
        <h1>Email is {formData.email}</h1>
        <h1>password is {formData.password}</h1>
        
       </div>
    </div>
  )
}

export default Web
