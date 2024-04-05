import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [message, setMessage] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3001/dashboard')
        .then(res => {
            console.log(res)
            if(res.data.valid) {
                setMessage(res.data.message)
            } else {
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    })
  return (
    
    <div className="container">
  <div className="jumbotron ">
    <h2 className='text-center mt-5'> Dashboard {message}</h2>    
  
  </div> 
</div>
  )
}

export default Dashboard