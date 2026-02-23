import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import EventSection from '../components/EventSection'

export default function CommunityPage() {
  const anniversary = {
    title: 'Golden 50th Anniversary Celebration',
    date: 'May 2025 | Vivace Events Center',
    images: [
      { src: '/yap_media/50th_anniversary_2025/anniversary_1.jpg', alt: 'Anniversary 1' },
      { src: '/yap_media/50th_anniversary_2025/anniversary_2.jpg', alt: 'Anniversary 2' },
      { src: '/yap_media/50th_anniversary_2025/anniversary_3.jpg', alt: 'Anniversary 3' },
      { src: '/yap_media/50th_anniversary_2025/anniversary_4.jpg', alt: 'Anniversary 4' },
      { src: '/yap_media/50th_anniversary_2025/anniversary_5.jpg', alt: 'Anniversary 5' },
      { src: '/yap_media/50th_anniversary_2025/anniversary_6.jpg', alt: 'Anniversary 6' },
    ],
    testimonials: [
      {
        quote: '🎉✨ Congratulations to Yap Fraternity Inc. Cebu Chapter on your Golden 50th Anniversary! ✨🎉 Half a century of brotherhood, legacy, and meaningful connections is truly worth celebrating. Your commitment to unity, camaraderie, and service shines through every milestone. It was an honor to witness this remarkable occasion at Vivace Events Center — a night filled with laughter, memories, and the spirit of true brotherhood. Here\'s to the next 50 years of excellence and shared success! 🥂💛',
        source: 'Cebu Ocean Park (Official FB Post, June 2, 2025)',
      },
      {
        quote: 'October 12, 2025 | 2:00 PM — Honored to join the YAP Fraternity Inc., Cebu Chapter in celebrating their 50th Anniversary and 30th National Convention. I\'m here to express my gratitude for the invitation and to congratulate the organization for reaching this remarkable milestone. Your 50 years of unity and service truly inspire the younger generation to continue spreading love, compassion, and commitment to the community.',
        source: 'Nestor Archival (October 12, 2025)',
      },
    ],
  }

  const cny = {
    title: 'Lions and Dragon Dance - Chinese New Year 2026',
    date: 'February 15, 2026 | Cebu City',
    images: [
      { src: '/yap_media/cny_valentines_feb_2026/cny_1.jpg', alt: 'CNY 1' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_2.jpg', alt: 'CNY 2' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_3.jpg', alt: 'CNY 3' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_4.jpg', alt: 'CNY 4' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_5.jpg', alt: 'CNY 5' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_6.jpg', alt: 'CNY 6' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_7.jpg', alt: 'CNY 7' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_8.jpg', alt: 'CNY 8' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_9.jpg', alt: 'CNY 9' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_10.jpg', alt: 'CNY 10' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_11.jpg', alt: 'CNY 11' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_12.jpg', alt: 'CNY 12' },
      { src: '/yap_media/cny_valentines_feb_2026/cny_13.jpg', alt: 'CNY 13' },
    ],
    testimonials: [
      {
        quote: 'YAP Fraternity Inc. Cebu Chapter proudly hosted the Lions and Dragon Dance in advance celebration of Chinese New Year 2026, honoring culture and spreading good fortune to the community.',
        source: 'Cebu City News and Updates (February 15, 2026)',
      },
    ],
  }

  const lantern = {
    title: 'Red Lantern Festival 2026',
    date: 'February 2026 | Plaza Sugbu, Cebu City Hall',
    images: [
      { src: '/yap_media/red_lantern_feb_2026/lantern.jpg', alt: 'Lantern 1' },
      { src: '/yap_media/red_lantern_feb_2026/lantern_2.jpg', alt: 'Lantern 2' },
      { src: '/yap_media/red_lantern_feb_2026/lantern_3.jpg', alt: 'Lantern 3' },
      { src: '/yap_media/red_lantern_feb_2026/lantern_4.jpg', alt: 'Lantern 4' },
    ],
    testimonials: [
      {
        quote: 'LOOK: Yap Fraternity Inc Cebu Chapter (Red Lantern 2026) 📍Plaza Sugbu Cebu City Hall — A beautiful celebration of culture and community at the heart of Cebu.',
        source: 'Carl Omega Aerial (February 2026)',
      },
    ],
    video: '/yap_media/red_lantern_feb_2026/red_lantern_festival.mp4',
  }

  const retreat = {
    title: '1st Yap Youth Camp & Leadership Retreat',
    date: 'February 20-22, 2026',
    images: [
      { src: '/yap_media/retreat_feb_2026/retreat.jpg', alt: 'Retreat 1' },
      { src: '/yap_media/retreat_feb_2026/retreat_2.jpg', alt: 'Retreat 2' },
      { src: '/yap_media/retreat_feb_2026/retreat_3.jpg', alt: 'Retreat 3' },
      { src: '/yap_media/retreat_feb_2026/retreat_4.jpg', alt: 'Retreat 4' },
    ],
    testimonials: [
      {
        quote: 'Great work Yap Fraternity, Inc. - Cebu Chapter Core group for your dedication by spending your precious time to organize this youth camp, for your service as parents who have been supporting your children in all aspects, and for your big heart to make this camp possible and even successful! To the President, my good friend, my idol, Sir Jonathan \'Jonie\' Gesalem, daghang salamat gyud from the bottom of my heart. I will pray for you and your family sir Jonie, for almost 10 years ta nga kaila and higala, di gyud ko nimo kalimtan sa inyong mga ocassions. Super grateful ko! Ang Ginoo gyud ang mobawos diha nimo hundredth folds!',
        source: 'Jet Gonzales (February 23, 2026)',
      },
      {
        quote: 'To my Yap Fraternity- Cebu Chapter, especially our very Youthful, Achievers, and Progressive Yap Youth Servants Team, congratulations sa napaka successful na 1st Yap Youth Camp last Friday-Sunday! A big thank you sa mga parents, Core Group ng Yap Fraternity, Inc- Cebu Chapter especially to my humble and good friend, a visionary Leader, Sir Jonathan Gesalem! Thank you so much to our very brilliant, creative, and resourceful speakers, Teacher Grace Yap and Mitzi Ambrad-Nazareno. Above all, thank You Lord God Almighty for your goodness and for allowing us to hold this 1st Yap Youth Camp, You were present the whole duration, thank You, God! Daghang Salamat!!',
        source: 'Community Member (February 23, 2026)',
      },
    ],
  }

  return (
    <div>
      <Navbar />
      <Hero
        title="Community Engagement"
        subtitle="Events & Outreach"
        tagline="What we do, and why it matters."
      />

      {/* Events Section */}
      <section className="py-[80px] bg-yap-light">
        <div className="max-w-[70vw] mx-auto px-6">
          <EventSection {...anniversary} />
          <hr className="border-none h-px bg-yap-red opacity-20 my-[80px]" />
          <EventSection {...cny} />
          <hr className="border-none h-px bg-yap-red opacity-20 my-[80px]" />
          <EventSection {...lantern} />
          <hr className="border-none h-px bg-yap-red opacity-20 my-[80px]" />
          <EventSection {...retreat} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
