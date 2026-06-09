import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function RiskChart({ patients }) {
  // Calcolo quanti pazienti ci sono per ogni livello di rischio
  const highRisk = patients.filter(p => p.riskLevel === 'high').length;
  const medRisk = patients.filter(p => p.riskLevel === 'medium').length;
  const lowRisk = patients.filter(p => p.riskLevel === 'low').length;

  // Prepariamo i "pezzi" della torta
  const chartData = [
    { name: 'Allarmi (Alto Rischio)', value: highRisk, color: '#ef4444' },
    { name: 'Attenzione (Rischio Medio)', value: medRisk, color: '#f59e0b' },
    { name: 'Stabili (Basso Rischio)', value: lowRisk, color: '#10b981' }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '32px', height: '420px' }}>
      
      {/* Aggiungendo marginTop: '20px' spingiamo la scritta verso il basso */}
      <h3 style={{ color: '#1e293b', marginTop: '20px', marginBottom: '20px' }}>
        Distribuzione Rischio Reparti
      </h3>
      
      {/* Abbiamo messo l'altezza all'80% così il grafico si rimpicciolisce un pelo e non tocca le scritte basse */}
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%" 
            cy="45%" /* Posizione della ciambella nello spazio rimanente */
            innerRadius={70} 
            outerRadius={100}
            paddingAngle={5} 
            dataKey="value"
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} 
          /> 
          <Legend verticalAlign="bottom" height={40}/>
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}