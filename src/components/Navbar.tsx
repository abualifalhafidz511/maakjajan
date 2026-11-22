import { useEffect, useState } from "react";
import { BagIcon, CloseIcon, MenuIcon } from "./Icons";
import { cn } from "../utils/cn";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#kenapa", label: "Kenapa Kami" },
  { href: "#cara", label: "Cara Pesan" },
  { href: "#ulasan", label: "Ulasan" },
];

export default function Navbar({
  count,
  onCart,
}: {
  count: number;
  onCart: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!count) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 400);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 pl-5 transition-all duration-500",
          scrolled
            ? "border-black/10 bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "border-white/15 bg-black/30 text-white backdrop-blur-md",
        )}
      >
        <a href="#top" className="font-display text-xl font-bold tracking-tight">
          Mak<span className={scrolled ? "text-neutral-400" : "text-white/50"}>Jajan</span>
          <span className="ml-0.5">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  scrolled ? "hover:bg-black/5" : "hover:bg-white/10",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onCart}
            aria-label="Buka keranjang"
            className={cn(
              "relative flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-300 hover:scale-[1.04] active:scale-95",
              scrolled ? "bg-black text-white" : "bg-white text-black",
            )}
          >
            <BagIcon className="h-5 w-5" />
            <span className="hidden sm:inline">Keranjang</span>
            <span
              className={cn(
                "flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[11px] font-bold",
                scrolled ? "bg-white text-black" : "bg-black text-white",
                bump && "animate-pop",
              )}
            >
              {count}
            </span>
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={cn(
          "absolute left-4 right-4 top-[72px] origin-top overflow-hidden rounded-3xl border border-black/10 bg-white text-black shadow-2xl transition-all duration-300 md:hidden",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="block border-b border-black/5 px-6 py-4 text-base font-medium last:border-0 hover:bg-black/5"
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
