import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Cpu, Battery, Bot } from 'lucide-react'
import { vehicles } from '../../data/vehicles'
import './HomePage.css'

export default function HomePage() {
  const featured = vehicles.slice(0, 4)

  return (
    <div className="home">
      {/* Cinematic Hero */}
      <section className="home-hero">
        <div className="home-hero-bg" />
        <div className="home-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="home-hero-eyebrow">The Ultimate Ecosystem</p>
            <h1 className="home-hero-title">
              TESLA<br />
              <span>WORLD</span>
            </h1>
            <p className="home-hero-desc">
              Explore vehicles, energy, robotics, AI and the future of sustainable technology 
              in one premium global platform.
            </p>
            <div className="home-hero-actions">
              <Link to="/vehicles" className="btn btn-primary">
                Explore Vehicles <ArrowRight size={18} />
              </Link>
              <Link to="/configurator" className="btn btn-secondary">
                Build Yours
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="home-hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="section home-vehicles">
        <div className="container">
          <div className="section-header">
            <h2>Vehicles</h2>
            <Link to="/vehicles" className="section-link">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="vehicle-grid">
            {featured.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/vehicles/${v.id}`} className="vehicle-card">
                  <div className="vehicle-card-img">
                    <img src={v.image} alt={v.name} loading="lazy" />
                  </div>
                  <div className="vehicle-card-body">
                    <div className="vehicle-card-top">
                      <h3>{v.name}</h3>
                      <span className="vehicle-tag">{v.tagline}</span>
                    </div>
                    <p className="vehicle-price">{v.priceLabel}</p>
                    <div className="vehicle-stats">
                      <div>
                        <strong>{v.range}</strong>
                        <span>mi range</span>
                      </div>
                      <div>
                        <strong>{v.acceleration.split(' ')[0]}</strong>
                        <span>0-60 mph</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Pillars */}
      <section className="section home-pillars">
        <div className="container">
          <div className="section-header center">
            <h2>Complete Ecosystem</h2>
            <p>From electric vehicles to humanoid robots and clean energy.</p>
          </div>
          <div className="pillars-grid">
            {[
              { icon: Zap, title: 'Vehicles', desc: 'Seven groundbreaking models from Model S to Cybertruck.', path: '/vehicles' },
              { icon: Battery, title: 'Energy', desc: 'Solar, Powerwall and grid-scale storage solutions.', path: '/energy' },
              { icon: Cpu, title: 'Technology', desc: 'Autopilot, FSD, neural networks and AI computing.', path: '/technology' },
              { icon: Bot, title: 'Robotics', desc: 'Optimus and the future of autonomous machines.', path: '/robotics' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={item.path} className="pillar-card">
                  <div className="pillar-icon">
                    <item.icon size={28} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="pillar-link">Explore <ArrowRight size={14} /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta-box">
            <h2>Design Your Tesla</h2>
            <p>Use the interactive configurator to build your perfect vehicle in real time.</p>
            <Link to="/configurator" className="btn btn-primary">
              Open Configurator <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
