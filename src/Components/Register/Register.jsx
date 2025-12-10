import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Register.css'

function Register() {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: location.state?.email || '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    console.log('Registration attempt:', formData)
    navigate('/login')
  }

  return (
    <div className="register">
      <header className="register-header container-fluid px-4 px-lg-5 py-3 d-flex justify-content-between align-items-center">
        <Link to="/">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix" 
            className="register-logo"
          />
        </Link>
        <Link to="/login" className="btn btn-danger">Sign In</Link>
      </header>

      <div className="register-container d-flex justify-content-center align-items-center">
        <div className="register-card card p-5 bg-dark text-white shadow-lg">
          <h2 className="text-center mb-4 fw-bold">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input 
                type="text" 
                name="name"
                className="form-control form-control-lg bg-secondary text-white border-0" 
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input 
                type="email" 
                name="email"
                className="form-control form-control-lg bg-secondary text-white border-0" 
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input 
                type="password" 
                name="password"
                className="form-control form-control-lg bg-secondary text-white border-0" 
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input 
                type="password" 
                name="confirmPassword"
                className="form-control form-control-lg bg-secondary text-white border-0" 
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-danger w-100 py-3 fw-bold fs-5 mb-3">
              Sign Up
            </button>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="terms" required />
              <label className="form-check-label text-secondary small" htmlFor="terms">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-secondary">
              Already have an account? <Link to="/login" className="text-white fw-bold text-decoration-none">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register