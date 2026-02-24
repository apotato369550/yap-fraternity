export default function Hero() {
  return (
    <section className="bg-yap-yellow text-yap-dark py-10 px-10">
      <div className="max-w-[70vw] mx-auto">
        <div className="flex flex-row items-center justify-center gap-2">
          {/* Logo - LEFT, large, circular, flex-shrink to prevent squashing */}
          <img
            src="/yap_media/yap_logo.png"
            alt="YAP Logo"
            className="h-[600px] w-[600px] object-contain flex-shrink-0"
            style={{ borderRadius: '50%' }}
          />

          {/* Text - RIGHT, stacked vertically, vertically centered */}
          <div className="flex flex-col justify-center space-y-0">
            <h1 className="font-serif text-[6rem] font-bold tracking-[0.08em]">
              YAP
            </h1>
            <p className="font-serif text-3xl font-semibold tracking-[0.06em]">
              FRATERNITY, INC.
            </p>
            <p className="font-serif text-3xl font-semibold tracking-[0.06em]">
              CEBU CHAPTER
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
