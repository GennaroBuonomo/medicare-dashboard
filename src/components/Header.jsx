export default function Header({ searchTerm, onSearchChange }) {
  return (
    <header className="top-header">
      <input 
        type="text" 
        placeholder="🔍 Cerca ID o Nome Paziente..." 
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ 
          padding: '10px 16px', 
          backgroundColor: '#f4f7fb', 
          border: '1px solid #e2e8f0',
          borderRadius: '8px', 
          color: '#1e293b', 
          width: '320px',
          outline: 'none',
          fontSize: '14px'
        }} 
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          DR
        </div>
        <p><strong>Dott.ssa. Maria D'Anna</strong></p>
      </div>
    </header>
  );
}