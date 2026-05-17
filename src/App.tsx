# `src/main.tsx`

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

# `src/App.tsx`

```tsx
function App() {
  return (
    <div
      style={{
        fontFamily: 'Arial',
        backgroundColor: '#f4f6f9',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: '#1e3a8a',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h1>LCDMS</h1>
        <p>Local Community Development Management System</p>
      </header>

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: '#2563eb',
          padding: '15px',
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
        }}
      >
        <button>Home</button>
        <button>Programs</button>
        <button>Residents</button>
        <button>Projects</button>
        <button>Reports</button>
        <button>Contact</button>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <h2>Welcome to LCDMS</h2>
        <p>
          A digital platform designed to support local councils and
          municipalities in managing community programs and public welfare.
        </p>
      </section>

      {/* Feature Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '20px',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <h3>Community Programs</h3>
          <p>Manage local events, training, and development activities.</p>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <h3>Resident Management</h3>
          <p>Register and monitor community resident information.</p>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <h3>Reports & Analytics</h3>
          <p>Generate reports and monitor project performance easily.</p>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#1e3a8a',
          color: 'white',
          textAlign: 'center',
          padding: '15px',
          marginTop: '40px',
        }}
      >
        <p>© 2026 LCDMS Prototype | Developed for ICT103 Assignment</p>
      </footer>
    </div>
  )
}

export default App
```

---

# What to Do

1. Open GitHub repository
2. Open `src/main.tsx`
3. Replace everything with the `main.tsx` code above
4. Open `src/App.tsx`
5. Replace everything with the `App.tsx` code above
6. Click `Commit changes`
7. Wait 1 minute
8. Refresh your Vercel website
