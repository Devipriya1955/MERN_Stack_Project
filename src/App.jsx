import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'

import TVShows from "./Components/TV.jsx";
import Movies from './Components/Movies.jsx';
import NewPopular from './Components/NewPopular.jsx';
import MyList from './Components/MyList.jsx';

import Nav from './Components/Nav/Nav'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<><Nav /><Home /></>} />
          <Route path="/tv-shows" element={<><Nav /><TVShows /></>} />
          <Route path="/movies" element={<><Nav /><Movies /></>} />
          <Route path="/new-popular" element={<><Nav /><NewPopular /></>} />
          <Route path="/my-list" element={<><Nav /><MyList /></>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
