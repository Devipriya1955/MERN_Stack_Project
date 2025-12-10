import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your authentication logic here
    console.log('Login attempt:', { email, password })
    // For now, redirect to home page
    navigate('/home')
  }

  return (
    <div className="login">
      <header className="login-header container-fluid px-4 px-lg-5 py-4 d-flex justify-content-between align-items-center">
        <Link to="/">
          <img 
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="Netflix" 
            className="login-logo"
          />
        </Link>
      </header>

      <div className="login-container d-flex justify-content-center align-items-center">
        <div className="login-card card p-5 bg-dark text-white shadow-lg">
          <h2 className="text-center mb-4 fw-bold">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input 
                type="email" 
                className="form-control form-control-lg bg-secondary text-white border-0" 
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input 
                type="password" 
                className="form-control form-control-lg bg-secondary text-white border-0" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-danger w-100 py-3 fw-bold fs-5 mb-3">
              Sign In
            </button>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label text-secondary" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-secondary">
              New to Netflix? <Link to="/register" className="text-white fw-bold text-decoration-none">Sign up now</Link>
            </p>
          </div>
          <p className="text-secondary small mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login