import { ArrowRight, Star, Clock, MapPin, Flame } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-amber-900/30" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-6">
              <Flame size={14} /> Edirne'nin En Hızlı Döneri
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Lezzetin <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">22</span>'si
              <br />
              <span className="text-amber-400">Mekan 22</span>
            </h1>
            <p className="mt-5 text-gray-300 text-lg sm:text-xl max-w-xl">
              Hatay usulü tavuk döner, kaşarlı döner ve taze sandviçler. Sıcak, hızlı ve kapınıza kadar.
              Edirne merkezde, her gün 08:00 - 00:00 arası hizmetinizdeyiz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold transition shadow-lg shadow-amber-500/30"
              >
                Menüyü İncele <ArrowRight size={18} />
              </a>
              <Link
                to="/siparis"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold transition border border-gray-700"
              >
                Sipariş Ver
              </Link>
              <Link
                to="/qr-menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold transition border border-gray-700"
              >
                QR Menü
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star size={16} className="text-amber-400" /> 4.9 Puan
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-amber-400" /> 08:00 - 00:00
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-amber-400" /> Edirne Merkez
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-amber-500/10">
              <img
                src="https://images.pexels.com/photos/27744717/pexels-photo-27744717.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                alt="Mekan 22 Döner"
                onError={(e) => { e.target.src = "https://placehold.co/600x450/1f2937/F59E0B?text=Mekan+22"; }}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur-md rounded-2xl p-4 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold">Hatay Usulü Tavuk Döner</div>
                    <div className="text-amber-400 font-extrabold text-xl">120 TL</div>
                  </div>
                  <Link to="/siparis" className="px-4 py-2 rounded-lg bg-amber-500 text-gray-900 font-bold text-sm">
                    Sipariş Et
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
