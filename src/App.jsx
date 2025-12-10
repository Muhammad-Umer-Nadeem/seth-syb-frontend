
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/product/:slug" element={< ProductDetailsPage/>} />
        <Route path="/checkout" element={< CheckoutPage/>} />
      </Routes>
    </CartProvider>
  );
}

export default App;