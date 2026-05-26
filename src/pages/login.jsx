import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function Login({ setIsLoggedIn }) {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {

    if(email === '' || password === ''){

      alert('Please fill all fields')

      return
    }

    const isAdmin =
      email ===
      '72330373@students.liu.edu.lb'

    setIsLoggedIn({
      loggedIn:true,
      admin:isAdmin
    })

    navigate('/')
  }

  return (

    <div className="login-page">

      <div className="login-box">

        <h1 className="text-center mb-4">
          Student Login
        </h1>

        <p className="text-center mb-4">
          Login to access the platform
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-4"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login