import { useState } from 'react'
import './login.css'

//page de connexion
function Login() { 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      username: username,
      password: password
    }
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div className="Login box">
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Username</h4>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div>
          <h4>Password</h4>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button type="submit">Login </button>
      </form>
    </div>
  )
}

export default Login
