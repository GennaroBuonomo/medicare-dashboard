export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 style={{ color: '#2563eb', marginBottom: '4px'}}>
        MediCare Pro
      </h2>
      <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '32px' }}>
        Clinical Risk Management
      </p>

      <nav className="sidebar-nav">
        <p className="nav-item active">📊 Dashboard</p>
        <p className="nav-item">🛏️ Pazienti (Roper)</p>
        <p className="nav-item">⚠️ Deficit Cura (Orem)</p>
      </nav>
    </aside>
  );
}