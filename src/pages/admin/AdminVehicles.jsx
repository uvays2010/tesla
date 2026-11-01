import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, Search } from 'lucide-react'
import { vehicles } from '../../data/vehicles'
import './AdminUsers.css'

export default function AdminVehicles() {
  const [search, setSearch] = useState('')

  const filtered = vehicles.filter(v =>
    v.name.toLowerCase().includes(search.toLowerCase()) ||
    v.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="admin-vehicles">
      <div className="admin-page-header">
        <div>
          <h1>Vehicle Management</h1>
          <p>{vehicles.length} vehicles · Demo data</p>
        </div>
      </div>

      <div className="admin-toolbar">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search vehicles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-table-wrap">
          <table className="admin-table full">
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Category</th>
                <th>Price</th>
                <th>Range</th>
                <th>0-60</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((v) => (
                <tr key={v.id}>
                  <td>
                    <div className="user-cell">
                      <img 
                        src={v.image} 
                        alt={v.name}
                        style={{ width: 48, height: 32, objectFit: 'cover', borderRadius: 4 }}
                      />
                      <div>
                        <strong>{v.name}</strong>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{v.tagline}</div>
                      </div>
                    </div>
                  </td>
                  <td className="muted">{v.category}</td>
                  <td>${v.price.toLocaleString()}</td>
                  <td>{v.range} mi</td>
                  <td>{v.acceleration.split(' ')[0]}</td>
                  <td>
                    <span className={`role-badge ${v.comingSoon ? 'user' : 'admin'}`}>
                      {v.comingSoon ? 'Coming Soon' : 'Available'}
                    </span>
                  </td>
                  <td>
                    <Link to={`/vehicles/${v.id}`} className="icon-action" title="View on site">
                      <Eye size={15} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="admin-note">
        Demo mode. Vehicle data is static. Full CRUD can be extended with LocalStorage in later stages.
      </p>
    </div>
  )
}
