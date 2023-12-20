import React from 'react'
import Login from '../components/Login/Login'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function LoginPage() {
  const navigate = useNavigate()
  const user = useSelector((state)=>(state.user.user.currnetUser))
  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },)
  return (
    <div className='w-full h-screen '>
      <Login/>
    </div>
  )
}
