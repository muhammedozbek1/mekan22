import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import FloatingCart from "./components/FloatingCart.jsx";
import Platforms from "./components/Platforms.jsx";
import Location from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAdd = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) => (c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c));
      }
      return [...prev, { item, qty: 1 }];
    });
  };

  const count = cart.reduce((s, c) => s + c.qty, 0);
  const total = cart.reduce((s, c) => s + c.item.price * c.qty, 0);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header cartCount={count} onCartOpen={() => setCartOpen(true)} />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Menu onAdd={handleAdd} />
        <Platforms />
        <Location />
      </main>
      <Footer />
      <FloatingCart count={count} total={total} onClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} setCart={setCart} />
    </div>
  );
}
