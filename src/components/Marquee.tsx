const items = [
  "Risol Ragout",
  "Pastel Goreng",
  "Klepon",
  "Lemper Ayam",
  "Onde-onde",
  "Dadar Gulung",
  "Tahu Isi",
  "Kue Lumpur",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden py-8" aria-hidden>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...row, ...row].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-3xl font-bold tracking-tight text-neutral-300 sm:text-5xl"
          >
            {t}
            <span className="text-black">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
