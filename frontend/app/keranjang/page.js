"use client";

import Link from "next/link";

export default function KeranjangPage() {
  return (
    <main className="min-h-screen bg-[#24170f] text-[#fff8ed]">

      <aside className="fixed left-0 top-0 hidden h-screen w-[250px] bg-[#5b301a] p-6 lg:block">

        <div className="mb-10 text-center text-4xl">
          🥐
          <h1 className="font-serif text-xl">
            BRADKERY
          </h1>
        </div>

        <nav className="space-y-2">

          <Link href="/home" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            🏠 Home
          </Link>

          <Link href="/menuMakanan" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            🍞 Menu makanan
          </Link>

          <Link href="/promo" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            🏷️ Promo / Discount
          </Link>

          <Link href="/keranjang" className="block rounded-xl bg-[#d99d58] px-4 py-3 font-semibold text-[#3b2113]">
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
            Shopping
          </p>

          <h1 className="font-serif text-4xl font-bold">
            Keranjang
          </h1>
        </header>

        <div className="p-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

            <div className="text-6xl">
              🛒
            </div>

            <h2 className="mt-5 font-serif text-2xl font-bold">
              Keranjang masih kosong
            </h2>

            <p className="mt-2 text-sm text-[#bda78d]">
              Yuk pilih makanan favoritmu.
            </p>

            <Link
              href="/menuMakanan"
              className="mt-6 inline-block rounded-full bg-[#e3a653] px-6 py-3 font-bold text-[#351c10]"
            >
              Lihat Menu
            </Link>

          </div>

        </div>

      </section>
    </main>
  );
}