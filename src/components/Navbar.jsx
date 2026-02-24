import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[1000] bg-yap-green py-3 anim-nav">
      <div className="max-w-[92vw] lg:max-w-[70vw] mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/yap_media/yap_logo.png" alt="Yap Fraternity Logo" className="h-16" />
        </div>
        <ul className="flex gap-5 sm:gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-yap-yellow text-sm sm:text-base tracking-[0.08em] relative nav-link-active'
                  : 'text-white text-sm sm:text-base tracking-[0.08em] hover:text-yap-yellow transition-colors duration-200 ease-in-out'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                isActive
                  ? 'text-yap-yellow text-sm sm:text-base tracking-[0.08em] relative nav-link-active'
                  : 'text-white text-sm sm:text-base tracking-[0.08em] hover:text-yap-yellow transition-colors duration-200 ease-in-out'
              }
            >
              Community Engagement
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
