import React from 'react'
import Header from '../navigations/Header'
import HeroSection from '../components/HeroSection'
import ProductGrid from '../components/ProductGrid'
import AboutSection from '../components/AboutSection'
import Footer from '../navigations/Footer'
import Reviews from '../components/Reviews'



const Home = () => {
  return (
    <div>
            <Header />
            <HeroSection />
            <ProductGrid />
            <AboutSection />
            <Reviews />
            <Footer />
    </div>


    
  )
}

export default Home