"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { id: 1, name: "Brownies Coklat Manis", price: 15000, image: "/images/roti1.jpg", rating: 5 },
  { id: 2, name: "Roti Saju Gemboy", price: 20000, image: "/images/roti2.jpg", rating: 4 },
  { id: 3, name: "Roti Vanilla X Kopi", price: 18000, image: "/images/roti3.jpg", rating: 5 },
  { id: 4, name: "Paket Special", price: 60000, image: "/images/roti4.jpg", rating: 5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
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

export default function HomePage() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="home-page"
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

            {/* ACTIVE */}
            <Link
              href="/home"
              className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-[#d99d58] to-[#e7b56f] px-4 py-3 text-sm font-semibold text-[#3b2113] shadow-lg shadow-black/20"
            >
              <span className="text-xl">🏠</span>
              <span>Home</span>
            </Link>

            <Link
              href="/menuMakanan"
              className="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-[#f4dfc4] transition duration-300 hover:bg-white/10 hover:text-white"
            >
              <span className="text-xl transition group-hover:scale-110">🍞</span>
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
                  🏠
                </div>
                <p className="text-xs uppercase tracking-[3px] text-[#dca55d]">
                  Welcome to
                </p>
              </div>

              <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">
                Bradkery Bakery
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#d6b997]">
                Roti, pastry, brownies, dan kopi favoritmu — dibuat fresh setiap hari.
              </p>
            </div>
          </motion.header>

          {/* HERO */}
          <motion.section variants={fadeUp} className="p-6 md:p-10 lg:p-12">
            <div className="relative grid overflow-hidden rounded-[30px] border border-[#dca45d]/15 bg-gradient-to-br from-[#744622] to-[#633a1f] shadow-xl shadow-black/10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#d99d58]/10"
              />

              <motion.div
                variants={fadeUp}
                className="relative z-10 flex flex-col justify-center p-8 md:p-12"
              >
                <p className="text-xs font-semibold uppercase tracking-[4px] text-[#e9b86e]">
                  Fresh from the oven
                </p>
                <h2 className="mt-3 font-serif text-4xl font-bold leading-tight md:text-6xl">
                  Rasa hangat
                  <br />
                  <span className="text-[#e8ac5d]">di setiap gigitan.</span>
                </h2>
                <p className="mt-5 max-w-md text-sm leading-6 text-[#e7cdb0]">
                  Nikmati roti, pastry, brownies, dan kopi favoritmu.
                  Semua dibuat fresh setiap hari dengan bahan pilihan.
                </p>
                <div className="mt-7 flex gap-3">
                  <Link href="/menuMakanan">
                    <motion.span
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ y: -2 }}
                      className="inline-block rounded-full bg-gradient-to-r from-[#e3a653] to-[#d99d58] px-6 py-3 text-sm font-bold text-[#351c10] shadow-lg shadow-black/20 transition duration-300 hover:shadow-xl"
                    >
                      Lihat Menu →
                    </motion.span>
                  </Link>
                  <Link href="/promo">
                    <motion.span
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ y: -2 }}
                      className="inline-block rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition duration-300 hover:bg-white/10"
                    >
                      Promo
                    </motion.span>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative min-h-[300px]"
              >
                <Image
                  src="/images/roti6.jpg"
                  alt="Fresh bakery"
                  fill
                  priority
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* PRODUK POPULER */}
          <motion.section variants={fadeUp} className="px-6 pb-10 md:px-10 lg:px-12">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[3px] text-[#dca55d]">Our menu</p>
                <h2 className="font-serif text-3xl font-bold">Produk Populer</h2>
              </div>
              <Link href="/menuMakanan" className="text-sm font-semibold text-[#e3a653] transition hover:underline">
                Lihat semua →
              </Link>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-4 md:grid-cols-4"
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-2xl border border-[#dca45d]/15 bg-gradient-to-br from-[#744622] to-[#633a1f] shadow-lg shadow-black/10 transition duration-300 hover:border-[#dca45d]/30 hover:shadow-2xl"
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
                    <h3 className="font-serif text-sm font-bold">{product.name}</h3>
                    <p className="mt-2 text-xs text-[#f5bd65]">
                      {"★".repeat(product.rating)}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <p className="font-bold text-[#f3bc6b]">
                        Rp {product.price.toLocaleString("id-ID")}
                      </p>
                      <Link href="/keranjang">
                        <motion.span
                          whileTap={{ scale: 0.95 }}
                          whileHover={{ y: -2 }}
                          className="inline-block rounded-full bg-gradient-to-r from-[#e3a653] to-[#d99d58] px-3 py-2 text-xs font-bold text-[#351c10] shadow-md shadow-black/20 transition duration-300 hover:shadow-lg"
                        >
                          Beli
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* DELIVERY */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="px-6 pb-10 md:px-10 lg:px-12"
          >
            <div className="relative overflow-hidden rounded-[30px] border border-[#dca45d]/15 bg-gradient-to-r from-[#62401f] to-[#4c2d18] p-10 text-center shadow-xl shadow-black/10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#d99d58]/10"
              />
              <div className="relative z-10">
                <div className="text-4xl">🕐</div>
                <p className="mt-4 text-xs uppercase tracking-[4px] text-[#e6b36b]">
                  Fresh & on time
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold">We Make Sure</h2>
                <h3 className="font-serif text-2xl font-bold text-[#e4a653]">
                  Products will be delivered on time
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-sm text-[#d6b997]">
                  Setiap pesanan kami siapkan dengan hati-hati agar
                  sampai dalam kondisi terbaik.
                </p>
                <Link href="/menuMakanan">
                  <motion.span
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ y: -2 }}
                    className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#e3a653] to-[#d99d58] px-7 py-3 text-xs font-bold text-[#351d10] shadow-lg shadow-black/20 transition duration-300 hover:shadow-xl"
                  >
                    Order Now
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.section>

          <footer className="border-t border-white/10 px-8 py-8 text-center text-xs text-[#806b57]">
            © 2025 Bradkery Bakery — Made fresh every day.
          </footer>
        </motion.section>
      </motion.main>
    </AnimatePresence>
  );
}