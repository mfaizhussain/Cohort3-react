import Login from './components/Login'
import Register from './components/Register'
import UserCard from './components/UserCard'
import { useState } from 'react'

function App() {
  const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState([]);

  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-100'>
      {/* {toggle ? (
        users.map((elem, index) =>  <UserCard key={index} user={elem} />)
      ): ( 
      <Register setUsers={setUsers} setToggle={setToggle} />
      )} */}
      <Register setUsers={setUsers} setToggle={setToggle} />

     { users.map((elem, index) =>  <UserCard key={index} user={elem} />)}
      
    </div>
  )
}

export default App
