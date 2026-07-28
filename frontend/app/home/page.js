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
    rating: 5,
  },
  {
    id: 2,
    name: "Roti Saju Gemboy",
    price: 20000,
    image: "/images/roti2.jpg",
    category: "Roti",
    rating: 4,
  },
  {
    id: 3,
    name: "Roti Vanilla X Kopi",
    price: 18000,
    image: "/images/roti3.jpg",
    category: "Roti",
    rating: 5,
  },
  {
    id: 4,
    name: "Paket Special",
    price: 60000,
    image: "/images/roti4.jpg",
    category: "Paket",
    rating: 5,
  },
  {
    id: 5,
    name: "Brownies Coklat Manis",
    price: 15000,
    image: "/images/roti5.jpg",
    category: "Brownies",
    rating: 4,
  },
  {
    id: 6,
    name: "Paket Roti dan Kopi",
    price: 20000,
    image: "/images/roti2.jpg",
    category: "Paket",
    rating: 5,
  },
  {
    id: 7,
    name: "Roti Bakar",
    price: 25000,
    image: "/images/roti3.jpg",
    category: "Roti",
    rating: 5,
  },
  {
    id: 8,
    name: "Brownies Coklat Manis",
    price: 20000,
    image: "/images/roti1.jpg",
    category: "Brownies",
    rating: 5,
  },
];

