import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './routes/About';

//pages  
import Contac from './routes/Contac';
import Home from './routes/Home';
import Project from './routes/Project';
const App = () => {
  return (
   <>

    <BrowserRouter>

      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/about'  element={<About />}/>
        <Route path='/projects'  element={ <Project />}/>
        <Route path='/contact'  element={<Contac />}/>
        
      </Routes>
    
    </BrowserRouter>
   
   </>
   
  );
}

export default App



