"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Brownies Coklat Manis",
    price: 15000,
    image: "/images/roti1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Roti Saju Gemboy",
    price: 20000,
    image: "/images/roti2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Roti Vanilla X Kopi",
    price: 18000,
    image: "/images/roti3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Paket Special",
    price: 60000,
    image: "/images/roti4.jpg",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#24170f] text-[#fff8ed]">

      {/* ================= SIDEBAR ================= */}
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[250px] bg-gradient-to-b from-[#6f3d20] to-[#3c2113] px-5 py-7 lg:block">

        {/* LOGO */}
        <div className="mb-10 text-center">
          <div className="text-4xl">🥐</div>

          <h1 className="mt-2 font-serif text-xl font-bold">
            BRADKERY
          </h1>

          <p className="text-[10px] uppercase tracking-[3px] text-[#e9b96c]">
            Bakery & Coffee
          </p>
        </div>

        {/* NAVBAR */}
        <nav className="space-y-2">

          {/* HOME */}
          <Link
            href="/home"
            className="flex items-center gap-4 rounded-xl bg-[#d99d58] px-4 py-3 text-sm font-semibold text-[#3b2113]"
          >
            🏠 Home
          </Link>

          {/* MENU MAKANAN */}
          <Link
            href="/menuMakanan"
            className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-[#f4dfc4] transition hover:bg-white/10"
          >
            🍞 Menu makanan
          </Link>

          {/* PROMO */}
          <Link
            href="/promo"
            className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-[#f4dfc4] transition hover:bg-white/10"
          >
            🏷️ Promo / Discount
          </Link>

          {/* KERANJANG */}
          <Link
            href="/keranjang"
            className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-[#f4dfc4] transition hover:bg-white/10"
          >
            🛒 Keranjang
          </Link>

          {/* SETTING */}
          <Link
            href="/setting"
            className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-[#f4dfc4] transition hover:bg-white/10"
          >
            ⚙️ Setting
          </Link>

          {/* RATING */}
          <Link
            href="/rating"
            className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-[#f4dfc4] transition hover:bg-white/10"
          >
            ⭐ Beri rating
          </Link>

        </nav>

        {/* INFO BAWAH */}
        <div className="absolute bottom-6 left-5 right-5 rounded-2xl bg-black/10 p-4">

          <p className="text-xs text-[#dcbf9b]">
            Freshly baked
          </p>

          <p className="mt-1 font-serif text-sm font-bold">
            Made with love ♡
          </p>

        </div>

      </aside>

      {/* ================= MAIN ================= */}
      <section className="min-h-screen lg:ml-[250px]">

        {/* ================= HEADER ================= */}
        <header className="border-b border-white/10 bg-[#3d2415] px-6 py-5 md:px-10">

          <div>
            <p className="text-xs uppercase tracking-[3px] text-[#dca55d]">
              Welcome to
            </p>

            <h2 className="font-serif text-2xl font-bold">
              Bradkery Bakery
            </h2>
          </div>

        </header>

        {/* ================= HERO ================= */}
        <section className="p-5 md:p-8">

          <div className="grid overflow-hidden rounded-[30px] bg-[#6a3c20] shadow-2xl lg:grid-cols-2">

            {/* HERO TEXT */}
            <div className="flex flex-col justify-center p-8 md:p-12">

              <p className="text-xs font-semibold uppercase tracking-[4px] text-[#e9b86e]">
                Fresh from the oven
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold leading-tight md:text-6xl">
                Rasa hangat
                <br />

                <span className="text-[#e8ac5d]">
                  di setiap gigitan.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#e7cdb0]">
                Nikmati roti, pastry, brownies, dan kopi favoritmu.
                Semua dibuat fresh setiap hari dengan bahan pilihan.
              </p>

              <div className="mt-7 flex gap-3">

                <Link
                  href="/menuMakanan"
                  className="rounded-full bg-[#e3a653] px-6 py-3 text-sm font-bold text-[#351c10] transition hover:-translate-y-1 hover:bg-[#f0bd70]"
                >
                  Lihat Menu →
                </Link>

                <Link
                  href="/promo"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  Promo
                </Link>

              </div>

            </div>

            {/* HERO IMAGE */}
            <div className="relative min-h-[300px]">

              <Image
                src="/images/roti6.jpg"
                alt="Fresh bakery"
                fill
                priority
                className="object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

        </section>

        {/* ================= PRODUK POPULER ================= */}
        <section className="px-5 pb-10 md:px-8">

          <div className="mb-6 flex items-end justify-between">

            <div>

              <p className="text-xs uppercase tracking-[3px] text-[#dca55d]">
                Our menu
              </p>

              <h2 className="font-serif text-3xl font-bold">
                Produk Populer
              </h2>

            </div>

            <Link
              href="/menuMakanan"
              className="text-sm font-semibold text-[#e3a653] transition hover:underline"
            >
              Lihat semua →
            </Link>

          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

            {products.map((product) => (

              <div
                key={product.id}
                className="overflow-hidden rounded-2xl bg-[#744622] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* IMAGE */}
                <div className="relative aspect-square overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 hover:scale-110"
                  />

                </div>

                {/* PRODUCT INFO */}
                <div className="p-4">

                  <h3 className="font-serif text-sm font-bold">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-xs text-[#f5bd65]">
                    {"★".repeat(product.rating)}
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-2">

                    <p className="font-bold text-[#f3bc6b]">
                      Rp {product.price.toLocaleString("id-ID")}
                    </p>

                    <Link
                      href="/keranjang"
                      className="rounded-lg bg-[#5b341b] px-3 py-2 text-xs transition hover:bg-[#8a5428]"
                    >
                      Beli
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ================= DELIVERY ================= */}
        <section className="px-5 pb-10 md:px-8">

          <div className="rounded-[30px] bg-gradient-to-r from-[#62401f] to-[#4c2d18] p-10 text-center">

            <div className="text-4xl">
              🕐
            </div>

            <p className="mt-4 text-xs uppercase tracking-[4px] text-[#e6b36b]">
              Fresh & on time
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold">
              We Make Sure
            </h2>

            <h3 className="font-serif text-2xl font-bold text-[#e4a653]">
              Products will be delivered on time
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm text-[#d6b997]">
              Setiap pesanan kami siapkan dengan hati-hati agar
              sampai dalam kondisi terbaik.
            </p>

            <Link
              href="/menuMakanan"
              className="mt-6 inline-block rounded-full bg-[#e1a452] px-7 py-3 text-xs font-bold text-[#351d10] transition hover:-translate-y-1 hover:bg-[#f1bd70]"
            >
              Order Now
            </Link>

          </div>

        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 px-8 py-8 text-center text-xs text-[#806b57]">
          © 2025 Bradkery Bakery — Made fresh every day.
        </footer>

      </section>

    </main>
  );
}