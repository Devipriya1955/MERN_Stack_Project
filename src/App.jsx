// import { Routes, Route } from 'react-router-dom'
// import Nav from './Components/Nav/Nav'
// import Landing from './pages/Landing/Landing'
// import Login from './Components/Login/Login'
// import Register from './Components/Register/Register'
// import Home from './pages/Home'
// import TVShows from './pages/TVShows'
// import Movies from './pages/Movies'
// import NewPopular from './pages/NewPopular'
// import MyList from './pages/MyList'

// export default function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/home" element={<><Nav /><Home /></>} />
//         <Route path="/tv-shows" element={<><Nav /><TVShows /></>} />
//         <Route path="/movies" element={<><Nav /><Movies /></>} />
//         <Route path="/new-popular" element={<><Nav /><NewPopular /></>} />
//         <Route path="/my-list" element={<><Nav /><MyList /></>} />
//       </Routes>
//     </>
//   )
// }
// import { Routes, Route } from "react-router-dom";
// import Nav from "./Components/Nav/Nav";
// import Landing from "./Components/Landing/Landing";
// import Login from "./Components/Login/Login";
// import Register from "./Components/Register/Register";
// import Home from "./Components/Home/Home";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Landing />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/home" element={<><Nav /><Home /></>} />
//     </Routes>
//   );
// }
import { Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <>
            <Nav />
            <Home />
          </>
        }
      />
    </Routes>
  );
}
