import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadlineCards";
import TopFoods from "../components/TopFoods";
import Category from "../components/Category";
import { CartProvider } from '../components/CartContext';

const Home = () => {
  return (
    <div>
    
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <CartProvider>
        <TopFoods />
      </CartProvider>
      <Category/>
    
    </div>
  )
}

export default Home;