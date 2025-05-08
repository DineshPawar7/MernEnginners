import React from 'react'
import Hero from '../components/Hero'
import OurServices from '../components/OurServices'
import About from '../components/About'
import WorkingProcess from '../components/WorkingProcess'
import OurProjects from '../components/OurProjects'
import TeamHighlights from '../components/TeamHighlights'
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Testimonials'
import NewsAndBlogs from '../components/NewsAndBlogs'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-black '>
        <div className=''>
        <Hero />
        </div>

        <div className='bg-white'>
        <OurServices />
        </div>

        <div className='bg-black'>
        <About />
        </div>

        <div className='bg-white'>
        <WorkingProcess />
        </div>

        <div className='bg-black'>
        <OurProjects />
        </div>

        <div className='bg-white'>
        <TeamHighlights />
        </div>

        <div className='bg-black'>
        <ContactUs />
        </div>

        <div className='bg-white'>
        <Testimonials />
        </div>

        <div className='bg-black'>
        <NewsAndBlogs />
        </div>

        <div className='bg-white'>
        <FAQSection />
        </div>
        
        <div className='bg-black'>
        <Footer />
        </div>
    </div>
  )
}

export default Home