
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/pages/About';
import Home from './Components/pages/Home';
import Portfilio from './Components/pages/Portfilio';
import Contact from './Components/pages/Contact';
import Navbar from './Navbar';
import Sidebar from './Components/pages/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
 let icon= document.getElementsByTagName(FontAwesomeIcon);
  return (
    <div className='App'>
      <div className='App-det'>
      <div className='nav'>
      <Navbar/>
      </div>
      
      <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/portfilio' element={<Portfilio/>}/>
      <Route path='/contactUs' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <div className='slide'>
    <Sidebar/>
    </div>
    
      </div>
     
    </div>
    
    
  );
}

export default App;
