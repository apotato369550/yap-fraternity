import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[1000] bg-yap-dark py-4 border-b-2 border-yap-red">
      <div className="max-w-[1200px] mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/yap_media/yap_logo.png" alt="Yap Fraternity Logo" className="h-10" />
          <span className="text-white text-lg font-medium">Yap Fraternity</span>
        </div>
        <ul className="flex gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-yap-yellow text-sm letter-spacing-[0.08em] relative nav-link-active'
                  : 'text-white text-sm letter-spacing-[0.08em] hover:text-yap-yellow transition-colors'
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
                  ? 'text-yap-yellow text-sm letter-spacing-[0.08em] relative nav-link-active'
                  : 'text-white text-sm letter-spacing-[0.08em] hover:text-yap-yellow transition-colors'
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
