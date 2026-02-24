export default function Hero() {
  return (
    <section className="bg-yap-yellow text-yap-dark py-6 px-4 sm:px-10 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/yap_media/chinese-background.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
          opacity: 0.12,
        }}
      />
      <div className="max-w-[92vw] lg:max-w-[70vw] mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-12">
          {/* Logo - LEFT, large, circular, flex-shrink to prevent squashing */}
          <img
            src="/yap_media/yap_logo.png"
            alt="YAP Logo"
            className="h-[200px] w-[200px] sm:h-[380px] sm:w-[380px] lg:h-[560px] lg:w-[560px] object-contain flex-shrink-0"
            style={{ borderRadius: '50%' }}
          />

          {/* Text - RIGHT, stacked vertically, vertically centered */}
          <div className="flex flex-col justify-center space-y-0 items-center sm:items-start text-center sm:text-left">
            <h1 className="font-serif text-[3.5rem] sm:text-[5rem] lg:text-[8rem] font-bold tracking-[0.08em] leading-[0.9]">
              YAP
            </h1>
            <p className="font-serif text-[1.2rem] sm:text-[1.75rem] lg:text-[2.75rem] font-semibold tracking-[0.06em] leading-[1.1]">
              FRATERNITY, INC.
            </p>
            <p className="font-serif text-[1.2rem] sm:text-[1.75rem] lg:text-[2.75rem] font-semibold tracking-[0.06em] leading-[1.1]">
              CEBU CHAPTER
            </p>
            <p className="font-serif text-[1rem] text-yap-gold tracking-[0.18em] font-medium mt-4">
              EST. 1970
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
