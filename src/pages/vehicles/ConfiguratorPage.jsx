import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, RotateCcw, Save, ArrowRight } from 'lucide-react'
import { vehicles, getVehicleById } from '../../data/vehicles'
import { useUser } from '../../contexts/UserContext'
import './ConfiguratorPage.css'

export default function ConfiguratorPage() {
  const [searchParams] = useSearchParams()
  const initialModel = searchParams.get('model') || 'model-3'
  const { user, isAuthenticated } = useUser()

  const [selectedModelId, setSelectedModelId] = useState(initialModel)
  const vehicle = getVehicleById(selectedModelId) || vehicles[1]

  const [colorIdx, setColorIdx] = useState(0)
  const [wheelIdx, setWheelIdx] = useState(0)
  const [interiorIdx, setInteriorIdx] = useState(0)
  const [saved, setSaved] = useState(false)

  // Reset options when model changes
  useEffect(() => {
    setColorIdx(0)
    setWheelIdx(0)
    setInteriorIdx(0)
    setSaved(false)
  }, [selectedModelId])

  const color = vehicle.colors[colorIdx] || vehicle.colors[0]
  const wheel = vehicle.wheels[wheelIdx] || vehicle.wheels[0]
  const interior = vehicle.interiors[interiorIdx] || vehicle.interiors[0]

  const totalPrice = useMemo(() => {
    return vehicle.price + (color?.price || 0) + (wheel?.price || 0) + (interior?.price || 0)
  }, [vehicle, color, wheel, interior])

  const handleSave = () => {
    const config = {
      id: Date.now().toString(),
      modelId: vehicle.id,
      modelName: vehicle.name,
      color: color.name,
      wheel: wheel.name,
      interior: interior.name,
      totalPrice,
      savedAt: new Date().toISOString()
    }

    const existing = JSON.parse(localStorage.getItem('tesla-world-configs') || '[]')
    existing.unshift(config)
    localStorage.setItem('tesla-world-configs', JSON.stringify(existing.slice(0, 20)))
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const handleReset = () => {
    setColorIdx(0)
    setWheelIdx(0)
    setInteriorIdx(0)
  }

  return (
    <div className="configurator">
      <div className="config-layout">
        {/* Preview Side */}
        <div className="config-preview">
          <div className="preview-header">
            <h1>Configurator Studio</h1>
            <p className="demo-note">Demo mode · Prices are illustrative</p>
          </div>

          <div className="preview-image-wrap">
            <AnimatePresence mode="wait">
              <motion.img
                key={vehicle.id + color.name}
                src={vehicle.image}
                alt={vehicle.name}
                initial={{ opacity: 0.4, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.4 }}
                transition={{ duration: 0.4 }}
                className="preview-img"
              />
            </AnimatePresence>
            <div 
              className="color-overlay" 
              style={{ background: color.hex, opacity: color.hex === '#000000' || color.hex === '#FFFFFF' ? 0 : 0.15 }}
            />
          </div>

          <div className="preview-summary">
            <div className="summary-model">
              <h2>{vehicle.name}</h2>
              <span>{vehicle.tagline}</span>
            </div>
            <div className="summary-price">
              <span className="label">Estimated Price</span>
              <strong>${totalPrice.toLocaleString()}</strong>
            </div>
          </div>
        </div>

        {/* Controls Side */}
        <div className="config-controls">
          <div className="control-section">
            <h3>Select Model</h3>
            <div className="model-selector">
              {vehicles.filter(v => !v.comingSoon).map((v) => (
                <button
                  key={v.id}
                  className={`model-btn ${selectedModelId === v.id ? 'active' : ''}`}
                  onClick={() => setSelectedModelId(v.id)}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>

          <div className="control-section">
            <h3>Exterior Color</h3>
            <div className="option-grid colors">
              {vehicle.colors.map((c, i) => (
                <button
                  key={c.name}
                  className={`color-option ${colorIdx === i ? 'active' : ''}`}
                  onClick={() => setColorIdx(i)}
                  title={c.name}
                >
                  <div 
                    className="color-circle" 
                    style={{ 
                      background: c.hex,
                      border: c.hex === '#FFFFFF' ? '2px solid #ccc' : '2px solid transparent'
                    }}
                  >
                    {colorIdx === i && <Check size={14} color={c.hex === '#FFFFFF' || c.hex === '#C0C0C0' ? '#000' : '#fff'} />}
                  </div>
                  <span className="option-name">{c.name}</span>
                  {c.price > 0 && <span className="option-price">+${c.price.toLocaleString()}</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="control-section">
            <h3>Wheels</h3>
            <div className="option-list">
              {vehicle.wheels.map((w, i) => (
                <button
                  key={w.name}
                  className={`list-option ${wheelIdx === i ? 'active' : ''}`}
                  onClick={() => setWheelIdx(i)}
                >
                  <div className="list-option-left">
                    <span className="radio" />
                    <span>{w.name}</span>
                  </div>
                  <span className="option-price">
                    {w.price > 0 ? `+$${w.price.toLocaleString()}` : 'Included'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="control-section">
            <h3>Interior</h3>
            <div className="option-list">
              {vehicle.interiors.map((int, i) => (
                <button
                  key={int.name}
                  className={`list-option ${interiorIdx === i ? 'active' : ''}`}
                  onClick={() => setInteriorIdx(i)}
                >
                  <div className="list-option-left">
                    <span className="radio" />
                    <span>{int.name}</span>
                  </div>
                  <span className="option-price">
                    {int.price > 0 ? `+$${int.price.toLocaleString()}` : 'Included'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="config-actions">
            <button className="btn btn-secondary" onClick={handleReset}>
              <RotateCcw size={16} /> Reset
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              <Save size={16} /> {saved ? 'Saved!' : 'Save Configuration'}
            </button>
          </div>

          <div className="config-footer-note">
            <p>
              This is a frontend demo. Configurations are saved to LocalStorage.
              {isAuthenticated ? ` Logged in as ${user.name}.` : ' Sign in to sync across sessions (demo).'}
            </p>
            <Link to={`/vehicles/${vehicle.id}`} className="view-vehicle-link">
              View {vehicle.name} details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
