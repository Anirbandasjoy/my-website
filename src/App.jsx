import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './routes/About';

//pages  
import Contac from './routes/Contac';
import Home from './routes/Home';
import Project from './routes/Project';
import ProjectDetils from './components/ProjectDetils';
import ErrorPage from './components/ErrorPage';
const App = () => {
  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contac />} />
          <Route path='project-details/:idx' element={<ProjectDetils />} />
          <Route path='*' element={<ErrorPage />} />

        </Routes>

      </BrowserRouter>

    </>

  );
}

export default App



