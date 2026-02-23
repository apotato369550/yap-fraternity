export default function Hero({ title, subtitle, tagline }) {
  return (
    <section className="bg-yap-red text-white py-[140px] px-10 pb-[120px] text-center">
      <div
        className="inline-block px-16 py-12 border border-white/25"
        style={{
          outline: '1px solid rgba(255, 255, 255, 0.10)',
          outlineOffset: '-8px'
        }}
      >
        <h1 className="font-serif text-[3.8rem] font-bold letter-spacing-[0.06em] mb-2 text-white">
          {title}
        </h1>
        <p className="text-yap-yellow text-lg font-normal letter-spacing-[0.2em] mb-5">
          {subtitle}
        </p>
        <p className="text-white/60 text-xs letter-spacing-[0.3em] font-normal">
          {tagline}
        </p>
      </div>
    </section>
  )
}
