import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500] bg-black/50 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl lg:text-7xl font-bold'>O <span className='text-orange-500'>melhor</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl lg:text-7xl font-bold'><span className='text-orange-500'>Delivery</span>Eats</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="./img/banner.jpg" alt="" />
      </div>
    </div>
  )
}
export default Hero;