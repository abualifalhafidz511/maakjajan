import Reveal from "./Reveal";
import { ArrowIcon, ClockIcon, FlameIcon, HeartIcon, LeafIcon, StarIcon, TruckIcon } from "./Icons";
import dadar from "../assets/dadar.jpg";

const features = [
  { icon: FlameIcon, t: "Segar Tiap Pagi", d: "Digoreng & dikukus setelah pesanan masuk, bukan stok kemarin." },
  { icon: LeafIcon, t: "Bahan Alami", d: "Pandan asli, santan segar, tanpa pengawet dan pewarna buatan." },
  { icon: HeartIcon, t: "Resep Warisan", d: "Racikan Emak yang diturunkan, rasa kampung yang bikin kangen." },
  { icon: TruckIcon, t: "Antar Cepat", d: "Dikemas hangat dan tiba 30–45 menit. Gratis ongkir di atas Rp50rb." },
];

export function Features() {
  return (
    <section id="kenapa" className="mx-auto max-w-6xl scroll-mt-16 px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="grid gap-5 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-[2rem] bg-black p-8 text-white">
            <img src={dadar} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-end">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Kenapa MakJajan</p>
              <h2 className="font-display text-4xl font-bold leading-[1] tracking-tighter sm:text-5xl">
                Sederhana,
                <br />
                tapi bikin
                <br />
                nagih.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={i * 90}>
              <div className="group h-full rounded-[2rem] border border-black/10 bg-neutral-50 p-7 transition-all duration-500 hover:bg-black hover:text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white transition-colors duration-500 group-hover:bg-white group-hover:text-black">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 transition-colors duration-500 group-hover:text-white/60">
                  {f.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Pilih Jajanan", d: "Jelajahi menu dan tambahkan favoritmu ke keranjang." },
  { n: "02", t: "Isi Alamat", d: "Masukkan nama dan alamat pengantaran di keranjang." },
  { n: "03", t: "Kirim via WhatsApp", d: "Pesanan terkirim otomatis ke admin kami, tinggal konfirmasi." },
  { n: "04", t: "Tunggu & Nikmati", d: "Jajanan hangat tiba di depan pintu dalam 30–45 menit." },
];

export function Steps() {
  return (
    <section id="cara" className="scroll-mt-16 bg-neutral-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Cara Pesan</p>
          <h2 className="font-display text-4xl font-bold leading-[1] tracking-tighter sm:text-6xl">
            Empat langkah,
            <br />
            <span className="text-white/40">jajan kelar.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="bg-neutral-950">
              <div className="group h-full p-8 transition-colors duration-500 hover:bg-white hover:text-black">
                <p className="font-display text-6xl font-bold text-white/15 transition-colors duration-500 group-hover:text-black/15">
                  {s.n}
                </p>
                <h3 className="mt-16 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-black/60">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { n: "Dewi Anggraini", c: "Bandung", t: "Risolnya juara! Kulitnya renyah, isinya penuh dan creamy. Sudah langganan tiap minggu buat arisan." },
  { n: "Budi Santoso", c: "Jakarta", t: "Kleponnya persis buatan nenek di kampung. Meletus manis di mulut. Pengirimannya juga cepat banget." },
  { n: "Rina Maharani", c: "Bekasi", t: "Pesan 3 box untuk acara kantor, semua ludes dalam 10 menit. Packaging rapi dan masih hangat." },
];

export function Reviews() {
  return (
    <section id="ulasan" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">Kata Mereka</p>
        <h2 className="font-display text-4xl font-bold leading-[1] tracking-tighter sm:text-6xl">
          Dicintai
          <br />
          ribuan perut.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.n} delay={i * 100}>
            <figure className="flex h-full flex-col rounded-[2rem] border border-black/10 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <StarIcon key={k} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-neutral-700">“{r.t}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black font-display text-sm font-bold text-white">
                  {r.n[0]}
                </span>
                <div>
                  <p className="text-sm font-semibold">{r.n}</p>
                  <p className="text-xs text-neutral-400">{r.c}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">
      <Reveal>
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-black px-6 py-20 text-center text-white sm:rounded-[2.5rem] sm:py-28">
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-white/10 blur-[100px]" />
          <div className="relative">
            <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs text-white/70">
              <ClockIcon className="h-4 w-4" /> Buka setiap hari 06.00 – 20.00
            </span>
            <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tighter">
              Lapar? Jangan
              <br />
              <span className="text-white/40">ditunda lagi.</span>
            </h2>
            <a
              href="#menu"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:gap-4 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Mulai Pesan <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
        <div className="max-w-xs">
          <p className="font-display text-2xl font-bold tracking-tight">
            Mak<span className="text-neutral-400">Jajan</span>.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Jajanan khas kampung, dibuat dengan cinta dan diantar dengan cepat.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 text-sm">
          <div className="space-y-2.5">
            <p className="font-display font-semibold">Jelajahi</p>
            {[
              ["#menu", "Menu"],
              ["#kenapa", "Kenapa Kami"],
              ["#cara", "Cara Pesan"],
              ["#ulasan", "Ulasan"],
            ].map(([h, l]) => (
              <a key={h} href={h} className="block text-neutral-500 transition-colors hover:text-black">
                {l}
              </a>
            ))}
          </div>
          <div className="space-y-2.5 text-neutral-500">
            <p className="font-display font-semibold text-black">Kontak</p>
            <p>0812-3456-7890</p>
            <p>halo@makjajan.id</p>
            <p>Jl. Kenanga No. 12, Bandung</p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-between gap-2 border-t border-black/10 pt-6 text-xs text-neutral-400 sm:flex-row">
        <p>© {new Date().getFullYear()} MakJajan. Semua hak dilindungi.</p>
        <p>Dibuat dengan ♥ untuk pecinta jajanan kampung.</p>
      </div>
    </footer>
  );
}
