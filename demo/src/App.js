// import logo from './logo.svg';
import './App.css';
import Contact from './Routers/Contact';
 import Base from './components/Base';
 import About from './Routers/About';
import Example from './Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Routers/Home';
import Navbar from './Navbar'
import AppRout from './AppRout';
function App() {
  return (
    <div className="App">
    
      Rdahe krishana
      {/* <Example/>
      <Base>
      <h1>how are you</h1>
      <About/>
      </Base> */}
     {/* <p>hi this is akash</p> */}
    
      <AppRout/>
    </div>
  );
}

export default App;
