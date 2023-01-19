import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Header from './components/header'
import Footer from './components/footer'


export default function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

