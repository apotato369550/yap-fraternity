export default function Hero({ title, subtitle, tagline }) {
  return (
    <section className="bg-yap-yellow text-yap-dark py-[140px] px-10 pb-[120px] text-center">
      <div
        className="inline-block px-16 py-12 border border-yap-dark/20"
        style={{
          outline: '1px solid rgba(28, 10, 0, 0.08)',
          outlineOffset: '-8px'
        }}
      >
        <h1 className="font-serif text-[3.8rem] font-bold letter-spacing-[0.06em] mb-2 text-yap-dark">
          {title}
        </h1>
        <p className="text-yap-red text-lg font-semibold letter-spacing-[0.2em] mb-5">
          {subtitle}
        </p>
        <p className="text-yap-dark/55 text-xs letter-spacing-[0.3em] font-normal">
          {tagline}
        </p>
      </div>
    </section>
  )
}
