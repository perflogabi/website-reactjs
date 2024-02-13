import React, { useState } from 'react';
import { Link, useLocation, } from 'react-router-dom';
import { useCart } from './CartContext';
import { calculateTotal } from '../components/utils';

const ConfirmStage2 = () => {
    const location = useLocation();
    const { name } = location.state;
    const { phoneNumber } = location.state;

    const [deliveryOption, setDeliveryOption] = useState('');
    const [paymentOption, setPaymentOption] = useState('');
    const [orderStatus, setOrderStatus] = useState('Aceito');
    const { cartItems } = useCart();



    const handleDeliveryOption = (option) => {
        setDeliveryOption(option);
    };

    const handlePaymentOption = (option) => {
        setPaymentOption(option);
    };

    const handleFinalizeOrder = () => {
        // Verifique se ambas as opções foram escolhidas antes de finalizar o pedido
        if (deliveryOption && paymentOption) {
            // Aqui você pode realizar a lógica necessária para finalizar o pedido
            // Pode enviar os detalhes para o backend, atualizar o estado do pedido, etc.
            setOrderStatus('Em Preparação');
            sendWhatsAppMessage();
        } else {
            // Mostre uma mensagem de erro se alguma opção estiver faltando
            alert('Por favor, escolha uma opção de retirada e uma opção de pagamento.');
        }
    };

    const sendWhatsAppMessage = () => {
        let message = `Pedido de ${name}:\n\n`; // Incluindo o nome preenchido na página de confirmação

        message += 'Detalhes do Pedido:\n';
        cartItems.forEach((item) => {
            message += `${item.name} - Quantidade: ${item.quantity} - Preço: R$${item.price * item.quantity}\n`;
        });
        message += `\nTotal: R$${calculateTotal(cartItems)}\n`;

        // Adicionando emojis para forma de pagamento e forma de entrega
        message += '\nForma de Entrega: ';
        if (deliveryOption === 'Retirada no Local') {
            message += '🏠 Retirada no Local\n';
        } else if (deliveryOption === 'Delivery') {
            message += '🚚 Delivery\n';
        }

        message += 'Forma de Pagamento: ';
        if (paymentOption === 'Pix') {
            message += '💳 Pix\n';
        } else if (paymentOption === 'Dinheiro') {
            message += '💵 Dinheiro\n';
        } else if (paymentOption === 'Cartão na Entrega') {
            message += '💳💰 Cartão na Entrega\n';
        }

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/5555999491892?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    };




    return (

        <div className="flex items-center justify-center h-screen">
            <div className="bg-white shadow-md p-6 rounded-md max-w-md w-full">
                <div className="mb-6">
                    <div>
                        <h2>Olá, {name}</h2>

                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-orange-500">Escolha a Forma de Entrega</h2>
                    <div className="flex flex-row gap-3">
                        <div className="mb-4">
                            <input
                                type="radio"
                                id="retirada"
                                name="deliveryOption"
                                value="Retirada no Local"
                                onChange={() => handleDeliveryOption('Retirada no Local')}
                            />
                            <label htmlFor="retirada" className="bg-gray-100 p-4 rounded-md hover:shadow-md transition duration-300">
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">Retirada no Local</h3>
                                <p className="text-sm text-gray-600">Endereço: Rua Assis Brasil, 199</p>
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="delivery"
                                name="deliveryOption"
                                value="Delivery"
                                onChange={() => handleDeliveryOption('Delivery')}
                            />
                            <label htmlFor="delivery" className="bg-gray-100 p-4 rounded-md hover:shadow-md transition duration-300">
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">Delivery</h3>
                                <p className="text-sm text-gray-600">
                                    <Link to="/delivery-address" className="text-blue-500 hover:underline">
                                        Adicionar Endereço
                                    </Link>
                                </p>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-4 text-orange-500">Escolha a Forma de Pagamento</h2>
                    <div className="flex flex-row gap-3">
                        <div className="mb-4">
                            <input
                                type="radio"
                                id="pix"
                                name="paymentOption"
                                value="Pix"
                                onChange={() => handlePaymentOption('Pix')}
                            />
                            <label htmlFor="pix" className="bg-gray-100 p-4 rounded-md hover:shadow-md transition duration-300">
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">Pix</h3>
                            </label>
                        </div>
                        <div className="mb-4">
                            <input
                                type="radio"
                                id="dinheiro"
                                name="paymentOption"
                                value="Dinheiro"
                                onChange={() => handlePaymentOption('Dinheiro')}
                            />
                            <label htmlFor="dinheiro" className="bg-gray-100 p-4 rounded-md hover:shadow-md transition duration-300">
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">Dinheiro</h3>
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="cartao"
                                name="paymentOption"
                                value="Cartão na Entrega"
                                onChange={() => handlePaymentOption('Cartão na Entrega')}
                            />
                            <label htmlFor="cartao" className="bg-gray-100 p-4 rounded-md hover:shadow-md transition duration-300">
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">Cartão na Entrega</h3>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="animate-pulse">
                    <button
                        onClick={handleFinalizeOrder}
                        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:text-orange-700 hover:bg-orange-300 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                    >
                        Finalizar Pedido
                    </button>
                </div>


                {/* Detalhes do Pedido e Barra de Status */}
                {orderStatus !== 'Aceito' && (
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold mb-4 text-orange-500">Detalhes do Pedido</h2>
                        <p>Itens do Carrinho:</p>
                        <div className=' border shadow-md py-8 px-8 rounded'>
                            <h3 className=' font-bold py-3'>Detalhes do Pedido</h3>


                            {cartItems.length > 0 ? (
                                <div>
                                    <ul>
                                        {cartItems.map((item) => (
                                            <li key={item.id} className=' py-2 '>
                                                {item.name} : Quantidade: {item.quantity},  Preço: R${item.price * item.quantity}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className=' py-4 font-bold'>Total: R${calculateTotal(cartItems)}</p>
                                </div>
                            ) : (
                                <p>Carrinho vazio</p>
                            )}
                        </div>
                        <p>Forma de Retirada: {deliveryOption}</p>
                        <p>Forma de Pagamento: {paymentOption}</p>
                        <div className="mt-4">
                            <h3>Status do Pedido: {orderStatus}</h3>
                            <div className="flex space-x-4">
                                <div className={`w-1/3 h-2 bg-${orderStatus === 'Aceito' ? 'green' : 'gray'} rounded-full`}></div>
                                <div className={`w-1/3 h-2 bg-${orderStatus === 'Em Preparação' ? 'yellow' : 'gray'} rounded-full`}></div>
                                <div className={`w-1/3 h-2 bg-${orderStatus === 'Finalizado' ? 'green' : 'gray'} rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConfirmStage2;