import { categories, menuItems } from "../data/menu";
import { QrCode, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function QrMenu() {
  return (
    <section className="py-8 sm:py-12 bg-gray-950 min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white">
            <ArrowLeft size={18} />
          </Link>
          <div className="flex items-center gap-2">
            <QrCode className="text-amber-400" size={24} />
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">QR Menü</h1>
              <p className="text-gray-400 text-sm">Mekan 22 • Edirne</p>
            </div>
          </div>
        </div>

        {categories.map((cat) => {
          const items = menuItems.filter((m) => m.category === cat.id);
          if (items.length === 0) return null;
          return (
            <div key={cat.id} className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-amber-400 mb-3 flex items-center gap-2 border-b border-gray-800 pb-2">
                <span>{cat.emoji}</span> {cat.name}
              </h2>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start justify-between gap-3 bg-gray-900/50 rounded-xl px-4 py-3 border border-gray-800"
                  >
                    <div className="min-w-0">
                      <div className="text-white font-semibold text-sm sm:text-base">{item.name}</div>
                      <div className="text-gray-500 text-xs sm:text-sm mt-0.5">{item.desc}</div>
                    </div>
                    <div className="text-amber-400 font-extrabold text-base sm:text-lg shrink-0">
                      {item.price} TL
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="text-center text-gray-500 text-xs mt-8">
          Fiyatlarımıza KDV dahildir. Afiyet olsun!
        </div>
      </div>
    </section>
  );
}
