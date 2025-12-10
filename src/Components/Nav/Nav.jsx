import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

function Nav() {
  const [show, setShow] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`nav fixed-top ${show && "nav-black"}`}>
      <div className="container-fluid d-flex align-items-center justify-content-between px-4 py-3">
        <div className="d-flex align-items-center">
          <Link to="/home">
            <img 
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
              alt="Netflix" 
              className="nav-logo" 
            />
          </Link>
          
          <div className="nav-links d-none d-lg-flex gap-4 ms-5">
            <Link 
              to="/home" 
              className={`nav-link ${isActive('/home') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/tv-shows" 
              className={`nav-link ${isActive('/tv-shows') ? 'active' : ''}`}
            >
              TV Shows
            </Link>
            <Link 
              to="/movies" 
              className={`nav-link ${isActive('/movies') ? 'active' : ''}`}
            >
              Movies
            </Link>
            <Link 
              to="/new-popular" 
              className={`nav-link ${isActive('/new-popular') ? 'active' : ''}`}
            >
              New & Popular
            </Link>
            <Link 
              to="/my-list" 
              className={`nav-link ${isActive('/my-list') ? 'active' : ''}`}
            >
              My List
            </Link>
          </div>
        </div>

        <div className="d-flex gap-3 align-items-center">
          <div className="dropdown d-lg-none">
            <button 
              className="btn btn-dark dropdown-toggle" 
              type="button" 
              data-bs-toggle="dropdown"
            >
              Menu
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" to="/home">Home</Link></li>
              <li><Link className="dropdown-item" to="/tv-shows">TV Shows</Link></li>
              <li><Link className="dropdown-item" to="/movies">Movies</Link></li>
              <li><Link className="dropdown-item" to="/new-popular">New & Popular</Link></li>
              <li><Link className="dropdown-item" to="/my-list">My List</Link></li>
            </ul>
          </div>
          <Link to="/login" className="btn btn-danger">Login</Link>
          <Link to="/register" className="btn btn-outline-light">Register</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav