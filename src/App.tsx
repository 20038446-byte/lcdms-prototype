function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>LCDMS - Local Community Development Management System</h1>

      <nav style={{ marginBottom: "20px" }}>
        <button>Home</button>
        <button style={{ marginLeft: "10px" }}>Programs</button>
        <button style={{ marginLeft: "10px" }}>Residents</button>
        <button style={{ marginLeft: "10px" }}>Reports</button>
        <button style={{ marginLeft: "10px" }}>Contact</button>
      </nav>

      <section>
        <h2>Welcome</h2>
        <p>
          This platform helps local councils manage community programs,
          public welfare activities, residents, and development projects.
        </p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Features</h2>
        <ul>
          <li>Community Program Management</li>
          <li>Resident Registration</li>
          <li>Event Monitoring</li>
          <li>Report Generation</li>
        </ul>
      </section>
    </div>
  )
}

export default App
