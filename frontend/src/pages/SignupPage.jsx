import React from 'react'
import Signup from '../components/Signup/Signup.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
export default function SignupPage() {
  document.title = "Sign Up"
  const navigate = useNavigate()
  const user = useSelector((state)=>(state.user.user.currnetUser))
  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },)
  return (
    <div>
      <Signup/>
    </div>
  )
}
