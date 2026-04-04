import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Support from './pages/Support'
import DeleteAccount from './pages/DeleteAccount'

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
