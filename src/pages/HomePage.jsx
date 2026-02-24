import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const CARDS = [
  {
    id: 1,
    title: 'Cultural Heritage',
    text: 'Dragon dances. Lantern festivals. And celebrating Chinese New Year with family. We carry these memories and traditions forward.',
    image: '/yap_media/cny_valentines_feb_2026/cny_5.jpg',
    imagePosition: 'left'
  },
  {
    id: 2,
    title: 'Community Service',
    text: 'When neccesity dictates, we listen. In times of need, we act. Relief drives, outreach, and disaster response. Our members show up as neighbors, and as active members of society. The walls of the fraternity have always been open to all.',
    image: '/yap_media/50th_anniversary_2025/anniversary_3.jpg',
    imagePosition: 'right'
  },
  {
    id: 3,
    title: 'Brotherhood',
    text: 'Fifty years of inside jokes, shared meals, and the kind of trust that lasts several lifetimes.',
    image: '/yap_media/retreat_feb_2026/retreat_2.jpg',
    imagePosition: 'left'
  }
]

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero title="YAP" />

      {/* About Section with Vector Background */}
      <section
        className="py-10 relative"
        style={{
          backgroundImage: 'url(/yap_media/chinese-background.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
          backgroundColor: '#F7F0E3'
        }}
      >
        <div className="max-w-[92vw] lg:max-w-[70vw] mx-auto px-6 relative z-10">

          {/* Intro */}
          <div className="max-w-[800px] mx-auto text-center text-lg leading-[1.9] mb-[72px] text-yap-text bg-white/65 rounded-xl px-4 py-5 sm:px-8 sm:py-6">

            <div className="mb-10 text-center relative pb-7">
              <h2 className="font-serif text-2xl font-bold text-yap-text mb-0">About Us</h2>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-yap-red" />
            </div>
            <p>
              We are the Yaps of Cebu. A family of families with a shared name and lineage. 
              <br></br>
              <br></br>
              Since 1970, the Cebu Chapter has gathered to celebrate what we come from, and to build what we leave behind. 
              <br></br>
              <br></br>
            </p>
          </div>

          {/* Cards - Alternating Layout */}
          <div className="flex flex-col gap-12 mb-[80px]">
            {CARDS.map((card, idx) => (
              <div
                key={card.id}
                className={`overflow-hidden min-h-0 sm:min-h-[220px] hover:opacity-95 transition-opacity duration-300 anim-fade ${['anim-d1','anim-d2','anim-d3'][idx] || ''}`}
              >
                <div className={`grid grid-cols-1 sm:grid-cols-[1fr_1fr] h-full ${card.imagePosition === 'right' ? 'auto-cols-fr' : ''}`}>
                  {/* Text - LEFT if imagePosition is 'left', RIGHT if 'right' */}
                  {card.imagePosition === 'left' ? (
                    <>
                      <div className="p-6 sm:p-10 flex flex-col justify-center order-2 lg:order-1 bg-white/70">
                        <p className="text-yap-red text-xs tracking-[0.18em] font-semibold mb-3">
                          {String(idx + 1).padStart(2, '0')} —
                        </p>
                        <h3 className="font-serif font-bold text-yap-text mb-4 text-lg">
                          {card.title}
                        </h3>
                        <p className="leading-[1.85] text-yap-muted text-sm">
                          {card.text}
                        </p>
                      </div>
                      <div className="overflow-hidden order-1 lg:order-2">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6 sm:p-10 flex flex-col justify-center bg-white/70">
                        <p className="text-yap-red text-xs tracking-[0.18em] font-semibold mb-3">
                          {String(idx + 1).padStart(2, '0')} —
                        </p>
                        <h3 className="font-serif font-bold text-yap-text mb-4 text-lg">
                          {card.title}
                        </h3>
                        <p className="leading-[1.85] text-yap-muted text-sm">
                          {card.text}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Block - Full-bleed Fifty Years Section */}
        <div className="bg-yap-yellow p-8 sm:p-14 relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-6 sm:gap-0">
              {/* Logo - LEFT */}
              <img
                src="/yap_media/yap_logo.png"
                alt="YAP Logo"
                className="h-[200px] w-[200px] sm:h-[340px] sm:w-[340px] lg:h-[460px] lg:w-[460px] object-contain flex-shrink-0 sm:pr-8"
                style={{ borderRadius: '50%' }}
              />

              <div className="w-16 h-0.5 sm:w-0.5 sm:h-auto bg-yap-gold sm:self-stretch" />

              {/* Text - RIGHT */}
              <div className="flex flex-col justify-center space-y-0 text-center sm:text-left pl-0 sm:pl-10">
                <h3 className="font-serif text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] font-bold text-yap-dark tracking-[0.08em] leading-[0.9]">
                  FIFTY
                </h3>
                <p className="font-serif text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] font-semibold text-yap-dark tracking-[0.06em] leading-[1.1]">
                  YEARS
                </p>
                <p className="font-serif text-sm text-yap-muted leading-relaxed mt-6">
                  In May 2025, the Cebu Chapter marked its Golden Anniversary. Fifty years of gatherings, service, and people who chose to keep showing up. We did not just celebrate what was. We started building what comes next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
