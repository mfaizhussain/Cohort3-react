import { useState } from 'react'
import Register from './components/Register'
import Usercard from './components/Usercard'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
   const [toggle, setToggle] = useState(true)
   const [users, setUsers] = useState([])
  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-100'>
      {toggle ? (
        <Register setToggle={setToggle} setUsers={setUsers} />
      ) : (
        users.map((elem, key) => <Usercard user={elem} key={key} />)
      )}
      

    </div>
  )
}

export default App
