"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
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

export default function RatingPage() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="rating-page"
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

            {/* ACTIVE */}
            <Link
              href="/rating"
              className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-[#d99d58] to-[#e7b56f] px-4 py-3 text-sm font-semibold text-[#3b2113] shadow-lg shadow-black/20"
            >
              <span className="text-xl text-[#3b2113]">⭐</span>
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
        <section className="min-h-screen lg:ml-[250px]">

          {/* HEADER */}
          <motion.header
            initial="hidden"
            animate="show"
            variants={stagger}
            className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-[#3d2415] via-[#452817] to-[#3d2415] px-6 py-8 md:px-10 lg:px-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#d99d58]/5"
            />

            <div className="relative z-10">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d99d58]/15 text-lg">
                  ⭐
                </div>
                <p className="text-xs uppercase tracking-[3px] text-[#dca55d]">
                  Bradkery Bakery
                </p>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-4 font-serif text-4xl font-bold tracking-tight md:text-5xl"
              >
                Beri Rating
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-2 max-w-xl text-sm leading-6 text-[#d6b997]"
              >
                Ceritakan pengalamanmu di Bradkery, biar kami bisa
                terus jadi lebih baik.
              </motion.p>
            </div>
          </motion.header>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="flex min-h-[500px] items-center justify-center p-6 md:p-10 lg:p-12"
          >

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="w-full max-w-lg rounded-3xl border border-[#dca45d]/15 bg-gradient-to-br from-[#744622] to-[#633a1f] p-8 text-center shadow-xl shadow-black/10 transition duration-300 hover:border-[#dca45d]/30 hover:shadow-2xl"
            >

              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d99d58] text-2xl shadow-lg">
                ⭐
              </div>

              <h2 className="font-serif text-2xl font-bold">
                Bagaimana pengalamanmu?
              </h2>

              <p className="mt-2 text-sm text-[#d6b997]">
                Berikan rating untuk pelayanan kami.
              </p>

              {/* BINTANG */}
              <div className="my-8 flex justify-center gap-3 text-4xl">
                {[1, 2, 3, 4, 5].map((number) => (
                  <motion.button
                    key={number}
                    onClick={() => setRating(number)}
                    onMouseEnter={() => setHovered(number)}
                    onMouseLeave={() => setHovered(0)}
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      scale: number === rating ? 1.15 : 1,
                      rotate: number === rating ? [0, -10, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={
                      number <= (hovered || rating)
                        ? "text-[#ffd229] drop-shadow-[0_0_8px_rgba(255,210,41,0.5)]"
                        : "text-white/25"
                    }
                  >
                    ★
                  </motion.button>
                ))}
              </div>

              <motion.p
                key={rating}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 h-5 text-xs font-medium uppercase tracking-wider text-[#e9b96c]"
              >
                {rating === 0 && "Ketuk bintang untuk memberi rating"}
                {rating === 1 && "Kurang memuaskan"}
                {rating === 2 && "Cukup"}
                {rating === 3 && "Lumayan baik"}
                {rating === 4 && "Baik"}
                {rating === 5 && "Sangat memuaskan!"}
              </motion.p>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -2 }}
                disabled={rating === 0}
                onClick={() => alert(`Terima kasih! Rating kamu ${rating}/5`)}
                className="rounded-full bg-gradient-to-r from-[#e3a653] to-[#d99d58] px-7 py-3 font-bold text-[#351c10] shadow-lg shadow-black/20 transition duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40"
              >
                Kirim Rating
              </motion.button>

            </motion.div>

          </motion.div>

        </section>

      </motion.main>
    </AnimatePresence>
  );
}