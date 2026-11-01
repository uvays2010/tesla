import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Battery, Gauge, Zap, Shield } from 'lucide-react'
import { getVehicleById, vehicles } from '../../data/vehicles'
import './VehicleDetailPage.css'

export default function VehicleDetailPage() {
  const { id } = useParams()
  const vehicle = getVehicleById(id)

  if (!vehicle) {
    return (
      <div className="not-found">
        <h1>Vehicle not found</h1>
        <Link to="/vehicles" className="btn btn-primary">Back to Vehicles</Link>
      </div>
    )
  }

  const related = vehicles.filter(v => v.id !== vehicle.id).slice(0, 3)

  return (
    <div className="vehicle-detail">
      {/* Hero */}
      <section className="vd-hero">
        <div className="vd-hero-bg">
          <img src={vehicle.image} alt={vehicle.name} />
          <div className="vd-hero-overlay" />
        </div>
        <div className="container vd-hero-content">
          <Link to="/vehicles" className="back-link">
            <ArrowLeft size={16} /> All Vehicles
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">{vehicle.category}</p>
            <h1>{vehicle.name}</h1>
            <p className="tagline">{vehicle.tagline}</p>
            <p className="price">{vehicle.priceLabel}</p>
            <div className="vd-hero-actions">
              <Link to={`/configurator?model=${vehicle.id}`} className="btn btn-primary">
                Order Now <ArrowRight size={18} />
              </Link>
              <a href="#specs" className="btn btn-secondary">View Specs</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="vd-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <Gauge size={22} />
              <strong>{vehicle.acceleration}</strong>
              <span>Acceleration</span>
            </div>
            <div className="stat-card">
              <Battery size={22} />
              <strong>{vehicle.range} mi</strong>
              <span>Range (EPA est.)</span>
            </div>
            <div className="stat-card">
              <Zap size={22} />
              <strong>{vehicle.peakPower}</strong>
              <span>Peak Power</span>
            </div>
            <div className="stat-card">
              <Shield size={22} />
              <strong>{vehicle.topSpeed}</strong>
              <span>Top Speed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <div className="vd-two-col">
            <div>
              <h2>Highlights</h2>
              <ul className="highlights-list">
                {vehicle.highlights.map((h, i) => (
                  <li key={i}>
                    <Check size={18} className="check" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="vd-colors">
              <h3>Available Colors</h3>
              <div className="color-swatches">
                {vehicle.colors.map((c) => (
                  <div key={c.name} className="swatch-item" title={c.name}>
                    <div 
                      className="swatch" 
                      style={{ background: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #ddd' : 'none' }}
                    />
                    <span>{c.name}</span>
                    {c.price > 0 && <small>+${c.price.toLocaleString()}</small>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section vd-specs" id="specs">
        <div className="container">
          <h2>Technical Specifications</h2>
          <div className="specs-table">
            {Object.entries(vehicle.specs).map(([key, value]) => (
              <div key={key} className="spec-row">
                <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}</span>
                <span className="spec-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator CTA */}
      <section className="section">
        <div className="container">
          <div className="vd-cta">
            <div>
              <h2>Design Your {vehicle.name}</h2>
              <p>Choose colors, wheels, interior and packages in the interactive configurator.</p>
            </div>
            <Link to={`/configurator?model=${vehicle.id}`} className="btn btn-primary">
              Open Configurator <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section related-section">
        <div className="container">
          <h2>Related Vehicles</h2>
          <div className="related-grid">
            {related.map((v) => (
              <Link key={v.id} to={`/vehicles/${v.id}`} className="related-card">
                <div className="related-img">
                  <img src={v.image} alt={v.name} loading="lazy" />
                </div>
                <div className="related-body">
                  <h3>{v.name}</h3>
                  <p>{v.priceLabel}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
