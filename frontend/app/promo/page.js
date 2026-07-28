"use client";

import Image from "next/image";
import Link from "next/link";

export default function PromoPage() {
  return (
    <main className="min-h-screen bg-[#24170f] text-[#fff8ed]">

      <aside className="fixed left-0 top-0 hidden h-screen w-[250px] bg-[#5b301a] p-6 lg:block">

        <div className="mb-10 text-center">
          <div className="text-4xl">🥐</div>
          <h1 className="font-serif text-xl font-bold">BRADKERY</h1>
        </div>

        <nav className="space-y-2">
          <Link href="/home" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            🏠 Home
          </Link>

          <Link href="/menuMakanan" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            🍞 Menu makanan
          </Link>

          <Link href="/promo" className="block rounded-xl bg-[#d99d58] px-4 py-3 font-semibold text-[#3b2113]">
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

      <section className="lg:ml-[250px]">

        <header className="bg-[#3d2415] p-8">
          <p className="text-xs uppercase tracking-[3px] text-[#dca55d]">
            Special Offer
          </p>

          <h1 className="font-serif text-4xl font-bold">
            Promo & Discount
          </h1>
        </header>

        <div className="grid gap-6 p-8 md:grid-cols-2">

          <div className="overflow-hidden rounded-3xl bg-[#744622]">
            <div className="relative h-64">
              <Image
                src="/images/roti4.jpg"
                alt="Promo"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-[#e5ad62]">
                PROMO 01
              </p>

              <h2 className="mt-2 font-serif text-2xl font-bold">
                Paket Special
              </h2>

              <p className="mt-2 text-sm text-[#d6b997]">
                Nikmati paket spesial dengan harga lebih hemat.
              </p>

              <Link
                href="/menuMakanan"
                className="mt-5 inline-block rounded-full bg-[#e3a653] px-5 py-2 text-sm font-bold text-[#351c10]"
              >
                Lihat Menu
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#9b5428] to-[#542b17] p-8">

            <p className="text-sm text-[#f5c579]">
              SPECIAL TODAY
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold">
              Diskon 20%
            </h2>

            <p className="mt-4 text-[#e7cdb0]">
              Dapatkan potongan harga untuk produk pilihan hari ini.
            </p>

            <Link
              href="/menuMakanan"
              className="mt-8 inline-block rounded-full bg-[#e3a653] px-6 py-3 font-bold text-[#351c10]"
            >
              Order Sekarang
            </Link>

          </div>

        </div>

      </section>
    </main>
  );
}