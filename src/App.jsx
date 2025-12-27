
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";
import NotFoundpage from "./pages/NotFoundpage";
import SignInPage from "./pages/SigninPage";
import Signuppage from "./pages/Signuppage";


function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/product/:slug" element={< ProductDetailsPage/>} />
        <Route path="/checkout" element={< CheckoutPage/>} />
        <Route path="/sign-in" element={< Home/>} />
        <Route path="*" element={< NotFoundpage/>} />
        <Route path="/signin" element={< SignInPage/>} />
        <Route path="/signup" element={< Signuppage/>} />
      </Routes>
    </CartProvider>
  );
}

export default App;