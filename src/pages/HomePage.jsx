import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Yap Fraternity Inc."
        subtitle="Cebu Chapter"
        tagline="Legacy, Brotherhood, Service"
      />

      {/* About Section */}
      <section className="bg-yap-light py-[100px]">
        <div className="max-w-[70vw] mx-auto px-6">
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

          {/* Card Stack */}
          <div className="flex flex-col gap-8 mb-[60px]">
            {/* Card 1: Cultural Heritage */}
            <div className="bg-yap-light rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.005] transition-all duration-300 ease-in-out min-h-[220px]">
              <div className="grid grid-cols-[1fr_1fr] h-full">
                <div className="p-10 border-l-[3px] border-yap-red flex flex-col justify-center">
                  <h3 className="font-serif font-bold text-yap-text mb-4 text-lg">Cultural Heritage</h3>
                  <p className="leading-[1.85] text-yap-muted text-sm">
                    Dragon dances. Lantern festivals. Chinese New Year in the streets of Cebu. We carry these traditions forward — not because we have to, but because they still mean something.
                  </p>
                </div>
                <div className="overflow-hidden">
                  <img
                    src="/yap_media/cny_valentines_feb_2026/cny_1.jpg"
                    alt="Dragon dance"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Community Service */}
            <div className="bg-yap-light rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.005] transition-all duration-300 ease-in-out min-h-[220px]">
              <div className="grid grid-cols-[1fr_1fr] h-full">
                <div className="p-10 border-l-[3px] border-yap-red flex flex-col justify-center">
                  <h3 className="font-serif font-bold text-yap-text mb-4 text-lg">Community Service</h3>
                  <p className="leading-[1.85] text-yap-muted text-sm">
                    When the community needs help, we go. Relief drives, medical outreach, disaster response — our members show up as neighbors, not just as an organization. The walls of the fraternity have always been open.
                  </p>
                </div>
                <div className="overflow-hidden">
                  <img
                    src="/yap_media/50th_anniversary_2025/anniversary_3.jpg"
                    alt="Community gathering"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Card 3: Brotherhood */}
            <div className="bg-yap-light rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.005] transition-all duration-300 ease-in-out min-h-[220px]">
              <div className="grid grid-cols-[1fr_1fr] h-full">
                <div className="p-10 border-l-[3px] border-yap-red flex flex-col justify-center">
                  <h3 className="font-serif font-bold text-yap-text mb-4 text-lg">Brotherhood</h3>
                  <p className="leading-[1.85] text-yap-muted text-sm">
                    Fifty years of inside jokes, shared meals, and the kind of trust that builds slowly and lasts a long time. That is what this is. Not a program. A relationship.
                  </p>
                </div>
                <div className="overflow-hidden">
                  <img
                    src="/yap_media/retreat_feb_2026/retreat.jpg"
                    alt="Youth retreat"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Milestone Block */}
          <div className="bg-yap-yellow text-yap-dark rounded-2xl p-14 max-w-[720px] mx-auto text-center">
            <h3 className="font-serif text-[1.8rem] font-bold text-yap-red mb-3">
              Fifty Years.
            </h3>
            <p className="text-lg leading-[1.9]">
              In May 2025, the Cebu Chapter marked its Golden Anniversary. Fifty years of gatherings, service, and people who chose to keep showing up. We did not just celebrate what was. We started building what comes next.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
