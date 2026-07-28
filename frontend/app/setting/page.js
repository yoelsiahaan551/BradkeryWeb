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

export default function SettingPage() {
  const [notifPromo, setNotifPromo] = useState(true);

  return (
    // AnimatePresence di sini membuat animasi "exit" jalan saat komponen unmount
    // (misalnya saat kamu refresh, animasi initial->animate tetap jalan normal)
    <AnimatePresence mode="wait">
      <motion.main
        key="setting-page"
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

            {/* HOME — ditambahkan, sebelumnya hilang */}
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

            {/* ACTIVE */}
            <Link
              href="/setting"
              className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-[#d99d58] to-[#e7b56f] px-4 py-3 text-sm font-semibold text-[#3b2113] shadow-lg shadow-black/20"
            >
              <span className="text-xl">⚙️</span>
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
                  ⚙️
                </div>
                <p className="text-xs uppercase tracking-[3px] text-[#dca55d]">
                  Bradkery Bakery
                </p>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-4 font-serif text-4xl font-bold tracking-tight md:text-5xl"
              >
                Setting
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-2 max-w-xl text-sm leading-6 text-[#d6b997]"
              >
                Kelola pengaturan akun, notifikasi, dan preferensi
                kamu agar pengalaman di Bradkery semakin nyaman.
              </motion.p>
            </div>
          </motion.header>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="w-full space-y-5 p-6 md:p-10 lg:p-12 lg:pr-16"
          >

            {/* ================= PROFIL ================= */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-[#dca45d]/15 bg-gradient-to-br from-[#744622] to-[#633a1f] p-6 shadow-xl shadow-black/10 transition duration-300 hover:border-[#dca45d]/30 hover:shadow-2xl"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d99d58] text-2xl shadow-lg">
                    👤
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold">Profil</h2>
                    <p className="mt-1 text-sm text-[#d6b997]">
                      Atur informasi akun kamu.
                    </p>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl bg-[#5b301a] px-5 py-3 text-sm font-semibold text-[#fff8ed] transition duration-300 hover:bg-[#8a5428] hover:shadow-lg"
                >
                  Edit Profil
                </motion.button>

              </div>
            </motion.div>

            {/* ================= NOTIFIKASI ================= */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-[#dca45d]/15 bg-gradient-to-br from-[#744622] to-[#633a1f] p-6 shadow-xl shadow-black/10 transition duration-300 hover:border-[#dca45d]/30 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d99d58] text-2xl shadow-lg">
                  🔔
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold">Notifikasi</h2>
                  <p className="mt-1 text-sm text-[#d6b997]">
                    Atur pemberitahuan promo dan pesanan.
                  </p>
                </div>
              </div>

              {/* Notification Item */}
              <div className="mt-6 flex items-center justify-between gap-5 rounded-2xl border border-white/5 bg-black/10 p-4 transition hover:bg-black/15">

                <div className="flex items-center gap-3">
                  <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-[#d99d58]/10 sm:flex">
                    🏷️
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Notifikasi Promo</p>
                    <p className="mt-1 text-xs leading-5 text-[#c9a27d]">
                      Dapatkan informasi promo terbaru dari Bradkery.
                    </p>
                  </div>
                </div>

                {/* SWITCH — interaktif */}
                <button
                  onClick={() => setNotifPromo(!notifPromo)}
                  className={`relative h-7 w-12 shrink-0 rounded-full p-1 shadow-inner transition-colors duration-300 ${
                    notifPromo ? "bg-[#d99d58]" : "bg-white/10"
                  }`}
                >
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    animate={{ x: notifPromo ? 20 : 0 }}
                    className="h-5 w-5 rounded-full bg-white shadow-md"
                  />
                </button>

              </div>
            </motion.div>

            {/* ================= BAHASA ================= */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-[#dca45d]/15 bg-gradient-to-br from-[#744622] to-[#633a1f] p-6 shadow-xl shadow-black/10 transition duration-300 hover:border-[#dca45d]/30 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d99d58] text-2xl shadow-lg">
                  🌐
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold">Bahasa</h2>
                  <p className="mt-1 text-sm text-[#d6b997]">
                    Pilih bahasa yang digunakan.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#c9a27d]">
                  Bahasa aplikasi
                </label>

                <select className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#5b301a] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#d99d58] focus:ring-2 focus:ring-[#d99d58]/10">
                  <option>Bahasa Indonesia</option>
                  <option>English</option>
                </select>
              </div>
            </motion.div>

            {/* ================= LOGIN / GANTI AKUN ================= */}
            <motion.div variants={fadeUp}>
              <Link
                href="/login"
                className="group flex items-center justify-between rounded-2xl border border-[#dca45d]/10 bg-gradient-to-r from-[#9b5428] to-[#7f421f] p-6 font-bold shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#e1a15b]/30 hover:from-[#b96532] hover:to-[#954d25] hover:shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black/20 text-xl transition duration-300 group-hover:scale-105">
                    🚪
                  </div>
                  <div>
                    <p className="text-lg">Login / Ganti Akun</p>
                    <p className="mt-1 text-xs font-normal text-[#f1d5b5]">
                      Masuk menggunakan akun lain.
                    </p>
                  </div>
                </div>

                <span className="text-xl transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>

            {/* FOOTER TEXT */}
            <motion.div variants={fadeUp} className="pb-4 pt-2 text-center">
              <p className="text-xs text-[#8f684c]">
                Bradkery Bakery & Coffee • Made with love ♡
              </p>
            </motion.div>

          </motion.div>

        </section>

      </motion.main>
    </AnimatePresence>
  );
}