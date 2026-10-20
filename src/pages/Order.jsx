import { useState } from "react";
import { Plus, Minus, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, menuItems } from "../data/menu";
import { useCart } from "../context/CartContext.jsx";

export default function Order() {
  const { cart, add, setCart, setCartOpen, count, total } = useCart();
  const [active, setActive] = useState(categories[0].id);
  const [justAdded, setJustAdded] = useState(null);

  const filtered = menuItems.filter((m) => m.category === active);

  const qtyOf = (id) => cart.find((c) => c.item.id === id)?.qty || 0;

  const handleAdd = (item) => {
    add(item);
    setJustAdded(item.id);
    setTimeout(() => setJustAdded(null), 900);
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((c) => (c.item.id === id ? { ...c, qty: c.qty + delta } : c))
        .filter((c) => c.qty > 0)
    );
  };

  return (
    <section className="py-8 sm:py-12 bg-gray-950 min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">Sipariş Ver</h1>
            <p className="text-gray-400 text-sm">Ürünleri seçin, sepete ekleyin.</p>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide -mx-4 px-4">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition border ${
                active === c.id
                  ? "bg-amber-500 text-gray-900 border-amber-500 shadow-lg shadow-amber-500/20"
                  : "bg-gray-800 text-gray-300 border-gray-700 hover:border-amber-500/50"
              }`}
            >
              <span>{c.emoji}</span> {c.name}
            </button>
          ))}
        </div>

        {/* Products in rows */}
        <div className="space-y-3">
          {filtered.map((item) => {
            const q = qtyOf(item.id);
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 sm:gap-4 bg-gray-900 rounded-2xl p-3 border border-gray-800 hover:border-amber-500/30 transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => { e.target.src = "https://placehold.co/100x100/1f2937/F59E0B?text=22"; }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{item.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5 line-clamp-2">{item.desc}</p>
                  <div className="text-amber-400 font-extrabold text-base mt-1">{item.price} TL</div>
                </div>
                <div className="shrink-0 flex flex-col items-end gap-2">
                  {q === 0 ? (
                    <button
                      onClick={() => handleAdd(item)}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-sm transition ${
                        justAdded === item.id
                          ? "bg-emerald-500 text-white"
                          : "bg-amber-500 hover:bg-amber-400 text-gray-900"
                      }`}
                    >
                      {justAdded === item.id ? "Eklendi" : (<><Plus size={14} /> Ekle</>)}
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-8 h-8 rounded-lg bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-white font-bold w-6 text-center">{q}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-8 h-8 rounded-lg bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticky cart bar */}
      {count > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-4xl mx-auto">
          <button
            onClick={() => setCartOpen(true)}
            className="w-full flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-amber-500 text-gray-900 font-bold shadow-2xl shadow-amber-500/40 active:scale-[0.98] transition"
          >
            <span className="flex items-center gap-2">
              <ShoppingCart size={20} /> Sepetim ({count})
            </span>
            <span className="text-lg">{total} TL • Siparişi Tamamla</span>
          </button>
        </div>
      )}
    </section>
  );
}
