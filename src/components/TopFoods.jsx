import React, {useState} from 'react'
import {data} from '../data/data.js'

const TopFoods = () => {

    
    const [foods, setFoods] = useState([])

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    }

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

  return (
    <div className='max-w-[1640px] w-auto px-4 py-12'>
        <h1 className=' text-orange-600 font-bold text-4xl text-center'>Mais avaliados</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <p className=' font-bold text-gray-700'>Filtro</p>
                <div className=' flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(data)} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Todos</button>
                    <button onClick={() => filterType('burguer')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burguers</button>
                    <button onClick={() => filterType('pizza')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('bebidas')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Bebidas</button>
                    <button onClick={() => filterType('sobremesa')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Sobremesa</button>
                </div>
            </div>

            <div>
                <p className='font-bold text-gray-700'>Filtrar Preços</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('20.00')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>20,00</button>
                    <button onClick={() => filterPrice('40.00')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>40,00</button>
                    <button onClick={() => filterPrice('60.00')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>60,00</button>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          
        {data.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
            <div className=' flex justify-center'>
              <button className=' bg-orange-600 text-white border-none rounded-full text-2xl mb-2 hover:bg-orange-500'>+</button>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default TopFoods;