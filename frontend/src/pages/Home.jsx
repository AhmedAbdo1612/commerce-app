import React from 'react'
import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Categories from '../components/Categories/Categories.jsx'
import BestDeals from '../components/BestDeals/BestDeals.jsx'
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct.jsx'
import Events from '../components/Events/Events.jsx'
export default function Home() {
  return (
    <div className='bg-gray-200'>
        <Header activeHeading = {1}/>
        <Hero/>
        <Categories/>
        <BestDeals/>
        <Events/>  
        <FeaturedProduct/>
        
    </div>
  )
}
