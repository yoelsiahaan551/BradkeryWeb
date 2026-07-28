"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Brownies Coklat Manis",
    price: 15000,
    image: "/images/roti1.jpg",
    category: "Brownies",
  },
  {
    id: 2,
    name: "Roti Saju Gemboy",
    price: 20000,
    image: "/images/roti2.jpg",
    category: "Roti",
  },
  {
    id: 3,
    name: "Roti Vanilla X Kopi",
    price: 18000,
    image: "/images/roti3.jpg",
    category: "Roti",
  },
  {
    id: 4,
    name: "Paket Special",
    price: 60000,
    image: "/images/roti4.jpg",
    category: "Paket",
  },
  {
    id: 5,
    name: "Brownies Coklat",
    price: 15000,
    image: "/images/roti5.jpg",
    category: "Brownies",
  },
  {
    id: 6,
    name: "Paket Roti dan Kopi",
    price: 20000,
    image: "/images/roti2.jpg",
    category: "Paket",
  },
  {
    id: 7,
    name: "Roti Bakar",
    price: 25000,
    image: "/images/roti3.jpg",
    category: "Roti",
  },
];

export default function MenuMakanan() {

  const [category, setCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = products.filter((item) => {

    const cocokKategori =
      category === "Semua" || item.category === category;

    const cocokSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

    return cocokKategori && cocokSearch;
  });

  return (
    <main className="min-h-screen bg-[#24170f] text-[#fff8ed]">

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 hidden h-screen w-[250px] bg-[#5b301a] p-6 lg:block">

        <div className="mb-10 text-center">
          <div className="text-4xl">🥐</div>
          <h1 className="font-serif text-xl font-bold">
            BRADKERY
          </h1>
        </div>

        <nav className="space-y-2">

          <Link href="/home" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            🏠 Home
          </Link>

          <Link href="/menuMakanan" className="block rounded-xl bg-[#d99d58] px-4 py-3 font-semibold text-[#3b2113]">
            🍞 Menu makanan
          </Link>

          <Link href="/promo" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            🏷️ Promo / Discount
          </Link>

          <Link href="/keranjang" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            🛒 Keranjang
          </Link>

          <Link href="/setting" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            ⚙️ Setting
          </Link>

          <Link href="/rating" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            ⭐ Beri rating
          </Link>

        </nav>
      </aside>

      {/* CONTENT */}
      <section className="lg:ml-[250px]">

        <header className="border-b border-white/10 bg-[#3d2415] p-6">

          <p className="text-xs uppercase tracking-[3px] text-[#dca55d]">
            Our Menu
          </p>

          <h1 className="font-serif text-3xl font-bold">
            Menu Makanan
          </h1>

          <p className="mt-2 text-sm text-[#cdb89d]">
            Pilih makanan favoritmu.
          </p>

        </header>

        <div className="p-6 md:p-8">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="🔍 Cari makanan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-6 w-full rounded-xl border border-white/10 bg-white/10 px-5 py-3 outline-none focus:border-[#e3a653]"
          />

          {/* CATEGORY */}
          <div className="mb-8 flex gap-2 overflow-x-auto">

            {["Semua", "Roti", "Brownies", "Paket"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-5 py-2 text-sm ${
                  category === item
                    ? "bg-[#e3a653] text-[#351c10]"
                    : "bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

          {/* PRODUCTS */}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">

            {filtered.map((product) => (

              <div
                key={product.id}
                className="overflow-hidden rounded-2xl bg-[#744622] shadow-xl"
              >

                <div className="relative aspect-square">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-4">

                  <p className="text-xs text-[#e5ad62]">
                    {product.category}
                  </p>

                  <h2 className="mt-1 font-serif font-bold">
                    {product.name}
                  </h2>

                  <p className="mt-3 font-bold text-[#f3bc6b]">
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>

                  <Link
                    href="/keranjang"
                    className="mt-3 block rounded-lg bg-[#5b341b] py-2 text-center text-sm hover:bg-[#8a5428]"
                  >
                    + Keranjang
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
    </main>
  );
}