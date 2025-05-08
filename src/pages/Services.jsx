import React from 'react'
import HeroMove from '../components/ui/HeroMove'
import OurServices from '../components/OurServices'
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
        <div className='text-white bg-black pt-9 pb-9'>
            <h1 className='justify-center item-center flex'>Services</h1>
            <p className='flex justify-center item-center'>Home / Services</p>
        </div>


        <HeroMove />

        <OurServices />

        <ContactUs />

        <Testimonials />

        <Footer />
    </div>
  )
}

export default Services