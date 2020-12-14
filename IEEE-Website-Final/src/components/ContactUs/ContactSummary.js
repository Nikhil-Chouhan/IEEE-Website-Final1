import React from 'react'
import AnimatedCard from './ContactusCard'
import AinalSirCard from './ContactUsAinal'
import VinodSirCard from './ContactUsVinod'
import NavinCard from './ContactUsNavin'
import NiraliCard from './ContactUsNirali'
import Nishantcard from './ContactUsNishant'
const ContactSummary = () => {
  return (
  <div className="contact-summary section">
    <div id="contact-card">
      
      <VinodSirCard data-aos="fade-right"></VinodSirCard>
      <AinalSirCard data-aos="fade-right"></AinalSirCard>
      <NavinCard data-aos="fade-right"></NavinCard>
      <NiraliCard data-aos="fade-right"></NiraliCard>
      <AnimatedCard data-aos="fade-right"></AnimatedCard>
      <Nishantcard data-aos="fade-right"></Nishantcard>
    </div>
    </div>
  )
}

export default ContactSummary