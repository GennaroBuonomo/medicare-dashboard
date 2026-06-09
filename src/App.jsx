import { useState } from 'react';
import data from './data.json';
import './App.css';

// Importiamo i nostri nuovi moduli
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KpiCards from './components/KpiCards';
import PatientsTable from './components/PatientsTable';
import RiskChart from './components/RiskChart';

function App() {
  const [ searchTerm, setSearchTerm ] = useState('');

  // Elaborazione Dati
  const filteredPatients = data.patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPatients = data.patients.length;
  const criticalPatients = data.patients.filter(p => p.riskLevel === 'high').length;
  const stablePatients = data.patients.filter(p => p.riskLevel === 'low').length;

  return (
    <div className="dashboard-layout">
      
      <Sidebar />
      
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />

      <main className="main-content">
        <h1>Monitoraggio Reparti</h1>
        <p style={{ color: '#64748b', marginTop: '8px' }}>
          Panoramica generale sui livelli di rischio e assistenza in tempo reale.
        </p>

        <KpiCards 
          total={totalPatients} 
          critical={criticalPatients} 
          stable={stablePatients} 
        />

        <RiskChart patients={filteredPatients} />

        <PatientsTable 
          patients={filteredPatients} 
        />
      </main>

    </div>
  );
}

export default App;
