import React from 'react'


import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import SocialBar from '../components/Social'
const Contac = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Leats have a chats." />
      <SocialBar />
      <Form />
      <Footer />
    </div>
  )
}

export default Contac