const categories = ["Semua", "Roti", "Brownies", "Paket"];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      activeCategory === "Semua" ||
      product.category === activeCategory;

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  function addToCart() {
    setCartCount((prev) => prev + 1);
  }

  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID").format(price);
  }

  return (
    <main className="min-h-screen bg-[#24170f] text-[#fff8ed]">
      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-[260px]
          border-r border-[#d9a45d]/20
          bg-gradient-to-b from-[#6f3d20] via-[#5b301a] to-[#3c2113]
          px-5 py-7
          transition-transform duration-300
          lg:translate-x-0
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e9b96c]/50 bg-[#3a2114] shadow-lg">
            <span className="text-2xl">🥐</span>
          </div>

          <div>
            <h1 className="font-serif text-xl font-bold tracking-wide">
              BRADKERY
            </h1>
            <p className="text-[10px] uppercase tracking-[3px] text-[#e9b96c]">
              Bakery & Coffee
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          <SidebarItem
            icon="⌂"
            label="Home"
            active
            href="/home"
          />

          <SidebarItem
            icon="♨"
            label="Menu makanan"
            href="#menu"
          />

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl bg-white/10 py-3 pl-11 pr-3 text-sm text-white placeholder:text-[#e6c9a8] outline-none transition focus:bg-white/15 focus:ring-1 focus:ring-[#e5aa5d]"
            />
          </div>

          <SidebarItem
            icon="%"
            label="Promo / discount"
            href="#promo"
          />

          <button
            onClick={() => {
              alert(
                cartCount > 0
                  ? `Ada ${cartCount} produk di keranjang.`
                  : "Keranjang masih kosong."
              );
            }}
            className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-sm transition hover:bg-white/10"
          >
            <span className="text-xl">🛒</span>

            <span className="flex-1">Keranjang</span>

            {cartCount > 0 && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e5a653] text-xs font-bold text-[#3c2113]">
                {cartCount}
              </span>
            )}
          </button>

          <SidebarItem
            icon="⚙"
            label="Setting"
            href="#setting"
          />

          <SidebarItem
            icon="★"
            label="Beri rating"
            href="#rating"
            yellow
          />
        </nav>

        {/* Bottom info */}
        <div className="absolute bottom-6 left-5 right-5 rounded-2xl border border-[#e8b86e]/20 bg-black/10 p-4">
          <p className="text-xs text-[#dcbf9b]">
            Freshly baked
          </p>

          <p className="mt-1 font-serif text-sm font-bold">
            Made with love ♡
          </p>
        </div>
      </aside>

      {/* Mobile overlay */}
      {menuOpen && (
        <button
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          aria-label="Close menu"
        />
      )}

      {/* ================= MAIN ================= */}
      <section className="min-h-screen lg:ml-[260px]">
        {/* TOP BAR */}
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-white/10 bg-[#3d2415]/90 px-5 backdrop-blur-xl md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-xl lg:hidden"
            >
              ☰
            </button>

            <div>
              <p className="text-xs uppercase tracking-[3px] text-[#dca55d]">
                Welcome to
              </p>

              <h2 className="font-serif text-xl font-bold md:text-2xl">
                Bradkery Bakery
              </h2>
            </div>
          </div>

          <Link
            href="/login"
            className="rounded-full border border-[#e2aa60]/40 bg-[#d99b4e]/10 px-4 py-2 text-xs font-semibold transition hover:bg-[#d99b4e] hover:text-[#321b10] md:px-5 md:text-sm"
          >
            Login
          </Link>
        </header>

        {/* ================= HERO ================= */}
        <section
          id="promo"
          className="relative overflow-hidden px-5 pb-8 pt-7 md:px-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,156,76,0.16),transparent_35%)]" />

          <div className="relative grid overflow-hidden rounded-[30px] border border-[#dca45b]/20 bg-[#6a3c20] shadow-2xl lg:grid-cols-[1.15fr_0.85fr]">
            {/* Hero text */}
            <div className="relative flex min-h-[340px] flex-col justify-center overflow-hidden p-7 md:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#e3a958]/10 blur-3xl" />

              <p className="relative mb-3 text-xs font-semibold uppercase tracking-[4px] text-[#e9b86e]">
                Fresh from the oven
              </p>

              <h2 className="relative max-w-xl font-serif text-4xl font-bold leading-[1.05] text-[#fff3df] md:text-6xl">
                Rasa hangat
                <br />
                <span className="text-[#e8ac5d]">
                  di setiap gigitan.
                </span>
              </h2>

              <p className="relative mt-5 max-w-md text-sm leading-6 text-[#e7cdb0] md:text-base">
                Nikmati roti, pastry, brownies, dan kopi favoritmu.
                Semua dibuat fresh setiap hari dengan bahan pilihan.
              </p>

              <div className="relative mt-7 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="rounded-full bg-[#e3a653] px-6 py-3 text-sm font-bold text-[#351c10] shadow-lg transition hover:-translate-y-1 hover:bg-[#f0bd70]"
                >
                  Lihat Menu →
                </a>

                <a
                  href="#promo"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  Promo Hari Ini
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative min-h-[280px] overflow-hidden lg:min-h-[340px]">
              <Image
                src="/images/roti6.jpg"
                alt="Fresh bakery"
                fill
                priority
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#6a3c20] via-transparent to-black/10 lg:from-[#6a3c20]/30" />

              <div className="absolute bottom-5 right-5 rounded-2xl border border-white/20 bg-[#3b2114]/80 px-5 py-3 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[2px] text-[#e8b46a]">
                  Best seller
                </p>
                <p className="font-serif font-bold">
                  Pastry of the day
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CATEGORY ================= */}
        <section className="px-5 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[3px] text-[#dca55d]">
                Our menu
              </p>

              <h2 className="mt-1 font-serif text-3xl font-bold md:text-4xl">
                Temukan favoritmu
              </h2>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold transition ${
                    activeCategory === category
                      ? "bg-[#e1a456] text-[#351d10] shadow-lg"
                      : "border border-white/10 bg-white/5 text-[#d8bfa2] hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section
          id="menu"
          className="px-5 pb-12 pt-7 md:px-8"
        >
          {filteredProducts.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center">
              <p className="text-4xl">🥐</p>
              <h3 className="mt-4 font-serif text-xl font-bold">
                Produk tidak ditemukan
              </h3>
              <p className="mt-2 text-sm text-[#bda78d]">
                Coba gunakan kata pencarian yang lain.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={addToCart}
                  formatPrice={formatPrice}
                />
              ))}
            </div>
          )}
        </section>

        {/* ================= DELIVERY SECTION ================= */}
        <section className="px-5 pb-10 md:px-8">
          <div className="relative overflow-hidden rounded-[30px] border border-[#dca45d]/20 bg-gradient-to-r from-[#62401f] to-[#4c2d18] p-8 md:p-12">
            {/* Decorative circles */}
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border border-[#e2aa60]/10" />
            <div className="absolute -bottom-24 -right-10 h-64 w-64 rounded-full border border-[#e2aa60]/10" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e2a653] text-3xl shadow-xl">
                🕐
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[4px] text-[#e6b36b]">
                Fresh & on time
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold md:text-5xl">
                We Make Sure
              </h2>

              <h3 className="mt-1 font-serif text-2xl font-bold text-[#e4a653] md:text-4xl">
                Products will be delivered on time
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#d6b997]">
                Setiap pesanan kami siapkan dengan hati-hati agar
                sampai dalam kondisi terbaik. Fresh, hangat, dan
                siap menemani harimu.
              </p>

              <button
                onClick={() =>
                  alert("Pesanan kamu akan segera diproses!")
                }
                className="mt-6 rounded-full bg-[#e1a452] px-7 py-3 text-xs font-bold uppercase tracking-wide text-[#351d10] transition hover:-translate-y-1 hover:bg-[#f1bd70] hover:shadow-xl"
              >
                Order Now
              </button>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 px-5 py-8 md:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="font-serif text-lg font-bold">
                BRADKERY
              </p>

              <p className="mt-1 text-xs text-[#9f876e]">
                Bakery & Coffee — Made fresh every day.
              </p>
            </div>

            <p className="text-xs text-[#806b57]">
              © 2025 Bradkery. All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}

/* ================= SIDEBAR ITEM ================= */

function SidebarItem({
  icon,
  label,
  href,
  active = false,
  yellow = false,
}) {
  return (
    <a
      href={href}
      className={`flex items-center gap-4 rounded-xl px-4 py-3 text-sm transition ${
        active
          ? "bg-[#d99d58] font-semibold text-[#3b2113] shadow-lg"
          : "text-[#f4dfc4] hover:bg-white/10"
      }`}
    >
      <span
        className={`w-5 text-center text-xl ${
          yellow ? "text-[#ffd229]" : ""
        }`}
      >
        {icon}
      </span>

      <span>{label}</span>
    </a>
  );
}

/* ================= PRODUCT CARD ================= */

function ProductCard({ product, onAdd, formatPrice }) {
  return (
    <article className="group overflow-hidden rounded-[22px] border border-[#dca45d]/15 bg-[#744622] shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#e2aa60]/40 hover:shadow-2xl">
      {/* Image */}
      <div className="relative aspect-[1/0.88] overflow-hidden bg-[#4c2b18]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <span className="absolute left-3 top-3 rounded-full bg-[#3b2114]/80 px-3 py-1 text-[9px] font-semibold text-[#f1c481] backdrop-blur-md">
          {product.category}
        </span>

        <button
          onClick={onAdd}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#e3a653] text-lg font-bold text-[#3b2113] shadow-lg transition hover:scale-110 hover:bg-[#f3bf75]"
          aria-label={`Tambah ${product.name} ke keranjang`}
        >
          +
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="min-h-[40px] font-serif text-sm font-bold leading-5 text-[#fff0dc]">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-[10px] text-[#f5bd65]">
          {"★".repeat(product.rating)}
          <span className="ml-1 text-[#b9946e]">
            ({product.rating}.0)
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div>
            <p className="text-[9px] uppercase tracking-wide text-[#c9a27d]">
              Harga
            </p>

            <p className="font-bold text-[#f3bc6b]">
              Rp {formatPrice(product.price)}
            </p>
          </div>

          <button
            onClick={onAdd}
            className="rounded-lg bg-[#5b341b] px-3 py-2 text-[10px] font-semibold text-[#f4ddc1] transition hover:bg-[#8a5428]"
          >
            Beli
          </button>
        </div>
      </div>
    </article>
  );
}