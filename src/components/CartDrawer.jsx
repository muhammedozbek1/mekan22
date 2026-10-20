import { useState } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, Send, User, Phone, MapPin, FileText } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/menu";

export default function CartDrawer({ open, onClose, cart, setCart }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });
  const [errors, setErrors] = useState({});

  const total = cart.reduce((s, c) => s + c.item.price * c.qty, 0);
  const count = cart.reduce((s, c) => s + c.qty, 0);

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((c) => (c.item.id === id ? { ...c, qty: c.qty + delta } : c))
        .filter((c) => c.qty > 0)
    );
  };
  const remove = (id) => setCart((prev) => prev.filter((c) => c.item.id !== id));
  const clear = () => setCart([]);

  const validate = () => {
    const e = {};
    if (!form.address.trim()) e.address = "Teslimat adresi gerekli";
    if (!form.phone.trim()) e.phone = "Telefon numarası gerekli";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildMessage = () => {
    const lines = cart.map((c) => `- ${c.qty}x ${c.item.name} (${c.item.price} TL)`).join("\n");
    return `Merhaba Mekan 22, yeni siparişim var!
-------------------------
Sipariş Detayları:
${lines}
-------------------------
Toplam: ${total} TL
Adres: ${form.address.trim() || "-"}
Not: ${form.notes.trim() || "-"}`;
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!validate()) return;
    const msg = buildMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 md:top-0 md:left-auto md:right-0 md:bottom-0 md:w-[420px] max-h-[92vh] md:max-h-full bg-gray-900 border-t md:border-t-0 md:border-l border-gray-800 rounded-t-3xl md:rounded-none flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-amber-400" size={22} />
            <h3 className="text-white font-bold text-lg">Sepetim</h3>
            <span className="text-gray-400 text-sm">({count} ürün)</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={48} className="mx-auto text-gray-700 mb-3" />
              <p className="text-gray-400">Sepetiniz boş.</p>
              <p className="text-gray-500 text-sm mt-1">Menüden ürün ekleyin.</p>
            </div>
          ) : (
            cart.map((c) => (
              <div key={c.item.id} className="flex gap-3 bg-gray-800/50 rounded-xl p-3 border border-gray-700/50">
                <img src={c.item.image} alt={c.item.name} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-sm leading-tight truncate">{c.item.name}</div>
                  <div className="text-amber-400 font-bold text-sm mt-0.5">{c.item.price} TL</div>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQty(c.item.id, -1)} className="w-7 h-7 rounded-lg bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600">
                      <Minus size={14} />
                    </button>
                    <span className="text-white font-bold w-6 text-center">{c.qty}</span>
                    <button onClick={() => updateQty(c.item.id, 1)} className="w-7 h-7 rounded-lg bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600">
                      <Plus size={14} />
                    </button>
                    <button onClick={() => remove(c.item.id)} className="ml-auto text-red-400 hover:text-red-300 p-1">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {cart.length > 0 && (
            <button onClick={clear} className="text-xs text-gray-500 hover:text-red-400 underline">
              Sepeti Temizle
            </button>
          )}
        </div>

        {/* Checkout form */}
        {cart.length > 0 && (
          <form onSubmit={handleOrder} className="border-t border-gray-800 p-5 space-y-3 bg-gray-900">
            <div className="text-gray-300 text-sm font-semibold mb-1">Teslimat Bilgileri</div>
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Ad Soyad"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none text-sm"
              />
            </div>
            <div className="relative">
              <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="tel"
                placeholder="Telefon Numarası"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`w-full pl-10 pr-3 py-2.5 rounded-xl bg-gray-800 border text-white placeholder-gray-500 focus:outline-none text-sm ${
                  errors.phone ? "border-red-500" : "border-gray-700 focus:border-amber-500"
                }`}
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-3 text-gray-500" />
              <textarea
                placeholder="Teslimat Adresi"
                rows={2}
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className={`w-full pl-10 pr-3 py-2.5 rounded-xl bg-gray-800 border text-white placeholder-gray-500 focus:outline-none text-sm resize-none ${
                  errors.address ? "border-red-500" : "border-gray-700 focus:border-amber-500"
                }`}
              />
              {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
            </div>
            <div className="relative">
              <FileText size={16} className="absolute left-3 top-3 text-gray-500" />
              <textarea
                placeholder="Sipariş Notu (opsiyonel)"
                rows={2}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none text-sm resize-none"
              />
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-gray-300 font-semibold">Toplam</span>
              <span className="text-amber-400 font-extrabold text-2xl">{total} TL</span>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition shadow-lg shadow-emerald-500/20"
            >
              <Send size={18} /> WhatsApp ile Sipariş Ver
            </button>
            <p className="text-[11px] text-gray-500 text-center">
              Siparişiniz WhatsApp üzerinden iletilecektir.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
