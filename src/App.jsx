import { useState } from 'react';
import data from './data.json';
import './App.css';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KpiCards from './components/KpiCards';
import PatientsTable from './components/PatientsTable';
import RiskChart from './components/RiskChart';
import Modal from './components/Modal';

function App() {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ patientsList, setPatientsList ] = useState(data.patients);

  const filteredPatients = patientsList.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPatients = patientsList.length;
  const criticalPatients = patientsList.filter(p => p.riskLevel === 'high').length;
  const stablePatients = patientsList.filter(p => p.riskLevel === 'low').length;

  return (
    <div className="dashboard-layout">
      
      <Sidebar />
      
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />

      <main className="main-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1>Monitoraggio Reparti</h1>
            <p style={{ color: '#64748b', marginTop: '8px' }}>
              Panoramica generale sui livelli di rischio e assistenza in tempo reale.
            </p>
          </div>
          <button 
           onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: '#2563eb', color: 'white', border: 'none', 
            padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', 
            cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
          }}>
            + Nuovo Ricovero
          </button>
        </div>

        <KpiCards 
          total={totalPatients} 
          critical={criticalPatients} 
          stable={stablePatients} 
        />

        <RiskChart patients={filteredPatients} />

        <PatientsTable 
          patients={filteredPatients} 
        />

        {/*  MODALE */}
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onSave={(newPatient) => setPatientsList([newPatient, ...patientsList])} 
        />
      </main>

    </div>
  );
}

export default App;