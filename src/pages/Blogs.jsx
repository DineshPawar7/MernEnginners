import React from 'react'
import HeroMove from '../components/ui/HeroMove'
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import OurProjects from '../components/OurProjects'

const Blogs = () => {
  return (
    <div>
        <div className='text-white bg-black pt-9 pb-9'>
            <h1 className='justify-center item-center flex'>Projects</h1>
            <p className='flex justify-center item-center'>Home / Blogs</p>
        </div>


        <HeroMove />

        <div className='bg-white'>
        <OurProjects />
        </div>

        <ContactUs />

        <Testimonials />

        <Footer />
    </div>
  )
}

export default Blogs