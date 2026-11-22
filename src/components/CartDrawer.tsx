import { useEffect, useState } from "react";
import { FREE_SHIPPING_MIN, SHIPPING_FEE, WA_NUMBER, products, rupiah } from "../data";
import { CloseIcon, MinusIcon, PlusIcon, WhatsAppIcon, BagIcon } from "./Icons";
import { cn } from "../utils/cn";

interface Props {
  open: boolean;
  onClose: () => void;
  cart: Record<string, number>;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function CartDrawer({ open, onClose, cart, onAdd, onRemove, onClear }: Props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [err, setErr] = useState(false);

  const items = products.filter((p) => cart[p.id]).map((p) => ({ ...p, qty: cart[p.id] }));
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_MIN ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_MIN) * 100);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const checkout = () => {
    if (!name.trim() || !address.trim()) {
      setErr(true);
      return;
    }
    const lines = items.map((i) => `• ${i.name} x${i.qty} = ${rupiah(i.price * i.qty)}`).join("\n");
    const msg =
      `Halo MakJajan! Saya mau pesan:\n\n${lines}\n\n` +
      `Subtotal: ${rupiah(subtotal)}\nOngkir: ${shipping ? rupiah(shipping) : "Gratis"}\n*Total: ${rupiah(total)}*\n\n` +
      `Nama: ${name}\nAlamat: ${address}` +
      (note.trim() ? `\nCatatan: ${note}` : "");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className={cn("fixed inset-0 z-50", !open && "pointer-events-none")} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <header className="flex items-center justify-between border-b border-black/10 px-6 py-5">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight">Keranjang</h2>
            <p className="text-xs text-neutral-500">{items.reduce((s, i) => s + i.qty, 0)} item dipilih</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-black hover:text-white"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
              <BagIcon className="h-9 w-9 text-neutral-400" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">Keranjangmu masih kosong</p>
              <p className="mt-1 text-sm text-neutral-500">Yuk pilih jajanan kampung favoritmu dulu.</p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform active:scale-95"
            >
              Lihat Menu
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
              <div className="rounded-2xl bg-neutral-100 p-4">
                <p className="text-xs font-medium">
                  {shipping === 0
                    ? "🎉 Selamat! Kamu dapat gratis ongkir"
                    : `Belanja ${rupiah(FREE_SHIPPING_MIN - subtotal)} lagi untuk gratis ongkir`}
                </p>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-black/10">
                  <div
                    className="h-full rounded-full bg-black transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <ul className="space-y-4">
                {items.map((i) => (
                  <li key={i.id} className="flex animate-[fadeIn_.4s_ease] items-center gap-4">
                    <img src={i.img} alt={i.name} className="h-16 w-16 rounded-2xl object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-display font-semibold">{i.name}</p>
                      <p className="text-sm text-neutral-500">{rupiah(i.price)}</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full border border-black/10 p-1">
                      <button
                        onClick={() => onRemove(i.id)}
                        aria-label="Kurangi"
                        className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-neutral-100"
                      >
                        <MinusIcon className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-5 text-center text-sm font-semibold tabular-nums">{i.qty}</span>
                      <button
                        onClick={() => onAdd(i.id)}
                        aria-label="Tambah"
                        className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-neutral-100"
                      >
                        <PlusIcon className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <button onClick={onClear} className="text-xs text-neutral-400 underline-offset-4 hover:text-black hover:underline">
                Kosongkan keranjang
              </button>

              <div className="space-y-3 border-t border-black/10 pt-5">
                <p className="font-display text-sm font-semibold">Data pengiriman</p>
                {[
                  { v: name, s: setName, p: "Nama lengkap", bad: err && !name.trim() },
                  { v: address, s: setAddress, p: "Alamat lengkap", bad: err && !address.trim() },
                ].map((f) => (
                  <input
                    key={f.p}
                    value={f.v}
                    onChange={(e) => f.s(e.target.value)}
                    placeholder={f.p}
                    className={cn(
                      "h-12 w-full rounded-2xl border bg-neutral-50 px-4 text-sm outline-none transition-all focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5",
                      f.bad ? "border-black ring-4 ring-black/10" : "border-black/10",
                    )}
                  />
                ))}
                {err && (!name.trim() || !address.trim()) && (
                  <p className="text-xs font-medium">Mohon isi nama dan alamat dulu ya.</p>
                )}
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Catatan (opsional) — mis. cabe dipisah"
                  rows={2}
                  className="w-full resize-none rounded-2xl border border-black/10 bg-neutral-50 p-4 text-sm outline-none transition-all focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5"
                />
              </div>
            </div>

            <footer className="space-y-3 border-t border-black/10 bg-white px-6 py-5">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-neutral-500">
                  <span>Subtotal</span>
                  <span>{rupiah(subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>Ongkir</span>
                  <span>{shipping ? rupiah(shipping) : "Gratis"}</span>
                </div>
                <div className="flex justify-between pt-1 font-display text-lg font-bold">
                  <span>Total</span>
                  <span>{rupiah(total)}</span>
                </div>
              </div>
              <button
                onClick={checkout}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-black font-semibold text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-5 w-5" /> Pesan via WhatsApp
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
