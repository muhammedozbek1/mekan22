export const categories = [
  { id: "hatay", name: "Hatay Usulü Döner", emoji: "🥙" },
  { id: "kasarli", name: "Kaşarlı Döner", emoji: "🧀" },
  { id: "sandvic", name: "Sandviçler", emoji: "🥪" },
  { id: "menu", name: "Menüler", emoji: "🍽️" },
  { id: "icecek", name: "İçecekler", emoji: "🥤" },
];

const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`;

export const menuItems = [
  // Hatay Usulü Döner
  { id: "h1", category: "hatay", name: "Hatay Usulü Tavuk Döner (Dürüm)", desc: "Özel baharatlı tavuk döner, lavaş, sebzeler ve soslarla.", price: 120, image: px(27744717) },
  { id: "h2", category: "hatay", name: "Hatay Usulü Tavuk Döner (Porsiyon)", desc: "Porsiyon tavuk döner, pilav ve salata ile.", price: 150, image: px(18330028) },
  { id: "h3", category: "hatay", name: "Hatay Usulü Tavuk Döner (Ekmek Arası)", desc: "Taze ekmek arası Hatay usulü tavuk döner.", price: 100, image: px(15390220) },
  { id: "h4", category: "hatay", name: "Hatay Usulü Tavuk Döner (Tombik)", desc: "Tombik ekmek içinde Hatay usulü döner.", price: 110, image: px(18852568) },

  // Kaşarlı Döner
  { id: "k1", category: "kasarli", name: "Kaşarlı Tavuk Döner (Dürüm)", desc: "Erimiş kaşar peyniriyle sarılmış tavuk döner dürüm.", price: 130, image: px(16022887) },
  { id: "k2", category: "kasarli", name: "Kaşarlı Tavuk Döner (Porsiyon)", desc: "Kaşarlı tavuk döner porsiyon, pilav ve salata ile.", price: 160, image: px(15202777) },
  { id: "k3", category: "kasarli", name: "Kaşarlı Tavuk Döner (Ekmek Arası)", desc: "Taze ekmek arası kaşarlı tavuk döner.", price: 110, image: px(25856524) },
  { id: "k4", category: "kasarli", name: "Kaşarlı Tavuk Döner (Tombik)", desc: "Tombik ekmek içinde kaşarlı döner.", price: 120, image: px(32538756) },

  // Sandviçler
  { id: "s1", category: "sandvic", name: "Tavuk Sandviç", desc: "Izgara tavuk, marul, domates ve mayonez.", price: 90, image: px(33014388) },
  { id: "s2", category: "sandvic", name: "Kaşarlı Sandviç", desc: "Kaşar peynirli ızgara tavuk sandviç.", price: 100, image: px(29177431) },
  { id: "s3", category: "sandvic", name: "Patates Kızartmalı Sandviç", desc: "Tavuk döner ve çıtır patates kızartması.", price: 85, image: px(29306502) },
  { id: "s4", category: "sandvic", name: "Karışık Sandviç", desc: "Döner, kaşar ve sebzelerle dolu karışık sandviç.", price: 110, image: px(32402092) },

  // Menüler
  { id: "m1", category: "menu", name: "Döner Menü", desc: "Döner + Patates Kızartması + İçecek.", price: 180, image: px(33068079) },
  { id: "m2", category: "menu", name: "Kaşarlı Döner Menü", desc: "Kaşarlı döner + Patates + İçecek.", price: 200, image: px(38896821) },
  { id: "m3", category: "menu", name: "Çocuk Menüsü", desc: "Mini döner + patates + meyve suyu.", price: 120, image: px(32538756) },
  { id: "m4", category: "menu", name: "Mega Menü", desc: "Büyük porsiyon döner + patates + 2 içecek.", price: 250, image: px(29306502) },

  // İçecekler
  { id: "i1", category: "icecek", name: "Ayran", desc: "Soğuk ve köpüklü ayran.", price: 20, image: px(38521392) },
  { id: "i2", category: "icecek", name: "Coca Cola (330ml)", desc: "Buz gibi Coca Cola.", price: 35, image: px(6369303) },
  { id: "i3", category: "icecek", name: "Fanta (330ml)", desc: "Portakal aromalı Fanta.", price: 35, image: px(29306502) },
  { id: "i4", category: "icecek", name: "Sprite (330ml)", desc: "Limon aromalı Sprite.", price: 35, image: px(24604625) },
  { id: "i5", category: "icecek", name: "Şalgam", desc: "Acılı/az acılı şalgam suyu.", price: 25, image: px(12318617) },
  { id: "i6", category: "icecek", name: "Su (500ml)", desc: "Doğal kaynak suyu.", price: 10, image: px(113734) },
];

export const WHATSAPP_NUMBER = "905314873383";
export const PHONE_DISPLAY = "0531 487 33 83";
export const ADDRESS = "Abdurrahman Mah., 1. Kuyulu Sok. No:18 / Devlet Hastanesi Karşısı, Edirne Merkez";
export const HOURS = "08:00 - 00:00";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Abdurrahman+Mah+1+Kuyulu+Sok+No+18+Edirne";
export const MAPS_EMBED = "https://www.google.com/maps?q=Abdurrahman+Mah.+1.+Kuyulu+Sok.+No:18+Edirne&output=embed";
