import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sun, Home, Battery, Zap, ArrowRight } from 'lucide-react'
import './EnergyPage.css'

const products = [
  {
    id: 'solar-panels',
    icon: Sun,
    title: 'Solar Panels',
    desc: 'Convert sunlight into clean energy with high-efficiency panels designed for maximum performance.',
    stats: ['Up to 425W', '25-year warranty', 'Sleek black design']
  },
  {
    id: 'solar-roof',
    icon: Home,
    title: 'Solar Roof',
    desc: 'Beautiful solar tiles that replace your existing roof while generating electricity.',
    stats: ['Integrated design', 'Glass-coated', 'Weatherproof']
  },
  {
    id: 'powerwall',
    icon: Battery,
    title: 'Powerwall',
    desc: 'Home battery that stores solar energy and provides backup power during outages.',
    stats: ['13.5 kWh', 'Whole-home backup', 'App control']
  },
  {
    id: 'megapack',
    icon: Zap,
    title: 'Megapack',
    desc: 'Utility-scale energy storage for grid stabilization and renewable integration.',
    stats: ['3+ MWh', 'Utility scale', 'Modular']
  }
]

export default function EnergyPage() {
  return (
    <div className="energy-page">
      <section className="energy-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow">Tesla Energy</p>
            <h1>Clean Energy Ecosystem</h1>
            <p className="hero-desc">
              Generate, store and manage renewable energy for your home and the grid.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="energy-grid">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="energy-card"
              >
                <div className="energy-icon">
                  <p.icon size={28} />
                </div>
                <h2>{p.title}</h2>
                <p>{p.desc}</p>
                <ul>
                  {p.stats.map((s, j) => (
                    <li key={j}>{s}</li>
                  ))}
                </ul>
                <Link to={`/energy/${p.id}`} className="energy-link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section energy-cta">
        <div className="container">
          <div className="energy-cta-box">
            <h2>Power Your Home</h2>
            <p>Estimate savings with solar and Powerwall. Demo calculator coming in next stage.</p>
            <Link to="/energy/calculator" className="btn btn-primary">
              Energy Calculator <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
