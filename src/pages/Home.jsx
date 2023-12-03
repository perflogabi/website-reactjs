import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadlineCards";
import TopFoods from "../components/TopFoods";
import Category from "../components/Category";

const Home = () => {
  return (
    <div>
    
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <TopFoods/>
      <Category/>
    
    </div>
  )
}

export default Home;