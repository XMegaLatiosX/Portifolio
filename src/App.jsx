import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects/:project_name" element={<Project/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App