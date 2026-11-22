import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Menu from "./components/Menu";
import CartDrawer from "./components/CartDrawer";
import { CTA, Features, Footer, Reviews, Steps } from "./components/Sections";

type Cart = Record<string, number>;

export default function App() {
  const [cart, setCart] = useState<Cart>(() => {
    try {
      return JSON.parse(localStorage.getItem("makjajan-cart") || "{}");
    } catch {
      return {};
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("makjajan-cart", JSON.stringify(cart));
    } catch {
      /* ignore */
    }
  }, [cart]);

  const add = useCallback((id: string) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 })), []);
  const remove = useCallback(
    (id: string) =>
      setCart((c) => {
        const next = { ...c };
        if ((next[id] ?? 0) <= 1) delete next[id];
        else next[id] -= 1;
        return next;
      }),
    [],
  );
  const clear = useCallback(() => setCart({}), []);
  const close = useCallback(() => setOpen(false), []);

  const count = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-neutral-950">
      <Navbar count={count} onCart={() => setOpen(true)} />
      <main>
        <Hero />
        <Marquee />
        <Menu cart={cart} onAdd={add} onRemove={remove} />
        <Features />
        <Steps />
        <Reviews />
        <CTA />
      </main>
      <Footer />
      <CartDrawer open={open} onClose={close} cart={cart} onAdd={add} onRemove={remove} onClear={clear} />
    </div>
  );
}
