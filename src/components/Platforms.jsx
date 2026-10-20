import { ExternalLink, ShoppingBag } from "lucide-react";

const platforms = [
  {
    name: "Trendyol Yemek",
    desc: "Trendyol Yemek üzerinden kolayca sipariş verin.",
    url: "https://www.trendyol.com/yemek",
    color: "from-orange-500 to-orange-600",
    badge: "bg-orange-500",
  },
  {
    name: "Yemeksepeti",
    desc: "Yemeksepeti ile hızlı ve güvenli teslimat.",
    url: "https://www.yemeksepeti.com",
    color: "from-red-500 to-red-600",
    badge: "bg-red-500",
  },
  {
    name: "GetirYemek",
    desc: "GetirYemek ile dakikalar içinde kapınızda.",
    url: "https://getir.com/yemek",
    color: "from-purple-500 to-purple-600",
    badge: "bg-purple-500",
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-16 sm:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Diğer Sipariş Kanalları</h2>
          <p className="mt-2 text-gray-400">Tercih ettiğiniz platform üzerinden de sipariş verebilirsiniz.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 hover:border-amber-500/40 transition hover:-translate-y-1"
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl group-hover:opacity-40 transition`} />
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} text-white shadow-lg mb-4`}>
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-white font-bold text-xl">{p.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{p.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-amber-400 font-bold text-sm group-hover:gap-3 transition-all">
                Sipariş Ver <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
