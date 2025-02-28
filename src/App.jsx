import { Link, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Loginpage from './Components/Loginpage';
import Home from './Components/Home';

import './App.css';
import './assets/nav.css';

function App() {
  return (
    <div className='div'>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top" >
        <div  className="container">
          <Link className="navbar-brand" to="/">
          <div className='pt-2'>
            <img className='imgg'
              src="/Smspro.jpg.webp " 
              alt="Logo" 
              style={{ height: '50px', width:'auto' }}
            />
            <p>EDUTRACK</p>
            </div>
            
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Singup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/loginpage">Login</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      
      <div>

<img className='bg-img margin ' src={'/bg-image.webp'}/>   
   </div>
   <footer className='bg' >
  
   </footer>
      
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
