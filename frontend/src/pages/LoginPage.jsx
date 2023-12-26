import React, { useEffect } from 'react'
import Login from '../components/Login/Login'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function LoginPage() {
  document.title = "Sign in"
  const navigate = useNavigate()
  const user = useSelector((state)=>(state.user.user.currentUser))
useEffect(()=>{
  if(user){
    navigate('/')
  }
})

  return (
    <div className='w-full h-screen '>
      <Login/>
    </div>
  )
}
