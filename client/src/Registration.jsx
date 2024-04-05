import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!password && !name && !email){
            alert("Fill foloowing Feilds")
        }
        else if(name && password && email){ 
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(res => {
            navigate('/login')
            .catch(err => console.log(err))
        })
    }
    else{
        alert("sorry")
    }
        
    }

    const handleClick = () => {
        navigate("/login")
    }

    return (
        <div className="d-flex justify-content-center align-items-center  git  vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                <strong>Name</strong>
                </label>
                <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email">
                <strong>Email</strong>
                </label>
                <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email">
                <strong>Password</strong>
                </label>
                <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-0">
                Register
            </button>
            </form>
            <p>Already Have an Account</p>
            <button onClick={handleClick} className="btn arunreg btn-default border w-100 bg-primary rounded-0 text-decoration-none">
                Login
            </button>
            </div>
        </div>
    )
    }

export default Registration