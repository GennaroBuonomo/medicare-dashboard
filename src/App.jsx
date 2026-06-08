import './App.css'

function App() {
  return (
    <div className="dashboard-layout">

         {/* MENU LATERARE */}
      <aside className="sidebar">
        <h2 style={{ color: '#2563eb', marginBottom: '4px'}}>
          MeciCare Pro
        </h2>
        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '32px' }}>
          Clinical Risk Menagment
        </p>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontWeight: '500' }}>
          <p style={{ color: '#2563eb', cursor: 'pointer' }}>📊 Dashboard</p>
          <p style={{ color: '#64748b', cursor: 'pointer' }}>🛏️ Pazienti (Roper)</p>
          <p style={{ color: '#64748b', cursor: 'pointer' }}>⚠️ Deficit Cura (Orem)</p>
        </nav>
      </aside>
         {/* BARRA SUPERIORE */}
         <header className="top-header">
          <div style={{ padding: '8px 16px', backgroundColor: '#f4f7fb', borderRadius: '8px', color: '#64748b', width: '300px' }}>
            🔍 Cerca Paziente...
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            DR
          </div>
          <p><strong>Dott.ssa. D'Anna</strong></p>
        </div>
         </header>
           {/* AREA DATI CENTRALE */}
           <div className="main-content">
            
           </div>
    </div>
  );
}

export default App
