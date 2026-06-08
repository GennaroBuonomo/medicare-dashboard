import data from './data.json';
import './App.css'

function App() {
  //Calcoliamo i dati in tempo reale dal JSON
  const totalPatients = data.patients.length;
  const criticalPatients = data.patients.filter(p => p.riskLevel === 'high').length;
  const stablePatients = data.patients.filter(p => p.riskLevel === 'low').length;

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
          <p><strong>Dott.ssa. Maria D'Anna</strong></p>
        </div>
         </header>
           {/* AREA DATI CENTRALE */}
           <main className="main-content">
            <h1>Monitoraggio Reparti</h1>
            <p style={{ color: '#64748b', marginTop: '8px' }}>
              Panoramica generale sui livelli di riscio e assistenza in tempo reale.
            </p>
            {/* LA GRIGLIA DELLE CARD (KPI) */}
        <div style={{ display: 'flex', gap: '24px', marginTop: '32px' }}>
          
          {/* Card 1: Totale Pazienti (Blu) */}
          <div style={{ flex: 1, backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '4px solid #2563eb' }}>
            <h3 style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Totale Ricoveri</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e293b' }}>{totalPatients}</p>
          </div>
          
          {/* Card 2: Pazienti Critici (Rosso) */}
          <div style={{ flex: 1, backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '4px solid #ef4444' }}>
            <h3 style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Allarmi (Alto Rischio)</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#ef4444' }}>{criticalPatients}</p>
          </div>

          {/* Card 3: Pazienti Stabili (Verde) */}
          <div style={{ flex: 1, backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pazienti Stabili</h3>
            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e293b' }}>{stablePatients}</p>
          </div>

        </div>
        {/* LISTA PAZIENTI (Sotto le card) */}
        <h2 style={{ marginTop: '40px', marginBottom: '16px', color: '#1e293b', fontSize: '20px' }}>
          Dettaglio Pazienti
        </h2>
        
        <div className="table-container">
          <table className="patients-table">
            <thead>
              <tr>
                <th>ID Paziente</th>
                <th>Nome</th>
                <th>Reparto</th>
                <th>Livello Rischio</th>
                <th>Score (Roper)</th>
                <th>Aggiornamento</th>
              </tr>
            </thead>
            <tbody>
              {/* Il magico .map() di React per generare le righe dal nostro file JSON */}
              {data.patients.map((patient) => (
                <tr key={patient.id}>
                  <td style={{ fontWeight: '600', color: '#2563eb' }}>{patient.id}</td>
                  <td style={{ color: '#1e293b', fontWeight: '500' }}>{patient.name}</td>
                  <td style={{ color: '#64748b' }}>{patient.department}</td>
                  <td>
                    {/* Logica condizionale per assegnare la classe del badge corretto */}
                    <span className={`badge ${
                      patient.riskLevel === 'high' ? 'badge-high' : 
                      patient.riskLevel === 'medium' ? 'badge-medium' : 'badge-low'
                    }`}>
                      {patient.riskLevel === 'high' ? 'Critico' : 
                       patient.riskLevel === 'medium' ? 'Attenzione' : 'Stabile'}
                    </span>
                  </td>
                  <td>
                    {/* Evidenziamo in rosso se lo score di Roper è troppo basso (< 6) */}
                    <strong style={{ color: patient.roperScore < 6 ? '#ef4444' : '#1e293b' }}>
                      {patient.roperScore} / 12
                    </strong>
                  </td>
                  <td style={{ color: '#64748b' }}>{patient.lastUpdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
           </main>

    </div>
  );
}

export default App
