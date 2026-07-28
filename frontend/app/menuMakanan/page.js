"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { id: 1, name: "Brownies Coklat Manis", price: 15000, image: "/images/roti1.jpg", category: "Brownies" },
  { id: 2, name: "Roti Saju Gemboy", price: 20000, image: "/images/roti2.jpg", category: "Roti" },
  { id: 3, name: "Roti Vanilla X Kopi", price: 18000, image: "/images/roti3.jpg", category: "Roti" },
  { id: 4, name: "Paket Special", price: 60000, image: "/images/roti4.jpg", category: "Paket" },
  { id: 5, name: "Brownies Coklat", price: 15000, image: "/images/roti5.jpg", category: "Brownies" },
  { id: 6, name: "Paket Roti dan Kopi", price: 20000, image: "/images/roti2.jpg", category: "Paket" },
  { id: 7, name: "Roti Bakar", price: 25000, image: "/images/roti3.jpg", category: "Roti" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

// Animasi untuk seluruh halaman (masuk & keluar)
const pageVariants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.99,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function MenuMakanan() {
  const [category, setCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = products.filter((item) => {
    const cocokKategori = category === "Semua" || item.category === category;
    const cocokSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return cocokKategori && cocokSearch;
  });

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="menu-page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-[#24170f] text-[#fff8ed]"
      >

        {/* ================= SIDEBAR ================= */}
        <motion.aside
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="fixed left-0 top-0 hidden h-screen w-[250px] bg-gradient-to-b from-[#6f3d20] via-[#5b301a] to-[#3c2113] p-6 shadow-2xl lg:block"
        >
          {/* LOGO */}
          <div className="mb-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d99d58]/15 text-4xl shadow-inner">
              🥐
            </div>
            <h1 className="mt-3 font-serif text-xl font-bold tracking-wide">
              BRADKERY
            </h1>
            <p className="mt-1 text-[10px] uppercase tracking-[3px] text-[#e9b96c]">
              Bakery & Coffee
            </p>
          </div>

          {/* NAVBAR */}
          <nav className="space-y-2">

            <Link
              href="/home"
              className="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-[#f4dfc4] transition duration-300 hover:bg-white/10 hover:text-white"
            >
              <span className="text-xl transition group-hover:scale-110">🏠</span>
              <span>Home</span>
            </Link>

            {/* ACTIVE */}
            <Link
              href="/menuMakanan"
              className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-[#d99d58] to-[#e7b56f] px-4 py-3 text-sm font-semibold text-[#3b2113] shadow-lg shadow-black/20"
            >
              <span className="text-xl">🍞</span>
              <span>Menu makanan</span>
            </Link>

            <Link
              href="/promo"
              className="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-[#f4dfc4] transition duration-300 hover:bg-white/10 hover:text-white"
            >
              <span className="text-xl transition group-hover:scale-110">🏷️</span>
              <span>Promo / Discount</span>
            </Link>

            <Link
              href="/keranjang"
              className="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-[#f4dfc4] transition duration-300 hover:bg-white/10 hover:text-white"
            >
              <span className="text-xl transition group-hover:scale-110">🛒</span>
              <span>Keranjang</span>
            </Link>

            <Link
              href="/setting"
              className="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-[#f4dfc4] transition duration-300 hover:bg-white/10 hover:text-white"
            >
              <span className="text-xl transition group-hover:scale-110">⚙️</span>
              <span>Setting</span>
            </Link>

            <Link
              href="/rating"
              className="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-[#f4dfc4] transition duration-300 hover:bg-white/10 hover:text-white"
            >
              <span className="text-xl text-yellow-300 transition group-hover:scale-110">⭐</span>
              <span>Beri Rating</span>
            </Link>
          </nav>

          {/* BOTTOM INFO */}
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[#e8b86e]/20 bg-black/10 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d99d58]/15">
                🥖
              </div>
              <div>
                <p className="text-[11px] text-[#dcbf9b]">Freshly baked</p>
                <p className="mt-0.5 font-serif text-sm font-bold">Made with love ♡</p>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* ================= MAIN CONTENT ================= */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={stagger}
          className="min-h-screen lg:ml-[250px]"
        >

          {/* HEADER */}
          <motion.header
            variants={fadeUp}
            className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-[#3d2415] via-[#452817] to-[#3d2415] px-6 py-8 md:px-10 lg:px-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#d99d58]/5"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d99d58]/15 text-lg">
                  🍞
                </div>
                <p className="text-xs uppercase tracking-[3px] text-[#dca55d]">
                  Our Menu
                </p>
              </div>

              <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">
                Menu Makanan
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#d6b997]">
                Pilih makanan favoritmu dari roti, brownies, hingga paket hemat.
              </p>
            </div>
          </motion.header>

          {/* ================= CONTENT ================= */}
          <div className="p-6 md:p-10 lg:p-12">

            {/* SEARCH */}
            <motion.input
              variants={fadeUp}
              type="text"
              placeholder="🔍 Cari makanan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-6 w-full rounded-xl border border-[#dca45d]/15 bg-white/10 px-5 py-3 outline-none transition duration-300 focus:border-[#e3a653] focus:bg-white/[0.15]"
            />

            {/* CATEGORY */}
            <motion.div variants={fadeUp} className="mb-8 flex gap-2 overflow-x-auto">
              {["Semua", "Roti", "Brownies", "Paket"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => setCategory(item)}
                  whileTap={{ scale: 0.94 }}
                  className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                    category === item ? "text-[#351c10]" : "bg-white/10 text-[#f4dfc4] hover:bg-white/20"
                  }`}
                >
                  {category === item && (
                    <motion.span
                      layoutId="categoryPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e3a653] to-[#d99d58] shadow-lg shadow-black/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* PRODUCTS */}
            <motion.div
              layout
              variants={fadeUp}
              className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    variants={cardVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    whileHover={{ y: -6 }}
                    className="overflow-hidden rounded-3xl border border-[#dca45d]/15 bg-gradient-to-br from-[#744622] to-[#633a1f] shadow-xl shadow-black/10 transition duration-300 hover:border-[#dca45d]/30 hover:shadow-2xl"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition duration-500 hover:scale-110"
                      />
                    </div>

                    <div className="p-4">
                      <p className="text-xs font-semibold text-[#e5ad62]">{product.category}</p>
                      <h2 className="mt-1 font-serif font-bold">{product.name}</h2>
                      <p className="mt-3 font-bold text-[#f3bc6b]">
                        Rp {product.price.toLocaleString("id-ID")}
                      </p>
                      <Link href="/keranjang">
                        <motion.span
                          whileTap={{ scale: 0.95 }}
                          whileHover={{ y: -2 }}
                          className="mt-3 block rounded-full bg-gradient-to-r from-[#e3a653] to-[#d99d58] py-2 text-center text-sm font-bold text-[#351c10] shadow-lg shadow-black/20 transition duration-300 hover:shadow-xl"
                        >
                          + Keranjang
                        </motion.span>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-10 text-center text-sm text-[#cdb89d]"
              >
                Makanan tidak ditemukan 🥲
              </motion.p>
            )}

          </div>
        </motion.section>
      </motion.main>
    </AnimatePresence>
  );
}