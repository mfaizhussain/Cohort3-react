const Login = ({ setToggle }) => {
  return (
    <div className='flex w-90 flex-col rounded-xl bg-white p-6 shadow-lg'>
      <form className='flex flex-col gap-4'>
        <label htmlFor="">Login</label>
        <input
          className='rounded border border-gray-400 p-2'
          type='email'
          placeholder='Email'
        />
        <input
          className='rounded border border-gray-400 p-2'
          type='password'
          placeholder='Password'
        />
        <button className='p-2 bg-blue-500 text-white'>
          Login
        </button>
      </form>
      <p className=''>
        Didn't have an Account? <span
         className='text-blue-600 cursor-pointer'
         onClick={() => setToggle((prev) => !prev)}
         >Register here</span>
      </p>
    </div>
  )
}

export default Login
