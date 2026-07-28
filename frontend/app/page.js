"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Fraunces, Work_Sans, JetBrains_Mono } from "next/font/google";

/**
 * TUNGKU / BRADKERY — Bakehouse & Kopi
 *
 * Design notes (why this looks different from the previous version):
 * - "Tungku" is Indonesian for a traditional hearth/oven — the name is grounded
 *   in the actual craft instead of a generic "Bakery House" label.
 * - Flat color system, no gradient buttons / no gradient text. One accent
 *   color (crust red) used sparingly, one secondary (sage) for contrast.
 * - Real typography pairing: Fraunces (warm, characterful serif for display)
 *   + Work Sans (body) + JetBrains Mono (prices, tags, labels — feels like a
 *   bakery order ticket instead of tracked-out uppercase sans).
 * - Signature element: a "order ticket" card with a torn/perforated top edge,
 *   used for the promo price and testimonials — a real bakery artifact
 *   instead of a generic rounded white card.
 * - Logo is a drawn SVG mark (loaf + bread-scoring lines), not an emoji.
 * - HERO uses a full-bleed background photo with a layered dark gradient +
 *   subtle noise texture on top, so the copy stays readable while the photo
 *   fills the whole section.
 *
 * MOTION LAYER:
 * - Navbar does smooth scroll on click and scroll-spies the active section
 *   (active link gets an animated underline).
 * - Sections/cards fade + slide up into view on scroll (IntersectionObserver
 *   based `Reveal` wrapper), staggered per card.
 * - Small floating dots drift slowly in a few sections so the background
 *   never feels static/empty.
 * - Buttons/links get a tactile `active:scale-95` press animation.
 *
 * CTA SECTION (updated):
 * - Reworked from a single flat red block into a two-column moment: copy on
 *   the left, a live "order ticket" card on the right showing the current
 *   baking status — reusing the site's own ticket motif instead of a new
 *   generic card style.
 * - Background now has a warm charred-crust texture (diagonal grain +
 *   vignette) and a thin gold hairline frame, so it reads as a distinct,
 *   intentional panel rather than a plain color fill.
 * - Added a steam icon + a subtle animated steam wisp to tie the "kopi
 *   sudah panas" line to something visual.
 */

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

// ---------------------------------------------------------------------------
// Small SVG components — replace emoji so the brand reads as designed, not
// placeholder.
// ---------------------------------------------------------------------------

