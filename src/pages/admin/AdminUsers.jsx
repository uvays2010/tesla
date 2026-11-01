import { useState } from 'react'
import { Search, Trash2, Shield, User } from 'lucide-react'
import { useUser } from '../../contexts/UserContext'
import './AdminUsers.css'

export default function AdminUsers() {
  const { users, user: currentUser } = useUser()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  // Local state for demo delete (doesn't actually remove from context permanently for safety)
  const [deletedIds, setDeletedIds] = useState([])

  const filtered = users
    .filter(u => !deletedIds.includes(u.id))
    .filter(u => {
      if (filter === 'admin') return u.role === 'admin'
      if (filter === 'user') return u.role === 'user'
      return true
    })
    .filter(u => 
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    )

  const handleDelete = (id) => {
    if (id === currentUser?.id) {
      alert('You cannot delete your own account')
      return
    }
    if (window.confirm('Remove this user from the demo list?')) {
      setDeletedIds(prev => [...prev, id])
    }
  }

  return (
    <div className="admin-users">
      <div className="admin-page-header">
        <div>
          <h1>User Management</h1>
          <p>{filtered.length} users · Demo mode (LocalStorage)</p>
        </div>
      </div>

      <div className="admin-toolbar">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-tabs">
          {['all', 'user', 'admin'].map((f) => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-table-wrap">
          <table className="admin-table full">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className="user-cell">
                      <span className="user-avatar">{u.name?.charAt(0) || '?'}</span>
                      <strong>{u.name}</strong>
                    </div>
                  </td>
                  <td className="muted">{u.email}</td>
                  <td>
                    <span className={`role-badge ${u.role}`}>
                      {u.role === 'admin' ? <Shield size={11} /> : <User size={11} />}
                      {u.role}
                    </span>
                  </td>
                  <td className="muted">{u.createdAt || '—'}</td>
                  <td>
                    <button
                      className="icon-action danger"
                      onClick={() => handleDelete(u.id)}
                      title="Remove"
                      disabled={u.id === currentUser?.id}
                    >
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="empty-row">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="admin-note">
        Demo only. User data is stored in LocalStorage. Deletes are session-only for safety.
      </p>
    </div>
  )
}
