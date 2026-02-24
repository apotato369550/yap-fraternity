import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[1000] bg-yap-green py-4">
      <div className="max-w-[70vw] mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/yap_media/yap_logo.png" alt="Yap Fraternity Logo" className="h-14" />
          <span className="text-white text-2xl font-serif font-semibold">Yap Fraternity</span>
        </div>
        <ul className="flex gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-yap-yellow text-base letter-spacing-[0.08em] relative nav-link-active'
                  : 'text-white text-base letter-spacing-[0.08em] hover:text-yap-yellow transition-colors duration-200 ease-in-out'
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
                  ? 'text-yap-yellow text-base letter-spacing-[0.08em] relative nav-link-active'
                  : 'text-white text-base letter-spacing-[0.08em] hover:text-yap-yellow transition-colors duration-200 ease-in-out'
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
