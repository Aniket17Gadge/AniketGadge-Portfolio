import './App.scss'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Layout />}> 
     <Route index element={<Home />} />
     <Route path="about" element={<About />}/>
     <Route path="skills" element={<Skills />}/>
     <Route path="projects" element={<Projects />}/>
     <Route path="contact" element={<Contact />}/>
     
     </Route>
 
    </Routes>
    </>
  );
}

export default App;
