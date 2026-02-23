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
      <section className="bg-white py-[100px]">
        <div className="max-w-[1200px] mx-auto px-10">
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

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[60px]">
            <div className="bg-yap-light border-l-[3px] border-yap-red rounded-sm p-9 hover:shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-serif font-bold text-yap-text mb-4">
                Cultural Heritage
              </h3>
              <p className="text-sm leading-[1.85] text-yap-muted">
                Dragon dances. Lantern festivals. Chinese New Year in the streets of Cebu. We carry these traditions forward — not because we have to, but because they still mean something.
              </p>
            </div>

            <div className="bg-yap-light border-l-[3px] border-yap-red rounded-sm p-9 hover:shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-serif font-bold text-yap-text mb-4">
                Community Service
              </h3>
              <p className="text-sm leading-[1.85] text-yap-muted">
                When the community needs help, we go. Relief drives, medical outreach, disaster response — our members show up as neighbors, not just as an organization. The walls of the fraternity have always been open.
              </p>
            </div>

            <div className="bg-yap-light border-l-[3px] border-yap-red rounded-sm p-9 hover:shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-serif font-bold text-yap-text mb-4">
                Brotherhood
              </h3>
              <p className="text-sm leading-[1.85] text-yap-muted">
                Fifty years of inside jokes, shared meals, and the kind of trust that builds slowly and lasts a long time. That is what this is. Not a program. A relationship.
              </p>
            </div>
          </div>

          {/* Milestone Block */}
          <div className="bg-yap-red text-white rounded-sm p-14 max-w-[720px] mx-auto text-center">
            <h3 className="font-serif text-[1.8rem] font-bold text-yap-gold mb-3">
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
