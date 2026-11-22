import { useMemo, useState } from "react";
import { categories, products, rupiah, type Product } from "../data";
import { MinusIcon, PlusIcon, SearchIcon, StarIcon } from "./Icons";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

interface Props {
  cart: Record<string, number>;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
}

function Card({ p, qty, onAdd, onRemove }: { p: Product; qty: number; onAdd: () => void; onRemove: () => void }) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-black/10 bg-white p-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-black/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-100">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {p.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-[11px] font-semibold text-white">
            {p.tag}
          </span>
        )}
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">
          <StarIcon className="h-3 w-3" /> {p.rating}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold leading-tight tracking-tight">{p.name}</h3>
          <span className="shrink-0 text-[11px] text-neutral-400">{p.sold} terjual</span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">{p.desc}</p>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="font-display text-xl font-bold">{rupiah(p.price)}</p>
            <p className="text-[11px] text-neutral-400">per {p.unit}</p>
          </div>

          {qty === 0 ? (
            <button
              onClick={onAdd}
              className="flex h-11 items-center gap-1.5 rounded-full bg-black pl-4 pr-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg active:scale-95"
            >
              <PlusIcon className="h-4 w-4" /> Tambah
            </button>
          ) : (
            <div className="flex h-11 items-center gap-1 rounded-full bg-black p-1 text-white">
              <button
                onClick={onRemove}
                aria-label="Kurangi"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/20 active:scale-90"
              >
                <MinusIcon className="h-4 w-4" />
              </button>
              <span className="min-w-6 text-center text-sm font-semibold tabular-nums">{qty}</span>
              <button
                onClick={onAdd}
                aria-label="Tambah"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform active:scale-90"
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Menu({ cart, onAdd, onRemove }: Props) {
  const [cat, setCat] = useState<(typeof categories)[number]>("Semua");
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      products.filter(
        (p) =>
          (cat === "Semua" || p.category === cat) &&
          p.name.toLowerCase().includes(q.trim().toLowerCase()),
      ),
    [cat, q],
  );

  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">Menu Kami</p>
            <h2 className="font-display text-4xl font-bold leading-[1] tracking-tighter sm:text-6xl">
              Pilih jajanan
              <br />
              favoritmu.
            </h2>
          </div>
          <div className="relative w-full md:w-72">
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari jajanan…"
              className="h-12 w-full rounded-full border border-black/10 bg-neutral-50 pl-12 pr-4 text-sm outline-none transition-all focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5"
            />
          </div>
        </div>

        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                cat === c
                  ? "border-black bg-black text-white"
                  : "border-black/10 bg-white text-neutral-600 hover:border-black/40",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      {list.length === 0 ? (
        <div className="mt-16 rounded-3xl border border-dashed border-black/20 py-20 text-center">
          <p className="font-display text-xl font-semibold">Yah, jajanannya belum ada</p>
          <p className="mt-1 text-sm text-neutral-500">Coba kata kunci lain ya.</p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 80} className="h-full">
              <Card p={p} qty={cart[p.id] ?? 0} onAdd={() => onAdd(p.id)} onRemove={() => onRemove(p.id)} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
