import hero from "../assets/hero.jpg";
import { ArrowIcon, StarIcon, ClockIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="p-3 pt-3 sm:p-4">
      <div className="relative mx-auto grid min-h-[calc(100svh-2rem)] max-w-[1400px] overflow-hidden rounded-[2rem] bg-neutral-950 text-white sm:rounded-[2.5rem] lg:grid-cols-2">
        {/* grain / glow */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-white/10 blur-[120px]" />

        <div className="relative z-10 flex flex-col justify-center px-6 pb-10 pt-32 sm:px-12 lg:px-16 lg:pb-16">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Dapur buka · Pesan sebelum 15.00 diantar hari ini
          </div>

          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.95] tracking-tighter">
            Jajanan
            <br />
            kampung,
            <br />
            <span className="text-white/40">rasa pulang.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
            Risol, pastel, klepon, lemper dan kawan-kawannya. Dibuat segar tiap pagi dengan resep
            Emak, diantar langsung sampai depan pintu.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:gap-4 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Pesan Sekarang
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="#cara"
              className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Cara Pesan
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              ["8+", "Varian jajanan"],
              ["12rb", "Pelanggan puas"],
              ["4.9", "Rating rata-rata"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-bold sm:text-3xl">{n}</dt>
                <dd className="mt-1 text-xs text-white/50">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[420px] lg:min-h-0">
          <img
            src={hero}
            alt="Aneka jajanan kampung MakJajan di atas piring putih"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent lg:from-neutral-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-transparent lg:hidden" />

          <div className="absolute bottom-6 left-6 animate-float rounded-2xl bg-white p-4 pr-6 text-black shadow-2xl sm:bottom-10 sm:left-10 lg:left-6">
            <div className="flex items-center gap-1 text-black">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-1.5 font-display text-sm font-semibold">“Risolnya juara!”</p>
            <p className="text-xs text-neutral-500">Dewi, Bandung</p>
          </div>

          <div className="absolute right-6 top-28 hidden items-center gap-3 rounded-2xl border border-white/15 bg-black/40 p-4 backdrop-blur-xl sm:flex lg:top-32">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
              <ClockIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-white/60">Estimasi tiba</p>
              <p className="font-display text-sm font-semibold">30 – 45 menit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
