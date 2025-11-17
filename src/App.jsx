import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Portfolio from './pages/Portfolio'
import PortfolioSingle from './pages/PortfolioSingle'
import Blogs from './pages/Blogs'
import BlogSingle from './pages/BlogSingle'
import ContactPage from './pages/ContactPage'
import NotFound from './components/NotFound'

export default function App(){
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:id" element={<PortfolioSingle />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="blog/:slug" element={<BlogSingle />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
