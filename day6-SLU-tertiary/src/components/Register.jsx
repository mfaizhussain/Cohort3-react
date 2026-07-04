import React,{useState} from "react";


const Register = ({ setToggle, setUsers }) => {
    const [formData, setFormData] = useState({
        name:"Aman",
        email:"faiz@hussain.com",
        url:"",
        password:""
    });
    
    
    console.log(formData);
    
    // console.log(users)

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({...formData, [name]:value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(formData);
        // set functions are async function
        setUsers((prev) => [...prev, formData])

        // make input empty after submit click 
        setFormData({
          name:"",
          email:"",
          url:"",
          password:""
        })

        setToggle((prev) => !prev)

        
    };

  return (
     <div className='flex w-90 flex-col rounded-xl bg-white p-6 shadow-lg'>
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
  );
}

export default Register
