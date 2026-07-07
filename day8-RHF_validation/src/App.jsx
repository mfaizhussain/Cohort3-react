import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import UserCard from './assets/components/UserCard'
import Form from './assets/components/Form'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])
  const [toggle, setToggle] = useState(false)

  return (

    <div className='p-3 flex gap-4 flex-col max-h-screen'>
      <Navbar />
      {toggle ? (
        <div className='flex justify-center gap-4 items-center'>
          { users.map((user, index) => (
            <UserCard key={index} user={user} setToggle={setToggle} setUsers={setUsers} />
          )) }
        </div>
      ) : (
        <div className='flex h-[70%]  justify-center items-center'>
          <Form setToggle={setToggle} setUsers={setUsers} />
        </div>
      )}
    </div>
  
  )
}

export default App
