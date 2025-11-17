import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Clients from '../components/Clients'
import Expertise from '../components/Expertise'
import BlogTeasers from '../components/BlogTeasers'
import CTA from '../components/CTA'

export default function Home(){
  return (
    <>
      <Hero />
      <Clients />
      <Expertise />
      <Projects />
      <Testimonials />
      <BlogTeasers />
      <CTA />
    </>
  )
}
