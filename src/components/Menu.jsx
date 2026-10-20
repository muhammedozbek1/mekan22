import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { categories, menuItems } from "../data/menu";
import { useCart } from "../context/CartContext.jsx";

export default function Menu() {
  const { add } = useCart();
  const onAdd = add;
  const [active, setActive] = useState(categories[0].id);
  const [justAdded, setJustAdded] = useState(null);

  const filtered = menuItems.filter((m) => m.category === active);

  const handleAdd = (item) => {
    onAdd(item);
    setJustAdded(item.id);
    setTimeout(() => setJustAdded(null), 900);
  };

  return (
    <section id="menu" className="py-16 sm:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Menümüz</h2>
          <p className="mt-2 text-gray-400">Taze malzemeler, hızlı servis, uygun fiyat.</p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide -mx-4 px-4">
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

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/40 transition shadow-lg hover:shadow-amber-500/5"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => { e.target.src = "https://placehold.co/400x300/1f2937/F59E0B?text=Mekan+22"; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur px-2.5 py-1 rounded-lg text-amber-400 font-extrabold text-sm border border-gray-700">
                  {item.price} TL
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-base leading-tight">{item.name}</h3>
                <p className="mt-1 text-gray-400 text-sm line-clamp-2">{item.desc}</p>
                <button
                  onClick={() => handleAdd(item)}
                  className={`mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition ${
                    justAdded === item.id
                      ? "bg-emerald-500 text-white scale-95"
                      : "bg-amber-500 hover:bg-amber-400 text-gray-900"
                  }`}
                >
                  {justAdded === item.id ? (
                    <>
                      <Check size={16} /> Eklendi
                    </>
                  ) : (
                    <>
                      <Plus size={16} /> Ekle
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
