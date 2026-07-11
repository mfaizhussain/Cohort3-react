import { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  

  const [users, setUsers] = useState(() =>{
    return JSON.parse(localStorage.getItem("users")) || []
  })

  const [toggle, setToggle] = useState(true)
  const [updatedUser, setUpdatedUser] = useState(null)

  
  // localStorage.setItem("users", JSON.stringify(users))
   console.log(updatedUser);
   
  
  

  const del = (id) => {
    const updatedUsers = users.filter((user) =>  user.id !== id)
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
    //
    // setUsers(prev => prev.filter((user, i) => i !== index))
  }

  console.log(users);

  return (

    <div className='p-3 flex gap-4 flex-col max-h-screen'>
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className='flex flex-wrap justify-center gap-4 items-center'>
          { users.map((user, index) => (
            <UserCard 
            key={user.id} 
            index={index} 
            user={user} 
            setToggle={setToggle}  
            del={del}
            setUpdatedUser={setUpdatedUser} />
          )) }
        </div>
      ) : (
        <div className='flex h-[70%]  justify-center items-center'>
          <Form 
          setToggle={setToggle} 
          setUsers={setUsers} 
          
          users={users}
          
          updatedUser={updatedUser}
          setUpdatedUser={setUpdatedUser}
          />
        </div>
      )}
    </div>
  
  )
}

export default App
