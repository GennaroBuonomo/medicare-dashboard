import { useState } from 'react';

export default function Modal({ isOpen, onClose, onSave }) {
  // Stato locale per memorizzare i dati inseriti nel form
  const [formData, setFormData] = useState({
    name: '',
    department: 'Cardiologia',
    riskLevel: 'low',
    roperScore: 12
  });

  // Se il modale è chiuso (isOpen = false), non renderizziamo nulla
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina
    
    // Creiamo un finto ID casuale per il nuovo paziente
    const newPatient = {
      ...formData,
      id: `PT-${Math.floor(Math.random() * 10000)}`,
      lastUpdate: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
    };
    
    onSave(newPatient); // Passiamo i dati al file genitore (App.jsx)
    onClose();          // Chiudiamo il modale
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: 'white', padding: '32px', borderRadius: '12px',
        width: '400px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ marginTop: 0, color: '#1e293b' }}>Nuovo Ricovero</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>Nome e Cognome</label>
            <input required type="text" style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', boxSizing: 'border-box', outline: 'none' }}
              onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>Reparto</label>
            <select style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', outline: 'none' }}
              onChange={(e) => setFormData({...formData, department: e.target.value})}>
              <option value="Cardiologia">Cardiologia</option>
              <option value="Terapia Intensiva">Terapia Intensiva</option>
              <option value="Neurologia">Neurologia</option>
              <option value="Pronto Soccorso">Pronto Soccorso</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>Livello Rischio</label>
              <select style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', outline: 'none' }}
                onChange={(e) => setFormData({...formData, riskLevel: e.target.value})}>
                <option value="low">Stabile</option>
                <option value="medium">Attenzione</option>
                <option value="high">Critico</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>Score Roper (0-12)</label>
              <input required type="number" min="0" max="12" defaultValue="12" style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', boxSizing: 'border-box', outline: 'none' }}
                onChange={(e) => setFormData({...formData, roperScore: parseInt(e.target.value)})} />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
            <button type="button" onClick={onClose} style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: 'white', cursor: 'pointer', fontWeight: '500' }}>Annulla</button>
            <button type="submit" style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', backgroundColor: '#2563eb', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>Salva Paziente</button>
          </div>
          
        </form>
      </div>
    </div>
  );
}