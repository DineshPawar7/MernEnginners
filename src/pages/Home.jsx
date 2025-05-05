import React from 'react'
import Hero from '../components/Hero'
import OurServices from '../components/OurServices'

const Home = () => {
  return (
    <div className='bg-black'>
        <div className=''>
        <Hero />
        </div>

        <div className='bg-white'>
        <OurServices />
        </div>
        
    </div>
  )
}

export default Home