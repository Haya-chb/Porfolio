import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';
import { SiteMap} from './pages/SiteMap'


function App() {
  
  return (
    <>
     
     <main>
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
             
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<SiteMap />} />
          </Routes>
        </BrowserRouter>
      </main>
      


    </>
  )
}

export default App
