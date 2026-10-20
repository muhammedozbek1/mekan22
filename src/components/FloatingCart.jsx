import { ShoppingCart } from "lucide-react";

export default function FloatingCart({ count, total, onClick }) {
  if (count === 0) return null;
  return (
    <button
      onClick={onClick}
      className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-amber-500 text-gray-900 font-bold shadow-2xl shadow-amber-500/40 active:scale-[0.98] transition"
    >
      <span className="flex items-center gap-2">
        <ShoppingCart size={20} />
        Sepetim ({count})
      </span>
      <span className="text-lg">{total} TL</span>
    </button>
  );
}
