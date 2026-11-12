import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Contact from './pages/Contact'
import ScrollToHash from './components/ScrollToHash'
import LanguageProvider from './i18n/LanguageProvider'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
      <ScrollToHash/>
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />

              <Route path="/projects" element={<Projects/>} />
              <Route path="/projects/:project_name" element={<Project/>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
