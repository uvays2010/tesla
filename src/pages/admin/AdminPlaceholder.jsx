export default function AdminPlaceholder({ title }) {
  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1>{title}</h1>
          <p>This module will be expanded in later stages.</p>
        </div>
        <span className="demo-badge">Coming Soon</span>
      </div>
      <div className="admin-card" style={{ padding: 40, textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 8 }}>
          {title} management interface
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
          Demo · Frontend only · LocalStorage ready
        </p>
      </div>
    </div>
  )
}
