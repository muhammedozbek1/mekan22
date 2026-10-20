import { HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import FloatingCart from "./components/FloatingCart.jsx";
import Home from "./pages/Home.jsx";
import Order from "./pages/Order.jsx";

function Layout() {
  const { cart, setCart, cartOpen, setCartOpen, count, total } = useCart();
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="pb-24 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/siparis" element={<Order />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCart count={count} total={total} onClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} setCart={setCart} />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <CartProvider>
        <Layout />
      </CartProvider>
    </HashRouter>
  );
}
