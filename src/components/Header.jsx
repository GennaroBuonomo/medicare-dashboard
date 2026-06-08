export default function Header({ searchTerm, onSearchChange }) {
  return (
    <header className="top-header">
      
      <input 
        className="header-search"
        type="text" 
        placeholder="🔍 Cerca ID o Nome Paziente..." 
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          MD
        </div>
        <p><strong>Dott.ssa. Maria D'Anna</strong></p>
      </div>
      
    </header>
  );
}