import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, Car, ShoppingBag, DollarSign, TrendingUp, 
  Activity, Eye, ArrowUpRight
} from 'lucide-react'
import { useUser } from '../../contexts/UserContext'
import { vehicles } from '../../data/vehicles'
import './AdminDashboard.css'

export default function AdminDashboard() {
  const { users } = useUser()

  const stats = useMemo(() => {
    const configs = JSON.parse(localStorage.getItem('tesla-world-configs') || '[]')
    const cart = JSON.parse(localStorage.getItem('tesla-world-cart') || '[]')
    
    return {
      users: users.length,
      vehicles: vehicles.length,
      configs: configs.length,
      cartItems: cart.reduce((s, i) => s + (i.quantity || 1), 0),
      // Demo numbers
      pageViews: 12847,
      revenue: 284500
    }
  }, [users])

  const recentUsers = users.slice(-5).reverse()
  const recentConfigs = JSON.parse(localStorage.getItem('tesla-world-configs') || '[]').slice(0, 5)

  return (
    <div className="admin-dashboard">
      <div className="admin-page-header">
        <div>
          <h1>Dashboard</h1>
          <p>TESLA WORLD Control Center · Demo Mode</p>
        </div>
        <span className="demo-badge">Frontend Demo</span>
      </div>

      {/* Stats Grid */}
      <div className="stats-cards">
        <div className="stat-box">
          <div className="stat-box-icon users">
            <Users size={20} />
          </div>
          <div>
            <span className="stat-box-label">Total Users</span>
            <strong className="stat-box-value">{stats.users}</strong>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-box-icon vehicles">
            <Car size={20} />
          </div>
          <div>
            <span className="stat-box-label">Vehicles</span>
            <strong className="stat-box-value">{stats.vehicles}</strong>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-box-icon orders">
            <ShoppingBag size={20} />
          </div>
          <div>
            <span className="stat-box-label">Saved Configs</span>
            <strong className="stat-box-value">{stats.configs}</strong>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-box-icon revenue">
            <DollarSign size={20} />
          </div>
          <div>
            <span className="stat-box-label">Demo Revenue</span>
            <strong className="stat-box-value">${(stats.revenue / 1000).toFixed(1)}k</strong>
          </div>
        </div>
      </div>

      {/* Charts row - simplified */}
      <div className="admin-grid-2">
        <div className="admin-card">
          <div className="admin-card-header">
            <h3>Traffic Overview</h3>
            <span className="trend up"><TrendingUp size={14} /> +12.4%</span>
          </div>
          <div className="demo-chart">
            <div className="chart-bars">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div key={i} className="chart-bar" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="chart-labels">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
              <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
              <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>
          <div className="chart-footer">
            <div>
              <Eye size={14} />
              <span>{stats.pageViews.toLocaleString()} page views (demo)</span>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="quick-actions">
            <Link to="/admin/users" className="quick-action">
              <Users size={18} />
              <span>Manage Users</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link to="/admin/vehicles" className="quick-action">
              <Car size={18} />
              <span>Manage Vehicles</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link to="/admin/products" className="quick-action">
              <ShoppingBag size={18} />
              <span>Products</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link to="/admin/analytics" className="quick-action">
              <Activity size={18} />
              <span>Analytics</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Tables */}
      <div className="admin-grid-2">
        <div className="admin-card">
          <div className="admin-card-header">
            <h3>Recent Users</h3>
            <Link to="/admin/users" className="card-link">View all</Link>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((u) => (
                  <tr key={u.id}>
                    <td>{u.name}</td>
                    <td className="muted">{u.email}</td>
                    <td>
                      <span className={`role-badge ${u.role}`}>{u.role}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h3>Recent Configurations</h3>
          </div>
          {recentConfigs.length === 0 ? (
            <p className="empty-state">No configurations saved yet. Use the Configurator.</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Color</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {recentConfigs.map((c) => (
                    <tr key={c.id}>
                      <td>{c.modelName}</td>
                      <td className="muted">{c.color}</td>
                      <td>${c.totalPrice?.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
