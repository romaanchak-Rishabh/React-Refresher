import { useState } from 'react'

function App() {
  // Mock data representing incoming stream configurations
  const [pipelines] = useState([
    { id: "PL-101", name: "Snowflake_Sales_Ingest", status: "success", records: 45000 },
    { id: "PL-102", name: "Databricks_User_Logs", status: "failed", records: 0 },
    { id: "PL-103", name: "S3_Financial_Raw", status: "success", records: 120000 },
  ])
  let [filter, setFilter] = useState("all");

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
      <h1>Pipeline Monitoring Console</h1>
      <button onClick={() => setFilter("all")}>Show All</button>
      <button onClick={() => setFilter("failed")}>Show Failed</button>
      <button onClick={() => setFilter("success")}>Show Success</button>
      
      <div style={{ marginTop: '20px' }}>
        {/* We use .map() to loop over the array and return JSX for each item */}
        {pipelines.filter((pipe) => filter === 'all' ? true : pipe.status == filter).map((pipe) => (
          <div 
            key={pipe.id} 
            style={{
              backgroundColor: '#fff',
              padding: '15px',
              borderRadius: '6px',
              marginBottom: '12px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              borderLeft: pipe.status === 'success' ? '5px solid #2ecc71' : '5px solid #e74c3c'
            }}
          >
            <h3>{pipe.name} <span style={{ fontSize: '0.8em', color: '#7f8c8d' }}>({pipe.id})</span></h3>
            <p>Status: <strong style={{ color: pipe.status === 'success' ? '#2ecc71' : '#e74c3c' }}>{pipe.status.toUpperCase()}</strong></p>
            <p>Records Processed: <strong>{pipe.records.toLocaleString()}</strong></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App