import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
   <Router>
    <nav>
      <Link to='/'>Home</Link>
      <Link  to='/about'>About</Link>
      <Link  to='/profile'>Profile</Link>
    </nav>
   <Routes>
   <Route path='/' element={<Home />}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/profile/:username' element={<Profile />}/>
   </Routes>
   </Router>
   )
}

export default App;
