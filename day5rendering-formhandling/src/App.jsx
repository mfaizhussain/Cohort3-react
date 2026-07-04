import { useState } from 'react'


function App() {
 const [count,setCount] = useState(0)
  
  const [user, setUser] = useState({
    name:"Raman"
  });

  let increament = () =>{
    setCount(count + 1)
  }

  console.log("chil bahut badi hoti hai")
  return (
   <div>
    <h1>done</h1>
    <h1>User is {count}</h1>
    <h1>{user.name}</h1>
    <button onClick={increament}>Increament Count</button>
    <button onClick={() => {
      
     user.name = "Faiz"
    }}>Change user</button>
   </div>
  )
}

export default App
