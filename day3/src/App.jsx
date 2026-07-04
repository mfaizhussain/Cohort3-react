import { useState } from 'react'
import Contact from './component/Contact'

import Navbar from './component/Navbar'
import Hero from './component/Hero'



function App() {
  const [count, setCount] = useState(0);
  const [flage, setFlage] = useState(false);
  console.log(count);
  console.log(flage);
  
  
  

  return (
    <div>
      
      <h1>Count is : {count}</h1>
      <button onClick={() => setCount(count+ 6)}>Increment</button>
      <button onClick={() => setFlage(!flage)}>Change flage</button>
      
    </div>
  )
}

export default App
