import "./App.css"
import "./index.css"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import Carrinho from "./components/CartPage"
import Cardapio from "./pages/Cardapio"
import Relatorios from "./pages/Relatorios"
import Favoritos from "./pages/Favoritos"
import Promocoes from "./pages/Promocoes"
import AddAmigos from "./pages/AddAmigos"
import { CartProvider } from "./components/CartContext"
import PaymentPage from "./components/PaymentPage"
import ProcessToConfirmation from "./components/ProcessToConfirmation"
import ConfirmStage2 from "./components/ConfirmStage2"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/cart" element={<Carrinho />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="relatorios" element={<Relatorios />} />
              <Route path="favoritos" element={<Favoritos />} />
              <Route path="/confirmation" element={< ProcessToConfirmation/>}/>
              <Route path="/confirmationStage2" element={< ConfirmStage2/>}/>
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="promocoes" element={<Promocoes />} />
              <Route path="acionaramigos" element={<AddAmigos />} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
