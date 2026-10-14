import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Post from './pages/Post'
import ScrollToHash from './components/ScrollToHash'

function App() {
  return (
    <BrowserRouter>
    <ScrollToHash/>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />

            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects/:project_name" element={<Project/>} />

            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:slug" element={<Post/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App