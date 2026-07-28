"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Cek email
    if (!email || !email.includes("@")) {
      setError("Masukkan email yang valid.");
      return;
    }

    // Cek password
    if (!password) {
      setError("Password wajib diisi.");
      return;
    }

    // Simpan data login di browser
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: email,
        isLoggedIn: true,
      })
    );

    // Pindah ke home
    router.push("/home");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#241811] px-5 py-12">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <div className="animate-kenBurns absolute inset-0">
          <Image
            src="/images/roti6.jpg"
            alt="Tungku Bakehouse"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="animate-fadeIn absolute inset-0 bg-gradient-to-b from-[#241811]/90 via-[#241811]/80 to-[#241811]/95" />
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Login card */}
      <div className="animate-cardIn relative z-10 flex min-h-[560px] w-full max-w-sm flex-col justify-center rounded-md border border-[#C89B4A]/20 bg-[#F4EAD9] p-8 shadow-2xl">
        <div>
          <p className="stagger-item text-xs font-semibold uppercase tracking-[3px] text-[#B0492B]" style={{ animationDelay: "0.15s" }}>
            Selamat datang
          </p>
          <h1 className="stagger-item mt-2 text-2xl font-semibold text-[#241811]" style={{ animationDelay: "0.25s" }}>
            Masuk
          </h1>
          <p className="stagger-item mt-1 text-sm text-[#6B5A48]" style={{ animationDelay: "0.35s" }}>
            Login untuk cek stok outlet hari ini.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="stagger-item" style={{ animationDelay: "0.45s" }}>
              <label className="text-xs font-semibold uppercase tracking-wide text-[#6B5A48]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-sm border border-[#241811]/20 bg-white px-4 py-2 text-sm text-[#241811] transition-all duration-200 focus:border-[#B0492B] focus:shadow-[0_0_0_3px_rgba(176,73,43,0.15)] focus:outline-none"
                placeholder="nama@email.com"
              />
            </div>

            <div className="stagger-item" style={{ animationDelay: "0.55s" }}>
              <label className="text-xs font-semibold uppercase tracking-wide text-[#6B5A48]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-sm border border-[#241811]/20 bg-white px-4 py-2 text-sm text-[#241811] transition-all duration-200 focus:border-[#B0492B] focus:shadow-[0_0_0_3px_rgba(176,73,43,0.15)] focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="animate-shake text-sm text-[#B0492B]">{error}</p>
            )}

            <button
              type="submit"
              className="stagger-item mt-2 rounded-sm bg-[#B0492B] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#F4EAD9] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#963c22] hover:shadow-lg hover:shadow-[#B0492B]/30 active:scale-95"
              style={{ animationDelay: "0.65s" }}
            >
              Login
            </button>
          </form>

          <p className="stagger-item mt-6 text-center text-sm text-[#6B5A48]" style={{ animationDelay: "0.75s" }}>
            Belum punya akun?{" "}
            <Link href="/register" className="font-semibold text-[#B0492B] hover:underline">
              Daftar di sini
            </Link>
          </p>

          <Link
            href="/"
            className="stagger-item mt-4 block text-center text-xs text-[#8A7660] transition-colors hover:text-[#B0492B]"
            style={{ animationDelay: "0.8s" }}
          >
            ← Kembali ke Home
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes kenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
        }
        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes staggerFade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animate-kenBurns {
          animation: kenBurns 12s ease-out forwards;
        }
        .animate-cardIn {
          animation: cardIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
        .stagger-item {
          opacity: 0;
          animation: staggerFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </main>
  );
}