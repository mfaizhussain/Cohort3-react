import React, { useState } from 'react'


const Counter = () => {
    
    const [count, setCount] = useState(0)
    console.log(count);

    const setCounter1 = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    } 
  return (
    <div>
        <h1>Count is {count}</h1>
      <button className='ml-4' onClick={() => 
        {
            setCount((prev) => {return prev + 1} )
            setCount((prev) => {return prev + 1} )
            setCount((prev) => {return prev + 1} )
      }}>Count </button>
    </div>
  )
}

export default Counter
