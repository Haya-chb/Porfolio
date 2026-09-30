import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';

function App() {
  
  return (
    <>
     
     <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/Me contacter" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </main>
      


    </>
  )
}

export default App
