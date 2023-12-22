import "./App.css"
import "./index.css"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import Carrinho from "./components/CartPage"
import Cardapio from "./pages/Cardapio"
import Relatorios from "./pages/Relatorios"
import Favoritos from "./pages/Favoritos"
import Pagamentos from "./pages/Pagamentos"
import Promocoes from "./pages/Promocoes"
import AddAmigos from "./pages/AddAmigos"
import { CartProvider } from "./components/CartContext"


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
              <Route path="pagamentos" element={<Pagamentos />} />
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
