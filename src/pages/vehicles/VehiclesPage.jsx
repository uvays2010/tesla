import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { vehicles } from '../../data/vehicles'
import './VehiclesPage.css'

export default function VehiclesPage() {
  return (
    <div className="vehicles-page">
      <section className="vehicles-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Tesla Lineup</p>
            <h1>Vehicles</h1>
            <p className="hero-desc">
              Explore the full range of Tesla vehicles — from the most efficient 
              to the fastest production cars on Earth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="vehicles-list">
            {vehicles.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link to={`/vehicles/${v.id}`} className="vehicle-row">
                  <div className="vehicle-row-img">
                    <img src={v.image} alt={v.name} loading="lazy" />
                    {v.comingSoon && <span className="coming-badge">Coming Soon</span>}
                  </div>
                  <div className="vehicle-row-content">
                    <div className="vehicle-row-top">
                      <div>
                        <h2>{v.name}</h2>
                        <span className="tagline">{v.tagline}</span>
                      </div>
                      <span className="category">{v.category}</span>
                    </div>
                    <p className="price">{v.priceLabel}</p>
                    <div className="stats-row">
                      <div className="stat">
                        <strong>{v.range}</strong>
                        <span>mi range</span>
                      </div>
                      <div className="stat">
                        <strong>{v.acceleration.split(' ')[0]}</strong>
                        <span>0-60 mph</span>
                      </div>
                      <div className="stat">
                        <strong>{v.topSpeed}</strong>
                        <span>Top Speed</span>
                      </div>
                      <div className="stat">
                        <strong>{v.peakPower}</strong>
                        <span>Peak Power</span>
                      </div>
                    </div>
                    <div className="vehicle-row-actions">
                      <span className="view-link">
                        View Details <ArrowRight size={16} />
                      </span>
                      <Link 
                        to={`/configurator?model=${v.id}`} 
                        className="config-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Configure
                      </Link>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
