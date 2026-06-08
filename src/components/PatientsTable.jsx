export default function PatientsTable({ patients }) {
  return (
    <>
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
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td style={{ fontWeight: '600', color: '#2563eb' }}>{patient.id}</td>
                <td style={{ color: '#1e293b', fontWeight: '500' }}>{patient.name}</td>
                <td style={{ color: '#64748b' }}>{patient.department}</td>
                <td>
                  <span className={`badge ${
                    patient.riskLevel === 'high' ? 'badge-high' : 
                    patient.riskLevel === 'medium' ? 'badge-medium' : 'badge-low'
                  }`}>
                    {patient.riskLevel === 'high' ? 'Critico' : 
                     patient.riskLevel === 'medium' ? 'Attenzione' : 'Stabile'}
                  </span>
                </td>
                <td>
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
    </>
  );
}