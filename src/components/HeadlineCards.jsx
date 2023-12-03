import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Burguers</p>
                <p className=' px-2'>Mais de 10 opções</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4'>Peça agora</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="./img/burguer1.jpg" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Pizza</p>
                <p className=' px-2'>Mais de 10 opções</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4'>Peça agora</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBpenphfGVufDB8fDB8fHww" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Sobremesa</p>
                <p className=' px-2'>Mais de 10 opções</p>
                <button className=' border-white bg-white text-black mx-2 absolute bottom-4'>Peça agora</button>
            </div>
            <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="./img/doce.jpg" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards;