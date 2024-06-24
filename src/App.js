import Header from './components/header/Header.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutMyself from './pages/about-myself/AboutMyself.jsx'
import Certificates from './pages/certificates/Certificates.jsx'
import Contacts from './pages/contacts/Contacts.jsx'
import Skills from './pages/skills/Skills.jsx'
import Footer from './components/footer/Footer.jsx'


const App = () => {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<AboutMyself/>} />
        <Route path='/certificates' element={<Certificates/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/skills' element={<Skills/>} />
      </Routes>
      <Footer />
    </div>
   </Router>
  )
}

export default App
