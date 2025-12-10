import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Landing.css'

export default function Landing() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleGetStarted = (e) => {
    e.preventDefault()
    if (email) {
      navigate('/register', { state: { email } })
    }
  }

  return (
    <div className="landing">
      <div className="landing-bg"></div>
      <div className="overlay"></div>

      <header className="container-fluid px-4 px-lg-5 py-3 d-flex justify-content-between align-items-center" style={{position: 'relative', zIndex: 10}}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix" 
          style={{height: '45px', cursor: 'pointer'}}
          onClick={() => navigate('/')}
        />
        <div className="d-flex gap-3 align-items-center">
          <select className="form-select" style={{width: '130px', background: 'rgba(0,0,0,0.6)', color: 'white', border: '1px solid white'}}>
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <Link to="/login" className="btn btn-danger px-4">Sign In</Link>
        </div>
      </header>

      <div className="text-center text-white" style={{position: 'relative', zIndex: 10, padding: '180px 20px 100px'}}>
        <h1 style={{fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: '900', marginBottom: '20px'}}>
          Unlimited movies, TV shows, and more
        </h1>
        <h2 style={{fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', marginBottom: '20px'}}>
          Watch anywhere. Cancel anytime.
        </h2>
        <p style={{fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: '30px'}}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form onSubmit={handleGetStarted} className="d-flex flex-column flex-lg-row justify-content-center gap-3 align-items-center">
          <input 
            type="email" 
            placeholder="Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '20px', 
              width: '450px', 
              maxWidth: '100%', 
              background: 'rgba(0,0,0,0.7)', 
              border: '1px solid #666', 
              borderRadius: '4px', 
              color: 'white', 
              fontSize: '1.2rem'
            }}
            required
          />
          <button 
            type="submit"
            style={{
              background: '#e50914', 
              color: 'white', 
              border: 'none', 
              padding: '18px 35px', 
              fontSize: '1.8rem', 
              fontWeight: 'bold', 
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#f40612'}
            onMouseLeave={(e) => e.target.style.background = '#e50914'}
          >
            Get Started →
          </button>
        </form>
      </div>
    </div>
  )
}