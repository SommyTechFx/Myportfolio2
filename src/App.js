
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './component/navbar';
import { useState } from 'react';
import Menu from './component/menu';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Signin from './pages/Signin';


function App() {
  const [clicked, isClicked] = useState(false)
  return (
 
  <Router>
    <Navbar clicked={clicked} isClicked ={isClicked} />{clicked?<Menu/>: null}

    <Routes>
      <Route exact path='' element= {<Home/>}/>
      <Route exact path='ContactUs.js' element= {<ContactUs/>}/>
      <Route exact path='AboutUs.js' element= {<AboutUs/>}/>
      <Route exact path='Signin.js' element= {<Signin/>}/>
      
    </Routes>
    

  </Router>
     
    
  );
}

export default App;
