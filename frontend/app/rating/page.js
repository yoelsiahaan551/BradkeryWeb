"use client";

import Link from "next/link";
import { useState } from "react";

export default function RatingPage() {

  const [rating, setRating] = useState(0);

  return (
    <main className="min-h-screen bg-[#24170f] text-[#fff8ed]">

      <aside className="fixed left-0 top-0 hidden h-screen w-[250px] bg-[#5b301a] p-6 lg:block">

        <div className="mb-10 text-center text-4xl">
          🥐
          <h1 className="font-serif text-xl">BRADKERY</h1>
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

          <Link href="/keranjang" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            🛒 Keranjang
          </Link>

          <Link href="/setting" className="block rounded-xl px-4 py-3 hover:bg-white/10">
            ⚙️ Setting
          </Link>

          <Link href="/rating" className="block rounded-xl bg-[#d99d58] px-4 py-3 font-semibold text-[#3b2113]">
            ⭐ Beri rating
          </Link>
        </nav>

      </aside>

      <section className="lg:ml-[250px]">

        <header className="bg-[#3d2415] p-8">
          <h1 className="font-serif text-4xl font-bold">
            Beri Rating
          </h1>
        </header>

        <div className="flex min-h-[500px] items-center justify-center p-8">

          <div className="w-full max-w-lg rounded-3xl bg-[#744622] p-8 text-center">

            <h2 className="font-serif text-2xl font-bold">
              Bagaimana pengalamanmu?
            </h2>

            <p className="mt-2 text-sm text-[#d6b997]">
              Berikan rating untuk pelayanan kami.
            </p>

            <div className="my-8 flex justify-center gap-3 text-4xl">

              {[1, 2, 3, 4, 5].map((number) => (

                <button
                  key={number}
                  onClick={() => setRating(number)}
                  className={
                    number <= rating
                      ? "text-[#ffd229]"
                      : "text-white/30"
                  }
                >
                  ★
                </button>

              ))}

            </div>

            <button
              onClick={() => alert(`Terima kasih! Rating kamu ${rating}/5`)}
              className="rounded-full bg-[#e3a653] px-7 py-3 font-bold text-[#351c10]"
            >
              Kirim Rating
            </button>

          </div>

        </div>

      </section>
    </main>
  );
}