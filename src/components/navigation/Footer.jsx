import { Link } from 'react-router-dom'
import './Footer.css'

const footerColumns = [
  {
    title: 'Vehicles',
    links: [
      { label: 'Model S', path: '/vehicles/model-s' },
      { label: 'Model 3', path: '/vehicles/model-3' },
      { label: 'Model X', path: '/vehicles/model-x' },
      { label: 'Model Y', path: '/vehicles/model-y' },
      { label: 'Cybertruck', path: '/vehicles/cybertruck' },
      { label: 'Roadster', path: '/vehicles/roadster' },
      { label: 'Semi', path: '/vehicles/semi' },
      { label: 'Compare', path: '/vehicles/compare' },
    ]
  },
  {
    title: 'Energy',
    links: [
      { label: 'Solar Panels', path: '/energy/solar-panels' },
      { label: 'Solar Roof', path: '/energy/solar-roof' },
      { label: 'Powerwall', path: '/energy/powerwall' },
      { label: 'Megapack', path: '/energy/megapack' },
      { label: 'Energy Calculator', path: '/energy/calculator' },
    ]
  },
  {
    title: 'Technology',
    links: [
      { label: 'Autopilot', path: '/technology/autopilot' },
      { label: 'Full Self-Driving', path: '/technology/fsd' },
      { label: 'AI & Computing', path: '/technology/ai' },
      { label: 'Battery Engineering', path: '/technology/battery' },
      { label: 'Robotics', path: '/robotics' },
    ]
  },
  {
    title: 'Discover',
    links: [
      { label: 'About Tesla', path: '/about' },
      { label: 'Our Mission', path: '/mission' },
      { label: 'Timeline', path: '/timeline' },
      { label: 'Leadership', path: '/leadership' },
      { label: 'News', path: '/news' },
      { label: 'Careers', path: '/careers' },
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', path: '/support' },
      { label: 'Charging', path: '/charging' },
      { label: 'Owners Center', path: '/owners' },
      { label: 'Service Centers', path: '/global/service' },
      { label: 'Contact', path: '/support/contact' },
    ]
  },
  {
    title: 'Shop',
    links: [
      { label: 'Tesla Shop', path: '/store' },
      { label: 'Accessories', path: '/store/accessories' },
      { label: 'Lifestyle', path: '/store/lifestyle' },
      { label: 'Apparel', path: '/store/apparel' },
    ]
  },
]

export default function Footer() {
  return (
    <footer className="tw-footer">
      <div className="tw-footer-main">
        <div className="container">
          <div className="tw-footer-grid">
            {footerColumns.map((col) => (
              <div key={col.title} className="tw-footer-col">
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="tw-footer-bottom">
        <div className="container">
          <div className="tw-footer-bottom-inner">
            <div className="tw-footer-brand">
              <span className="tw-footer-logo">TESLA WORLD</span>
              <span className="tw-footer-demo">Demo Platform · Frontend Only · LocalStorage</span>
            </div>
            <div className="tw-footer-legal">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/legal">Legal</Link>
              <span>© 2026 TESLA WORLD (Fan Project)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
