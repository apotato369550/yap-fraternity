import Carousel from './Carousel'

export default function EventSection({ title, date, images, testimonials, video }) {
  return (
    <div className="mb-[48px] sm:mb-[80px] anim-fade">
      {/* Header - white transparent backdrop */}
      <div className="mb-8 bg-white/65 rounded-xl px-6 py-5 w-fit max-w-full">
        <h2 className="text-2xl font-serif font-bold text-yap-text mb-2">{title}</h2>
        <span className="inline-block text-xs text-yap-green font-medium tracking-[0.06em] bg-yap-green/10 px-3 py-1 rounded-full">
          {date}
        </span>
      </div>

      {/* Carousel - Full Width */}
      <div className="mb-8">
        <Carousel images={images} />
      </div>

      {/* Testimonials + Video - Below carousel, responsive grid */}
      <div className={`grid gap-6 ${testimonials.length + (video ? 1 : 0) > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {testimonials.map((testimonial, idx) => (
          <blockquote key={idx} className="bg-white/65 rounded-xl px-4 py-4 sm:px-6 sm:py-5">
            <p className="text-base leading-[1.85] text-yap-dark italic mb-3">
              "{testimonial.quote}"
            </p>
            <p className="text-xs text-yap-muted tracking-[0.08em] m-0">
              — {testimonial.source}
            </p>
          </blockquote>
        ))}

        {video && (
          <div className="bg-white/65 rounded-xl p-6">
            <h3 className="text-sm font-bold text-yap-text mb-4 tracking-[0.06em]">Event Highlights</h3>
            <video controls className="w-full rounded-lg max-h-[360px] bg-black">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  )
}
