import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { MdFavorite, MdFastfood } from "react-icons/md"
import { FaUserFriends } from "react-icons/fa"
import { FaCircleDollarToSlot } from "react-icons/fa6"
import { Link } from "react-router-dom";


const Navbar = () => {
    const [nav, setNav] = useState(false)

    
        const [status, setStatus] = useState('aberto'); // Padrão: Aberto
      
        const toggleStatus = () => {
          setStatus((prevStatus) => (prevStatus === 'aberto' ? 'fechado' : 'aberto'));
        };

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-2xl lg:text-3xl px-2">Cardápio <span className="font-bold">Eats</span></h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    {status === 'aberto' ? (
                        <p
                            className="bg-green-500 text-white rounded-full p-1 cursor-pointer"
                            onClick={toggleStatus}
                        >
                            Aberto
                        </p>
                    ) : (
                        <p
                            className="bg-red-500 text-white rounded-full p-1 cursor-pointer"
                            onClick={toggleStatus}
                        >
                            Fechado
                        </p>
                    )}
                </div>
            </div>

            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="Pesquisar lanches" />
            </div>

            <button id="addcart" className="bg-black text-white hidden md:flex items-center py-2 rounded-full {cartCount > 0 ? 'visible' : 'hidden'}"><a href="/Cart.jsx"></a>
                <BsFillCartFill size={20} className="mr-2" /> Carrinho
            </button>

            {nav ? <div className="bg-black/80 fixed w-full h-screen x-10 top-0 left-0"></div> : ''}

            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className="text-2xl p-4">
                    Cardápio <span className="font-bold">Eats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4  cursor-pointer flex flex-row"><BsFillCartFill  size={25} className="mr-4" /><a href="/entregas"></a>Carrinho</li>
                        <li className="text-xl py-4  cursor-pointer flex flex-row"><a href="/cardapio"></a><MdFastfood size={25} className="mr-4" />Cardápio</li>
                        <li className="text-xl py-4  cursor-pointer flex flex-row"><a href="/favoritos"></a><MdFavorite size={25} className="mr-4" />Favoritos</li>
                        <li className="text-xl py-4  cursor-pointer flex flex-row"><a href="/pagamentos"></a><FaCircleDollarToSlot size={25} className="mr-4" />Pagamentos</li>
                        <li className="text-xl py-4  cursor-pointer flex flex-row"><a href="/promocoes"></a><AiFillTag size={25} className="mr-4" />Promoções</li>
                        <li className="text-xl py-4  cursor-pointer flex flex-row"><a href="/addamigos"></a><FaUserFriends size={25} className="mr-4" />Acionar Amigos</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;