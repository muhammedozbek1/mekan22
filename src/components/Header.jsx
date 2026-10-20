import { Phone, ShoppingCart, Menu as MenuIcon, X, Clock, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { PHONE_DISPLAY, WHATSAPP_NUMBER, HOURS } from "../data/menu";

export default function Header({ cartCount, onCartOpen }) {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const mins = now.getHours() * 60 + now.getMinutes();
      setIsOpen(mins >= 8 * 60 && mins < 24 * 60);
    };
    check();
    const t = setInterval(check, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-black text-gray-900 text-lg shadow-lg shadow-amber-500/30">
              22
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-white text-lg tracking-tight">Mekan 22</div>
              <div className="text-[10px] text-gray-400 -mt-1">Edirne • Fast Food</div>
            </div>
          </a>

          {/* Status + actions (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                isOpen
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                  : "bg-red-500/10 text-red-400 border-red-500/30"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-emerald-400 animate-pulse" : "bg-red-400"}`} />
              {isOpen ? "Açık" : "Kapalı"}
            </span>
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition"
            >
              <Phone size={16} /> Ara
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition"
            >
              WhatsApp
            </a>
            <button
              onClick={onCartOpen}
              className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-900 text-sm font-bold transition"
            >
              <ShoppingCart size={16} /> Sepet
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold border ${
                isOpen ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "bg-red-500/10 text-red-400 border-red-500/30"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-emerald-400 animate-pulse" : "bg-red-400"}`} />
              {isOpen ? "Açık" : "Kapalı"}
            </span>
            <button
              onClick={onCartOpen}
              className="relative p-2 rounded-lg bg-amber-500 text-gray-900"
              aria-label="Sepet"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-lg bg-gray-800 text-white" aria-label="Menü">
              {open ? <X size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 text-white text-sm">
              <Phone size={16} /> Ara — {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white text-sm"
            >
              WhatsApp ile İletişim
            </a>
            <div className="flex items-center gap-2 text-xs text-gray-400 px-1">
              <Clock size={14} /> {HOURS} • <MapPin size={14} /> Edirne Merkez
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
