import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import {server} from '../server.js'
export default function ActivationPage() {
  document.title = "Activation"
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  useEffect(() => {
    
        async function activationEmail(){
        try {
            setError(false)
            const res = await axios.post(`${server}/user/activation`,{
                activation_token
            })
            console.log(res.data)
        } catch (error) {
            setError(true)
            console.log(error.response.data.message)
        }
       
    }
     activationEmail()
  }, [activation_token]);
  return <div style={{
    width:"100%",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }}>
    {error? (
        <p>Your token is expired!</p>
    ):
    (
        <p>Your account has been created successfully!</p>
    )}
  </div>;
}
