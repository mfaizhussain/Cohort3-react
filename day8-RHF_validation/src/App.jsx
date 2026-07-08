import { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])
  const [toggle, setToggle] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [editUser, setEditUser] = useState(null)


  const del = (index) => {
    setUsers(prev => prev.filter((user, i) => i !== index))
  }

  console.log(users);

  return (

    <div className='p-3 flex gap-4 flex-col max-h-screen'>
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className='flex justify-center gap-4 items-center'>
          { users.map((user, index) => (
            <UserCard 
            key={index} 
            index={index} 
            user={user} 
            setToggle={setToggle} 
            setUsers={setUsers} 
            del={del}
            setEditIndex={setEditIndex}
            setEditUser={setEditUser} />
          )) }
        </div>
      ) : (
        <div className='flex h-[70%]  justify-center items-center'>
          <Form 
          setToggle={setToggle} 
          setUsers={setUsers} 
          editIndex={editIndex}
          editUser={editUser}
          setEditIndex={setEditIndex}
          setEditUser={setEditUser}
          />
        </div>
      )}
    </div>
  
  )
}

export default App
