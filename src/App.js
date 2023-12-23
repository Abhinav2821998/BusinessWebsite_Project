import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Error from "./pages/Error.js";
import Service from "./pages/Service.js";
import {Route,Routes} from 'react-router';
const App = () =>{
  return(
    <>
      
      <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/Service" element={<Service/>}/>
                <Route path ="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App;