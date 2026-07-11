import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from './components/Form'
import RHF from './components/RHF'

function App() {
  // const [count, setCount] = useState(0)
  console.log("app is rendering..");
  
     
  return (
   <div className='h-screen flex items-center justify-center bg-gray-100 w-full' >
    {/* <Form /> */}
    <RHF />

   </div>
  )
}

export default App
