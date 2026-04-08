import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import CookieBanner from './components/CookieBanner'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy-loaded pages — code splitting per route
const Home          = lazy(() => import('./pages/Home'))
const Privacy       = lazy(() => import('./pages/Privacy'))
const Terms         = lazy(() => import('./pages/Terms'))
const Support       = lazy(() => import('./pages/Support'))
const DeleteAccount = lazy(() => import('./pages/DeleteAccount'))
const Contact       = lazy(() => import('./pages/Contact'))
const NotFound      = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Cursor />
        <Navbar />
        <Suspense fallback={<div className="page-loading" aria-busy="true" aria-label="Chargement..." />}>
          <Routes>
            <Route path="/"               element={<Home />} />
            <Route path="/privacy"        element={<Privacy />} />
            <Route path="/terms"          element={<Terms />} />
            <Route path="/support"        element={<Support />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="/contact"        element={<Contact />} />
            <Route path="*"               element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <CookieBanner />
      </BrowserRouter>
    </ErrorBoundary>
  )
}
