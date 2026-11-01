import { useState } from 'react'
import { NavLink, Outlet, Navigate, Link } from 'react-router-dom'
import { 
  LayoutDashboard, Users, Car, Package, ShoppingBag, 
  FileText, BarChart3, Settings, LogOut, Menu, X, ArrowLeft
} from 'lucide-react'
import { useUser } from '../contexts/UserContext'
import './AdminLayout.css'

const adminNav = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/admin/users', icon: Users, label: 'Users' },
  { to: '/admin/vehicles', icon: Car, label: 'Vehicles' },
  { to: '/admin/products', icon: Package, label: 'Products' },
  { to: '/admin/orders', icon: ShoppingBag, label: 'Orders' },
  { to: '/admin/content', icon: FileText, label: 'Content' },
  { to: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/admin/settings', icon: Settings, label: 'Settings' },
]

export default function AdminLayout() {
  const { user, isAdmin, logout } = useUser()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (!isAdmin) {
    return (
      <div className="admin-denied">
        <h1>Access Denied</h1>
        <p>You need admin privileges to view this area.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="admin-layout">
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <Link to="/admin" className="admin-logo">
            <span className="admin-logo-text">TESLA</span>
            <span className="admin-logo-sub">ADMIN</span>
          </Link>
          <button className="admin-close-btn" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="admin-nav">
          {adminNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-nav-item">
            <ArrowLeft size={18} />
            <span>Back to Site</span>
          </Link>
          <button onClick={logout} className="admin-nav-item danger">
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />}

      <div className="admin-main">
        <header className="admin-topbar">
          <button className="admin-menu-btn" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} />
          </button>
          <div className="admin-topbar-right">
            <div className="admin-user-chip">
              <span className="admin-avatar">{user.name?.charAt(0) || 'A'}</span>
              <div>
                <strong>{user.name}</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
