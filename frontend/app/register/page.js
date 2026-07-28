"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Semua field wajib diisi.");
      return;
    }

    // TODO: ganti dengan call ke API/auth kamu (misal fetch ke /api/register)
    console.log("Daftar dengan:", { name, email, password });
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#241811] px-5 py-12">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/roti4.jpg"
          alt="Tungku Bakehouse"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#241811]/90 via-[#241811]/80 to-[#241811]/95" />
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Register card */}
      <div className="relative z-10 w-full max-w-sm rounded-md border border-[#C89B4A]/20 bg-[#F4EAD9] p-8 shadow-2xl">
        <p className="text-xs font-semibold uppercase tracking-[3px] text-[#B0492B]">
          Gabung sekarang
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-[#241811]">Daftar</h1>
        <p className="mt-1 text-sm text-[#6B5A48]">
          Buat akun untuk mulai pesan roti dan kopi favoritmu.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-[#6B5A48]">
              Nama
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-sm border border-[#241811]/20 bg-white px-4 py-2 text-sm text-[#241811] focus:border-[#B0492B] focus:outline-none"
              placeholder="Nama lengkap"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-[#6B5A48]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-sm border border-[#241811]/20 bg-white px-4 py-2 text-sm text-[#241811] focus:border-[#B0492B] focus:outline-none"
              placeholder="nama@email.com"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-[#6B5A48]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-sm border border-[#241811]/20 bg-white px-4 py-2 text-sm text-[#241811] focus:border-[#B0492B] focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-sm text-[#B0492B]">{error}</p>}

          <button
            type="submit"
            className="mt-2 rounded-sm bg-[#B0492B] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#F4EAD9] transition-all duration-200 hover:bg-[#963c22] active:scale-95"
          >
            Daftar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#6B5A48]">
          Sudah punya akun?{" "}
          <Link href="/login" className="font-semibold text-[#B0492B] hover:underline">
            Login di sini
          </Link>
        </p>

        <Link
          href="/landingPage"
          className="mt-4 block text-center text-xs text-[#8A7660] hover:text-[#B0492B]"
        >
          ← Kembali ke Home
        </Link>
      </div>
    </main>
  );
}