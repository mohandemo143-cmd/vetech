export function PageHero({
  title,
  subtitle,
  image,
  eyebrow,
}) {
  return (
    <section className="relative -mt-[73px] h-[55vh] min-h-[420px] flex items-end overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* INDUSTRIAL OVERLAY */}
      <div className="absolute inset-0 industrial-gradient" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />

      {/* CONTENT */}
      <div className="container-x relative pb-16 text-white z-10">

        {eyebrow && (
          <div className="text-brand-red font-semibold tracking-[0.2em] text-xs uppercase mb-4">
            {eyebrow}
          </div>
        )}

        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-[1.05]">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 text-lg text-white/75 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

      </div>

      {/* BOTTOM FADE */}
      
<div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-charcoal/80 to-transparent" />
    </section>
  );
}