import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

const CARDS = [
  {
    id: 1,
    title: 'Cultural Heritage',
    text: 'Dragon dances. Lantern festivals. Chinese New Year in the streets of Cebu. We carry these traditions forward — not because we have to, but because they still mean something.',
    image: '/yap_media/cny_valentines_feb_2026/cny_1.jpg',
    imagePosition: 'left'
  },
  {
    id: 2,
    title: 'Community Service',
    text: 'When the community needs help, we go. Relief drives, medical outreach, disaster response — our members show up as neighbors, not just as an organization. The walls of the fraternity have always been open.',
    image: '/yap_media/50th_anniversary_2025/anniversary_3.jpg',
    imagePosition: 'right'
  },
  {
    id: 3,
    title: 'Brotherhood',
    text: 'Fifty years of inside jokes, shared meals, and the kind of trust that builds slowly and lasts a long time. That is what this is. Not a program. A relationship.',
    image: '/yap_media/retreat_feb_2026/retreat.jpg',
    imagePosition: 'left'
  }
]

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  const openModal = (card) => {
    setSelectedCard(card)
    setModalOpen(true)
  }

  return (
    <div>
      <Navbar />
      <Hero title="YAP" />

      {/* About Section with Vector Background */}
      <section
        className="py-10 relative"
        style={{
          backgroundImage: 'url(/yap_media/vector.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#F7F0E3'
        }}
      >
        <div className="max-w-[70vw] mx-auto px-6 relative z-10">
          <div className="mb-10 text-center relative pb-7">
            <h2 className="font-serif text-2xl font-bold text-yap-text mb-0">About Us</h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-yap-red" />
          </div>

          {/* Intro */}
          <div className="max-w-[800px] mx-auto text-center text-lg leading-[1.9] mb-[72px] text-yap-text">
            <p>
              We are the Yaps of Cebu — a family of families, bound by name and by choice. Since 1970, the Cebu Chapter has gathered to celebrate what we come from, and to build what we leave behind. Brotherhood is not a word we say. It is what happens when we show up.
            </p>
          </div>

          {/* Cards - Alternating Layout */}
          <div className="flex flex-col gap-12 mb-[80px]">
            {CARDS.map((card, idx) => (
              <div
                key={card.id}
                onClick={() => openModal(card)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.005] transition-all duration-300 ease-in-out min-h-[220px] cursor-pointer"
              >
                <div className={`grid grid-cols-[1fr_1fr] h-full ${card.imagePosition === 'right' ? 'auto-cols-fr' : ''}`}>
                  {/* Text - LEFT if imagePosition is 'left', RIGHT if 'right' */}
                  {card.imagePosition === 'left' ? (
                    <>
                      <div className="p-10 flex flex-col justify-center order-2 lg:order-1">
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
                      <div className="p-10 flex flex-col justify-center">
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

          {/* Milestone Block - Hero Style */}
          <div className="bg-yap-yellow rounded-2xl p-8 max-w-[900px] mx-auto">
            <div className="flex flex-row items-center justify-center gap-2">
              {/* Logo - LEFT */}
              <img
                src="/yap_media/yap_logo.png"
                alt="YAP Logo"
                className="h-[370px] w-[370px] object-contain flex-shrink-0"
                style={{ borderRadius: '50%' }}
              />

              {/* Text - RIGHT */}
              <div className="flex flex-col justify-center space-y-0 text-left">
                <h3 className="font-serif text-[2.5rem] font-bold text-yap-dark tracking-[0.08em]">
                  FIFTY
                </h3>
                <p className="font-serif text-2xl font-semibold text-yap-dark tracking-[0.06em]">
                  YEARS
                </p>
                <p className="font-serif text-sm text-yap-muted leading-relaxed mt-4">
                  In May 2025, the Cebu Chapter marked its Golden Anniversary. Fifty years of gatherings, service, and people who chose to keep showing up. We did not just celebrate what was. We started building what comes next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedCard?.title || 'Writeup'}
        image={selectedCard?.image}
        content={selectedCard?.text}
      />

      <Footer />
    </div>
  )
}
