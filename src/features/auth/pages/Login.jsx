import React from 'react'
import "../style/login.scss"
import FormGroup from '../components/FormGroup'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'
import { useState } from 'react'
const login = () => {

    const {loading,handleLogin}=useAuth()

    const navigate =useNavigate()

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        await handleLogin({email, username: email, password})
        navigate("/")
    }

  return (
    <main className="login-page">
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup
                    value ={email}
                    onChange={(e)=>setemail(e.target.value)}
                    label="Username" 
                    placeholder="Enter your username" 
                    autoComplete="username"
                />
                <FormGroup 
                    value ={password}
                    onChange={(e)=>setpassword(e.target.value)}
                    label="Password" 
                    type="password"
                    placeholder="Enter your password" 
                    autoComplete="current-password"
                />
                <button className='button' type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
    </main>
  )
}

export default login