function Logo({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true">
      <circle cx="22" cy="22" r="21" fill="#B0492B" />
      <path
        d="M11 27c0-8.3 5-15 11-15s11 6.7 11 15"
        fill="#F4EAD9"
      />
      <path
        d="M13 27h18"
        stroke="#241811"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.5 20.5l3 4.5M22 18.5l3 5.5M27.5 20.5l2.2 4.5"
        stroke="#241811"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function IconWheat({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 21V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {[7, 9.5, 12, 14.5].map((y) => (
        <g key={y}>
          <path d={`M12 ${y}c-1.4-.2-2.6-1.1-3-2.4`} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          <path d={`M12 ${y}c1.4-.2 2.6-1.1 3-2.4`} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </g>
      ))}
      <circle cx="12" cy="4.5" r="1.6" fill="currentColor" />
    </svg>
  );
}

function IconOven({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3.5" y="6" width="17" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="14" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 14a2.5 2.5 0 0 1 5 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 9h.01M10 9h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconHeartHands({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 20s-7-4.4-9-9.1C1.7 7.6 3.4 5 6.2 5c1.7 0 3 .9 3.8 2.2C10.8 5.9 12.1 5 13.8 5c2.8 0 4.5 2.6 3.2 5.9C15 15.6 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPin({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconSteam({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 21c2-1.5 2-3 0-4.5s-2-3 0-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 21c2-1.5 2-3 0-4.5s-2-3 0-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 21c2-1.5 2-3 0-4.5s-2-3 0-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M4 21h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconStar({ filled = true, className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        d="M10 1.5l2.5 5.8 6.1.6-4.6 4.2 1.3 6.4L10 15.6l-5.3 2.9 1.3-6.4L1.4 7.9l6.1-.6L10 1.5Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

// A card with a torn / perforated top edge — the recurring "order ticket"
// motif used for the promo price and testimonials.
function TicketEdge({ color = "#F4EAD9", flip = false }) {
  return (
    <svg
      viewBox="0 0 200 10"
      preserveAspectRatio="none"
      className={`block h-[10px] w-full ${flip ? "rotate-180" : ""}`}
    >
      <path
        d="M0,10 L0,4 Q5,0 10,4 T20,4 T30,4 T40,4 T50,4 T60,4 T70,4 T80,4 T90,4 T100,4 T110,4 T120,4 T130,4 T140,4 T150,4 T160,4 T170,4 T180,4 T190,4 T200,4 L200,10 Z"
        fill={color}
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// MOTION HELPERS
// ---------------------------------------------------------------------------

// Fade + slide-up wrapper that triggers once an element scrolls into view.
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

// Small ambient dots that drift up/down slowly, purely decorative, so
// sections with a lot of empty space don't feel static.
function FloatingDots({ tone = "gold" }) {
  const color = tone === "gold" ? "#C89B4A" : "#F4EAD9";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <span
        className="absolute left-[6%] top-[18%] h-2 w-2 rounded-full opacity-40 animate-float-slow"
        style={{ background: color }}
      />
      <span
        className="absolute left-[88%] top-[30%] h-1.5 w-1.5 rounded-full opacity-30 animate-float"
        style={{ background: color, animationDelay: "0.8s" }}
      />
      <span
        className="absolute left-[75%] top-[75%] h-3 w-3 rounded-full opacity-25 animate-float-slow"
        style={{ background: color, animationDelay: "1.6s" }}
      />
      <span
        className="absolute left-[20%] top-[80%] h-2 w-2 rounded-full opacity-30 animate-float"
        style={{ background: color, animationDelay: "2.4s" }}
      />
      <span
        className="absolute left-[45%] top-[10%] h-1.5 w-1.5 rounded-full opacity-30 animate-float-slow"
        style={{ background: color, animationDelay: "1.2s" }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------

export default function LandingPage() {
  const products = [
    {
      name: "Roti Manis",
      tag: "KLASIK",
      description:
        "Adonan empuk isi cokelat atau keju, dipanggang tiap pagi dalam batch kecil.",
      image: "/images/roti3.jpg",
    },
    {
      name: "Croissant Mentega",
      tag: "SIGNATURE",
      description:
        "33 lipatan, mentega Prancis, renyah di luar dan berlapis-lapis di dalam.",
      image: "/images/roti1.jpg",
    },
    {
      name: "Roti Panggang Sourdough",
      tag: "BARU",
      description:
        "Fermentasi 18 jam, disajikan hangat dengan topping pilihan Anda.",
      image: "/images/roti2.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Maya Sari",
      text: "Croissant-nya masih hangat waktu saya sampai jam 7 pagi. Jarang ketemu yang seperti ini.",
      rating: 5,
    },
    {
      name: "Kevin Adrian",
      text: "Antriannya cepat walau pagi ramai. Sourdough toast-nya jadi menu tetap saya.",
      rating: 5,
    },
    {
      name: "Budi Nugroho",
      text: "Roti manis isi cokelatnya pas — nggak terlalu manis, cocok buat sarapan tiap hari.",
      rating: 5,
    },
  ];

  const locations = [
    "Jakarta", "Jawa Barat", "Jawa Tengah", "Jawa Timur",
    "Bali & Lombok", "Medan", "Sulawesi", "Madura",
  ];

  const navLinks = [
    ["Home", "#home"],
    ["Produk", "#produk"],
    ["Tentang", "#tentang"],
    ["Testimoni", "#testimoni"],
    ["Lokasi", "#lokasi"],
  ];

  // --------------------------------------------------------------------
  // Scroll-spy: track which section is currently in view so the nav link
  // can highlight itself with an animated underline.
  // --------------------------------------------------------------------
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const ids = navLinks.map(([, href]) => href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Smooth scroll on nav / in-page anchor clicks.
  function handleAnchorClick(e, href) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-[#F4EAD9] text-[#241811]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Global keyframes for the ambient motion layer */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(6px);
          }
        }
        @keyframes steamRise {
          0% {
            transform: translateY(0) scaleX(1);
            opacity: 0;
          }
          15% {
            opacity: 0.5;
          }
          85% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-38px) scaleX(1.4);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 9s ease-in-out infinite;
        }
        .animate-steam {
          animation: steamRise 3.2s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-[#C89B4A]/30 bg-[#241811]">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 md:px-10">
          <Link
            href="/landingPage"
            className="group flex items-center gap-3"
            onClick={(e) => handleAnchorClick(e, "#home")}
          >
            <Logo className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
            <div className="leading-tight text-[#F4EAD9]">
              <p
                className="text-lg font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Bradkery
              </p>
              <p className="text-[10px] uppercase tracking-[3px] text-[#C89B4A]">
                roti &amp; Kopi
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map(([label, href]) => {
              const isActive = activeSection === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleAnchorClick(e, href)}
                  className={`group relative py-1 text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-[#C89B4A]"
                      : "text-[#E4D6BC] hover:text-[#C89B4A]"
                  }`}
                >
                  {label}
                  <span
                    className={`pointer-events-none absolute -bottom-0.5 left-0 h-[2px] bg-[#C89B4A] transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-sm bg-[#B0492B] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#F4EAD9] transition-all duration-200 hover:bg-[#963c22] active:scale-95"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="hidden rounded-sm border border-[#C89B4A]/60 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#C89B4A] transition-all duration-200 hover:border-[#C89B4A] hover:bg-[#C89B4A]/10 active:scale-95 sm:block"
            >
              Daftar
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO — full-bleed background ================= */}
      <section id="home" className="relative overflow-hidden bg-[#241811]">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/roti6.jpg"
            alt="Roti segar Tungku Bakehouse"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay gradasi supaya teks tetap kebaca */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#241811]/95 via-[#241811]/70 to-[#241811]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241811]/60 via-transparent to-[#241811]/40" />
          {/* Tekstur noise/grain halus */}
          <div
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          {/* Ambient floating dots so the hero never feels static */}
          <FloatingDots tone="gold" />
        </div>

        {/* Text content — di atas background full */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[4px] text-[#C89B4A]">
              Dipanggang sejak subuh
            </p>

            <h1
              className="mt-5 text-5xl font-medium leading-[1.05] text-[#F4EAD9] md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Roti hangat,
              <br />
              kopi <em className="italic text-[#B0492B]">pekat</em>,
              <br />
              pagi yang tenang.
            </h1>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-[#CBB89A]">
              Tungku memanggang dalam batch kecil setiap pagi — bukan stok
              semalam yang dihangatkan ulang. Datang sebelum jam 9 untuk
              croissant yang masih renyah dari oven.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#produk"
                onClick={(e) => handleAnchorClick(e, "#produk")}
                className="rounded-sm bg-[#B0492B] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#F4EAD9] transition-all duration-200 hover:bg-[#963c22] active:scale-95"
              >
                Lihat Produk
              </a>
              <a
                href="#lokasi"
                onClick={(e) => handleAnchorClick(e, "#lokasi")}
                className="text-sm font-semibold text-[#F4EAD9] underline decoration-[#C89B4A] decoration-2 underline-offset-4 transition hover:text-[#C89B4A] active:scale-95"
              >
                Cari outlet terdekat →
              </a>
            </div>

            <p
              className="mt-14 text-xs uppercase tracking-[3px] text-[#8A7660]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Buka 06.00 — 20.00 · Setiap hari
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= PROMO — ticket card ================= */}
      <section className="bg-[#F4EAD9] px-5 py-14 md:px-10">
        <Reveal
          as="div"
          className="mx-auto grid max-w-5xl overflow-hidden rounded-md border border-[#241811]/10 bg-white shadow-sm md:grid-cols-[1.1fr_1fr]"
        >
          <div className="relative min-h-[240px] bg-[#E6CCA3]">
            <Image
              src="/images/roti5.jpg"
              alt="Promo mini pastry"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <TicketEdge color="#F4EAD9" />
            <div className="flex flex-1 flex-col justify-center bg-[#FBF6EC] px-8 py-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#B0492B]">
                Promo Minggu Ini
              </p>
              <h2
                className="mt-2 text-3xl font-semibold text-[#241811] md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                3 Mini Pastry
              </h2>
              <p className="mt-1 text-sm text-[#6B5A48]">Isi bebas pilih</p>

              <div
                className="my-4 text-5xl font-semibold text-[#241811]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Rp 20.000
              </div>

              <p
                className="text-[11px] uppercase tracking-[2px] text-[#8A7660]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Berlaku s.d. 15 Januari · selagi stok ada
              </p>

              <button className="mx-auto mt-6 rounded-sm bg-[#B0492B] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#F4EAD9] transition-all duration-200 hover:bg-[#963c22] active:scale-95">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= TENTANG ================= */}
      <section id="tentang" className="relative overflow-hidden bg-[#241811] px-5 py-20 md:px-10">
        <FloatingDots tone="gold" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="mb-14 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#C89B4A]">
              Kenapa Tungku
            </p>
            <h2
              className="mt-3 text-4xl font-medium text-[#F4EAD9] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dibuat dengan cara lama,
              <br />
              disajikan hari ini.
            </h2>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-md bg-[#3D2A1B] md:grid-cols-3">
            {[
              {
                icon: IconOven,
                title: "Dipanggang Setiap Pagi",
                text: "Tidak ada stok semalam. Setiap batch dipanggang sesuai jadwal jam toko buka.",
              },
              {
                icon: IconWheat,
                title: "Bahan yang Jelas Asalnya",
                text: "Tepung, mentega, dan cokelat dari pemasok tetap yang kami kunjungi sendiri.",
              },
              {
                icon: IconHeartHands,
                title: "Dibuat Tangan, Bukan Mesin",
                text: "Pelipatan croissant dan pembentukan roti masih dikerjakan manual oleh baker kami.",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 120} className="bg-[#241811] p-8 transition-colors duration-300 hover:bg-[#2c1e13]">
                <card.icon className="h-7 w-7 text-[#C89B4A] transition-transform duration-300 hover:-translate-y-1" />
                <h3 className="mt-5 text-lg font-semibold text-[#F4EAD9]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#B7A386]">
                  {card.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUK ================= */}
      <section id="produk" className="bg-[#F4EAD9] px-5 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#B0492B]">
                Menu Pilihan
              </p>
              <h2
                className="mt-3 text-4xl font-medium text-[#241811] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Produk Favorit
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#6B5A48]">
              Tiga menu yang paling sering habis sebelum jam makan siang.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={index}
                delay={index * 120}
                className="group overflow-hidden rounded-md border border-[#241811]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#241811]/25 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden bg-[#E6CCA3]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-3 top-3 rounded-sm bg-[#241811] px-2 py-1 text-[10px] font-medium uppercase tracking-[2px] text-[#F4EAD9]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {product.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#241811]">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B5A48]">
                    {product.description}
                  </p>
                  <button className="mt-4 text-sm font-semibold text-[#B0492B] transition-all duration-200 hover:text-[#241811] active:scale-95">
                    Lihat Detail →
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA — "Kopi sudah panas" ================= */}
      {/*
        Redesigned signature moment: instead of a flat red block, this is a
        two-panel "counter" — copy on the left, a live order-ticket card on
        the right that borrows the site's own perforated-ticket motif. The
        background gets a charred-crust texture + vignette instead of a
        plain gradient, and a thin gold hairline frames the whole panel so
        it reads as one deliberate object sitting between the dark testimoni
        section and the cream sections around it.
      */}
      <section className="relative overflow-hidden bg-[#7A331D] px-5 py-20 md:px-10">
        {/* Charred-crust texture: diagonal grain + radial vignette, no flat gradient fill */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(36,24,17,0.16) 0px, rgba(36,24,17,0.16) 2px, transparent 2px, transparent 14px)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 15% 15%, rgba(176,73,43,0.55) 0%, rgba(122,51,29,0) 55%), radial-gradient(90% 70% at 100% 100%, rgba(36,24,17,0.55) 0%, rgba(122,51,29,0) 60%)",
          }}
        />
        <FloatingDots tone="cream" />

        {/* Hairline frame around the whole CTA panel */}
        <div className="relative mx-auto max-w-6xl rounded-md border border-[#C89B4A]/40 p-8 md:p-12">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            {/* Copy column */}
            <Reveal>
              <div className="flex items-center gap-2 text-[#F4D9C4]">
                <IconSteam className="h-5 w-5" />
                <p className="text-xs font-semibold uppercase tracking-[3px]">
                  Tungku Bakehouse
                </p>
              </div>

              <h2
                className="mt-4 text-4xl font-medium leading-[1.08] text-[#F4EAD9] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Kopi sudah panas,
                <br />
                roti baru keluar <em className="italic text-[#F0C68C]">oven</em>.
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-7 text-[#E9CBB0]">
                Masuk untuk cek stok hari ini di outlet terdekat sebelum
                habis — setiap batch baru diumumkan lewat akun Anda.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/login"
                  className="rounded-sm bg-[#241811] px-9 py-3 text-sm font-semibold uppercase tracking-wide text-[#F4EAD9] transition-all duration-200 hover:bg-[#170f09] active:scale-95"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-sm border border-[#F4EAD9]/50 px-9 py-3 text-sm font-semibold uppercase tracking-wide text-[#F4EAD9] transition-all duration-200 hover:border-[#F4EAD9] hover:bg-[#F4EAD9]/10 active:scale-95"
                >
                  Buat Akun
                </Link>
              </div>
            </Reveal>

            {/* Live order-ticket card */}
            <Reveal delay={150} className="justify-self-center md:justify-self-end">
              <div className="w-full max-w-[300px] -rotate-2 overflow-hidden rounded-sm shadow-2xl shadow-black/40 transition-transform duration-300 hover:rotate-0">
                <TicketEdge color="#FBF6EC" />
                <div className="bg-[#FBF6EC] px-6 py-6">
                  <div className="flex items-center justify-between border-b border-dashed border-[#241811]/20 pb-3">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[2px] text-[#8A7660]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Status Oven
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-[#B0492B]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B0492B] animate-float" />
                      Live
                    </span>
                  </div>

                  <div className="mt-4 space-y-3" style={{ fontFamily: "var(--font-mono)" }}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#4A3B2C]">Croissant Mentega</span>
                      <span className="text-[#B0492B]">Baru keluar</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#4A3B2C]">Kopi Susu Gula Aren</span>
                      <span className="text-[#8A7660]">Siap seduh</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#4A3B2C]">Sourdough Toast</span>
                      <span className="text-[#8A7660]">6 tersisa</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-dashed border-[#241811]/20 pt-3">
                    <span className="text-[10px] uppercase tracking-[2px] text-[#8A7660]">
                      Diperbarui
                    </span>
                    <span
                      className="text-xs font-semibold text-[#241811]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Baru saja
                    </span>
                  </div>
                </div>
                <TicketEdge color="#FBF6EC" flip />
              </div>

              {/* Animated steam wisps rising from the ticket */}
              <div className="pointer-events-none relative mx-auto -mt-2 h-10 w-24">
                <span className="absolute left-3 bottom-0 h-8 w-2 rounded-full bg-[#F4EAD9]/50 blur-[3px] animate-steam" />
                <span
                  className="absolute left-11 bottom-0 h-8 w-2 rounded-full bg-[#F4EAD9]/50 blur-[3px] animate-steam"
                  style={{ animationDelay: "1.1s" }}
                />
                <span
                  className="absolute left-[74px] bottom-0 h-8 w-2 rounded-full bg-[#F4EAD9]/50 blur-[3px] animate-steam"
                  style={{ animationDelay: "2.1s" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONI — ticket cards ================= */}
      <section id="testimoni" className="bg-[#3D2A1B] px-5 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#C89B4A]">
              Kata Pelanggan
            </p>
            <h2
              className="mt-3 text-4xl font-medium text-[#F4EAD9] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Testimoni Asli
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal
                key={index}
                delay={index * 120}
                className="overflow-hidden rounded-md transition-transform duration-300 hover:-translate-y-1"
              >
                <TicketEdge color="#FBF6EC" />
                <div className="bg-[#FBF6EC] p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[#241811]">
                      {item.name}
                    </h3>
                    <div className="flex gap-0.5 text-[#B0492B]">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <IconStar key={i} className="h-3.5 w-3.5" />
                      ))}
                    </div>
                  </div>
                  <p
                    className="mt-4 text-sm leading-6 text-[#4A3B2C]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    “{item.text}”
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOKASI ================= */}
      <section id="lokasi" className="relative overflow-hidden bg-[#241811] px-5 py-20 md:px-10">
        <FloatingDots tone="gold" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-14 md:grid-cols-[0.8fr_1fr]">
            <Reveal className="flex justify-center">
              <div className="flex h-64 w-64 items-center justify-center rounded-full border border-[#C89B4A]/40 transition-transform duration-300 hover:scale-105">
                <Logo className="h-28 w-28 animate-float-slow" />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#C89B4A]">
                Temukan Kami
              </p>
              <h2
                className="mt-3 text-4xl font-medium leading-tight text-[#F4EAD9] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Outlet di 8 wilayah
              </h2>
              <p className="mt-5 max-w-md leading-7 text-[#B7A386]">
                Setiap outlet punya oven sendiri — resep sama, dipanggang
                lokal supaya tetap sampai hangat ke tangan Anda.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {locations.map((location, i) => (
                  <div
                    key={location}
                    className="flex items-center gap-2 rounded-sm border border-[#C89B4A]/25 px-4 py-3 text-sm text-[#E4D6BC] transition-all duration-200 hover:border-[#C89B4A] hover:bg-[#C89B4A]/5"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <IconPin className="h-4 w-4 shrink-0 text-[#C89B4A]" />
                    {location}
                  </div>
                ))}
              </div>

              <button className="mt-7 rounded-sm bg-[#B0492B] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#F4EAD9] transition-all duration-200 hover:bg-[#963c22] active:scale-95">
                Lihat Semua Lokasi
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#C89B4A]/20 bg-[#180F09] px-5 pb-8 pt-14 text-white md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <Logo className="h-10 w-10" />
                <div>
                  <p
                    className="font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Tungku
                  </p>
                  <p className="text-[10px] uppercase tracking-[2px] text-[#C89B4A]">
                    Bakehouse &amp; Kopi
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-6 text-[#8A7660]">
                Roti dan kopi yang dipanggang serta diseduh setiap hari,
                tanpa stok semalam.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[2px] text-[#C89B4A]">
                Menu
              </h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[#B7A386]">
                <a
                  href="#home"
                  onClick={(e) => handleAnchorClick(e, "#home")}
                  className="w-fit transition-colors hover:text-white"
                >
                  Home
                </a>
                <a
                  href="#produk"
                  onClick={(e) => handleAnchorClick(e, "#produk")}
                  className="w-fit transition-colors hover:text-white"
                >
                  Produk
                </a>
                <a
                  href="#testimoni"
                  onClick={(e) => handleAnchorClick(e, "#testimoni")}
                  className="w-fit transition-colors hover:text-white"
                >
                  Testimoni
                </a>
                <a
                  href="#lokasi"
                  onClick={(e) => handleAnchorClick(e, "#lokasi")}
                  className="w-fit transition-colors hover:text-white"
                >
                  Lokasi
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[2px] text-[#C89B4A]">
                Ikuti Kami
              </h3>
              <div className="mt-4 flex gap-3">
                {["IG", "FB", "TT"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#C89B4A]/25 text-xs font-semibold text-[#E4D6BC] transition-all duration-200 hover:border-[#C89B4A] hover:text-[#C89B4A] active:scale-90"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-[#6B5A48]">
            © 2026 Tungku Bakehouse. Semua hak dilindungi.
          </div>
        </div>
      </footer>
    </main>
  );
}