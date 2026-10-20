import { Flame } from "lucide-react";
import { PHONE_DISPLAY, ADDRESS, HOURS } from "../data/menu";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-black text-gray-900">
                22
              </div>
              <div className="font-extrabold text-white text-lg">Mekan 22</div>
            </div>
            <p className="mt-3 text-gray-400 text-sm">
              Edirne'nin en hızlı ve en lezzetli dönercisi. Hatay usulü, kaşarlı döner ve taze sandviçler.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">İletişim</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{PHONE_DISPLAY}</li>
              <li>{ADDRESS}</li>
              <li>{HOURS}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="text-gray-400 hover:text-amber-400 transition">Menü</a></li>
              <li><a href="#platforms" className="text-gray-400 hover:text-amber-400 transition">Sipariş Platformları</a></li>
              <li><a href="#konum" className="text-gray-400 hover:text-amber-400 transition">Konum</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Flame size={12} className="text-amber-400" /> © {new Date().getFullYear()} Mekan 22. Tüm hakları saklıdır.
          </div>
          <div>Edirne, Türkiye</div>
        </div>
      </div>
    </footer>
  );
}
