import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Benefits from './components/Benefits/Benefits';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Webdev from './components/WebDev/Webdev';
import Home from './Pages/Home';
import Appdev from './components/WebDev/Appdev'
import SocialMedia from './components/WebDev/Socialmedia'
function App() {
  return (
    <BrowserRouter>
    <div className="App overflow-x-hidden">
<Navbar />
      <Routes>
        <Route path="/social" element={<SocialMedia />} />
        <Route path="/appdev" element={<Appdev/>} />
        <Route path="/webdev" element={<Webdev />} />
      <Route path="/" element={<Home/>} />
      </Routes>

<Footer/>
  
    </div>
    
    </BrowserRouter>
  );
}

export default App;
