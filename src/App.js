import Header from './components/header/Header.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage.jsx'
import CertificatesPage from './pages/certificates/CertificatesPage.jsx'
import Contacts from './pages/contacts/Contacts.jsx'
import Portfolio from './pages/portfolio/Portfolio.jsx'
import CVPage from './pages/cv-page/CVPage.jsx'
import ProjectPage from './pages/project-page/ProjectPage.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.css'


const App = () => {
  return (
    <Router>
      <div className='page-container'>
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/about-myself' element={<CVPage/>} />
            <Route path='/certificates' element={<CertificatesPage/>} />
            <Route path='/contacts' element={<Contacts/>} />            
            <Route path="/portfolio/:label" element={<ProjectPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

