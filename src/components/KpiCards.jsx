export default function KpiCards({ total, critical, stable }) {
  return (
    <div className="kpi-container">
      
      <div className="kpi-card border-blue">
        <h3 style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Totale Ricoveri</h3>
        <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e293b' }}>{total}</p>
      </div>
      
      <div className="kpi-card border-red">
        <h3 style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Allarmi (Alto Rischio)</h3>
        <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#ef4444' }}>{critical}</p>
      </div>

      <div className="kpi-card border-green">
        <h3 style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pazienti Stabili</h3>
        <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e293b' }}>{stable}</p>
      </div>

    </div>
  );
}