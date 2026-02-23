import Carousel from './Carousel'

export default function EventSection({ title, date, images, testimonials, video }) {
  return (
    <div className="mb-[80px]">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-yap-text mb-2">{title}</h2>
        <span className="inline-block text-xs text-yap-red font-medium letter-spacing-[0.06em] bg-yap-red/10 px-3 py-1 rounded">
          {date}
        </span>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
        {/* Carousel */}
        <Carousel images={images} />

        {/* Testimonials & Video */}
        <div className="flex flex-col gap-5">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border-l-2 border-yap-red rounded-sm p-7 shadow-sm"
            >
              <p className="text-sm leading-[1.85] text-yap-text italic mb-3">
                "{testimonial.quote}"
              </p>
              <p className="text-xs text-yap-muted font-medium m-0">
                — {testimonial.source}
              </p>
            </div>
          ))}

          {video && (
            <div className="bg-white border-l-2 border-yap-red rounded-sm p-7">
              <h3 className="text-sm font-bold text-yap-text mb-4">Event Highlights Video</h3>
              <video controls className="w-full rounded-sm max-h-[400px] bg-black">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
