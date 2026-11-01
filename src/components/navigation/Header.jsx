import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, Search, User, ShoppingCart, Sun, Moon, 
  ChevronDown, Globe, LogOut, Settings, LayoutDashboard
} from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import { useUser } from '../../contexts/UserContext'
import { useCart } from '../../contexts/CartContext'
import './Header.css'

const navItems = [
  {
    label: 'Vehicles',
    path: '/vehicles',
    mega: true,
    items: [
      { name: 'Model S', path: '/vehicles/model-s', desc: 'Luxury Sedan' },
      { name: 'Model 3', path: '/vehicles/model-3', desc: 'Electric Performance' },
      { name: 'Model X', path: '/vehicles/model-x', desc: 'Luxury SUV' },
      { name: 'Model Y', path: '/vehicles/model-y', desc: 'Compact SUV' },
      { name: 'Cybertruck', path: '/vehicles/cybertruck', desc: 'Futuristic Truck' },
      { name: 'Roadster', path: '/vehicles/roadster', desc: 'Sports Car' },
      { name: 'Semi', path: '/vehicles/semi', desc: 'Electric Truck' },
    ]
  },
  {
    label: 'Energy',
    path: '/energy',
    items: [
      { name: 'Solar Panels', path: '/energy/solar-panels' },
      { name: 'Solar Roof', path: '/energy/solar-roof' },
      { name: 'Powerwall', path: '/energy/powerwall' },
      { name: 'Megapack', path: '/energy/megapack' },
    ]
  },
  {
    label: 'Technology',
    path: '/technology',
    items: [
      { name: 'Autopilot', path: '/technology/autopilot' },
      { name: 'Full Self-Driving', path: '/technology/fsd' },
      { name: 'AI & Neural Nets', path: '/technology/ai' },
      { name: 'Battery Tech', path: '/technology/battery' },
    ]
  },
  { label: 'Robotics', path: '/robotics' },
  { label: 'Charging', path: '/charging' },
  { label: 'Shop', path: '/store' },
  { label: 'Discover', path: '/discover' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMega, setActiveMega] = useState(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { user, logout, isAdmin } = useUser()
  const { cartCount } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveMega(null)
    setUserMenuOpen(false)
  }, [location])

  return (
    <header className={`tw-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="tw-header-inner">
        <Link to="/" className="tw-logo">
          <svg viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg" className="tw-logo-svg">
            <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"/>
          </svg>
          <span className="tw-logo-text">WORLD</span>
        </Link>

        <nav className="tw-nav-desktop">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="tw-nav-item"
              onMouseEnter={() => item.items && setActiveMega(item.label)}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link to={item.path} className="tw-nav-link">
                {item.label}
                {item.items && <ChevronDown size={14} />}
              </Link>
              <AnimatePresence>
                {activeMega === item.label && item.items && (
                  <motion.div
                    className={`tw-mega ${item.mega ? 'mega-wide' : ''}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="tw-mega-inner">
                      {item.items.map((sub) => (
                        <Link key={sub.path} to={sub.path} className="tw-mega-item">
                          <span className="tw-mega-name">{sub.name}</span>
                          {sub.desc && <span className="tw-mega-desc">{sub.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="tw-header-actions">
          <button className="tw-icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <Link to="/search" className="tw-icon-btn" aria-label="Search">
            <Search size={18} />
          </Link>

          <Link to="/store/cart" className="tw-icon-btn cart-btn" aria-label="Cart">
            <ShoppingCart size={18} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          <div className="tw-user-menu">
            <button 
              className="tw-icon-btn" 
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              aria-label="Account"
            >
              <User size={18} />
            </button>
            <AnimatePresence>
              {userMenuOpen && (
                <motion.div
                  className="tw-user-dropdown"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                >
                  {user ? (
                    <>
                      <div className="tw-user-info">
                        <strong>{user.name}</strong>
                        <span>{user.email}</span>
                      </div>
                      <Link to="/owners" className="tw-dropdown-item">
                        <LayoutDashboard size={16} /> Owners Center
                      </Link>
                      <Link to="/account" className="tw-dropdown-item">
                        <Settings size={16} /> Account Settings
                      </Link>
                      {isAdmin && (
                        <Link to="/admin" className="tw-dropdown-item">
                          <Globe size={16} /> Admin Panel
                        </Link>
                      )}
                      <button onClick={logout} className="tw-dropdown-item danger">
                        <LogOut size={16} /> Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="tw-dropdown-item">Sign In</Link>
                      <Link to="/register" className="tw-dropdown-item">Create Account</Link>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            className="tw-mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="tw-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <div key={item.label} className="tw-mobile-section">
                <Link to={item.path} className="tw-mobile-link">{item.label}</Link>
                {item.items && (
                  <div className="tw-mobile-subs">
                    {item.items.map((sub) => (
                      <Link key={sub.path} to={sub.path} className="tw-mobile-sub">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
