import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import Prizes from '../../components/prizes/Prizes'
import VideoSection from '../../components/videoSection/VideoSection'
import HowItWorks from '../../components/howItWorks/HowItWorks'
import AboutEvent from '../../components/aboutEvent/AboutEvent'
import Partners from '../../components/partners/Partners'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <Prizes/>
        <VideoSection/>
        <HowItWorks/>
        <AboutEvent/>
        <Partners/>
        <Footer/>
    </>
  )
}

export default Home