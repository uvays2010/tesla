import { Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Car, Settings, Battery, FileText, Bell, Heart } from 'lucide-react'
import { useUser } from '../../contexts/UserContext'
import './OwnersPage.css'

export default function OwnersPage() {
  const { user, isAuthenticated, logout } = useUser()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  const configs = JSON.parse(localStorage.getItem('tesla-world-configs') || '[]')
    .filter(c => true)
    .slice(0, 5)

  return (
    <div className="owners-page">
      <section className="owners-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="eyebrow">Owners Center</p>
            <h1>Welcome, {user.name}</h1>
            <p className="hero-desc">Manage your vehicles, configurations and account.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="owners-grid">
            <div className="owners-main">
              <div className="owners-card">
                <h2>Saved Configurations</h2>
                {configs.length === 0 ? (
                  <div className="empty-box">
                    <p>No configurations saved yet.</p>
                    <Link to="/configurator" className="btn btn-primary">Open Configurator</Link>
                  </div>
                ) : (
                  <div className="config-list">
                    {configs.map((c) => (
                      <div key={c.id} className="config-item">
                        <div>
                          <strong>{c.modelName}</strong>
                          <span>{c.color} · {c.wheel}</span>
                        </div>
                        <div className="config-price">${c.totalPrice?.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="owners-card">
                <h2>Quick Links</h2>
                <div className="owners-links">
                  <Link to="/vehicles" className="owners-link">
                    <Car size={20} />
                    <span>Browse Vehicles</span>
                  </Link>
                  <Link to="/configurator" className="owners-link">
                    <Settings size={20} />
                    <span>Configurator</span>
                  </Link>
                  <Link to="/charging" className="owners-link">
                    <Battery size={20} />
                    <span>Charging Guide</span>
                  </Link>
                  <Link to="/support" className="owners-link">
                    <FileText size={20} />
                    <span>Support</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="owners-sidebar">
              <div className="owners-card profile-card">
                <div className="profile-avatar">{user.name?.charAt(0)}</div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <span className="role-tag">{user.role}</span>
                <div className="profile-actions">
                  <Link to="/account" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                    Account Settings
                  </Link>
                  <button onClick={logout} className="btn-text">Sign Out</button>
                </div>
              </div>

              <div className="owners-card">
                <h3 style={{ fontSize: '14px', marginBottom: 12 }}>Favorites</h3>
                {user.favorites?.length > 0 ? (
                  <p>{user.favorites.length} saved vehicles</p>
                ) : (
                  <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                    <Heart size={14} style={{ display: 'inline', marginRight: 6 }} />
                    No favorites yet
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
