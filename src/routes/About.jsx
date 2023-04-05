import React from 'react'


import AboutContent from '../components/AboutContent'


import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import SocialBar from '../components/Social'




const Contac = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="ABOUT" text="Im a friendly Front-end Developer."/>
        <SocialBar />
        <AboutContent />
        <Footer />
    </div>
  )
}

export default Contac