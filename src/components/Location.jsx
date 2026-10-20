import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { ADDRESS, PHONE_DISPLAY, HOURS, MAPS_URL, MAPS_EMBED, WHATSAPP_NUMBER } from "../data/menu";

export default function Location() {
  return (
    <section id="konum" className="py-16 sm:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Konum & İletişim</h2>
          <p className="mt-2 text-gray-400">Bizi ziyaret edin veya yol tarifi alın.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-xl aspect-video lg:aspect-auto lg:min-h-[400px] bg-gray-800">
            <iframe
              title="Mekan 22 Konum"
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-amber-400" size={20} />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase">Adres</div>
                  <div className="text-white font-medium mt-1">{ADDRESS}</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Phone className="text-amber-400" size={20} />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase">Telefon</div>
                  <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="text-white font-medium mt-1 hover:text-amber-400 transition block">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Clock className="text-amber-400" size={20} />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase">Çalışma Saatleri</div>
                  <div className="text-white font-medium mt-1">Her gün: {HOURS}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold transition"
              >
                <Navigation size={18} /> Yol Tarifi Al
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition"
              >
                <ExternalLink size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
