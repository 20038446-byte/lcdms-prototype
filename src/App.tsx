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

````tsx
function App() {
  return (
    <div className="app">
      <header className="header" id="home">
        <h1>LCDMS</h1>
        <p>Local Community Development Management System</p>
      </header>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#programs">Programs</a>
        <a href="#residents">Residents</a>
        <a href="#projects">Projects</a>
        <a href="#reports">Reports</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero">
        <h2>Welcome to LCDMS</h2>
        <p>
          LCDMS is a digital platform designed to help local councils manage
          community programs, residents, public welfare services, and development
          projects in one system.
        </p>
      </section>

      <section className="section" id="programs">
        <h2>Community Programs</h2>
        <div className="cards">
          <div className="card">
            <h3>Health Awareness</h3>
            <p>Organise health camps, awareness sessions, and public support programs.</p>
          </div>
          <div className="card">
            <h3>Skill Training</h3>
            <p>Manage training programs for youth, women, and unemployed residents.</p>
          </div>
          <div className="card">
            <h3>Community Events</h3>
            <p>Plan and monitor local events, meetings, and public activities.</p>
          </div>
        </div>
      </section>

      <section className="section" id="residents">
        <h2>Resident Management</h2>
        <p>
          Council staff can register residents, update contact details, check eligibility
          for welfare programs, and manage community records easily.
        </p>
        <table>
          <thead>
            <tr>
              <th>Resident ID</th>
              <th>Name</th>
              <th>Program</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R001</td>
              <td>John Smith</td>
              <td>Health Support</td>
              <td>Approved</td>
            </tr>
            <tr>
              <td>R002</td>
              <td>Maria Lee</td>
              <td>Skill Training</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section" id="projects">
        <h2>Development Projects</h2>
        <div className="cards">
          <div className="card">
            <h3>Road Maintenance</h3>
            <p>Track road repair and infrastructure improvement projects.</p>
          </div>
          <div className="card">
            <h3>Park Upgrade</h3>
            <p>Monitor community park cleaning, lighting, and facility updates.</p>
          </div>
          <div className="card">
            <h3>Waste Management</h3>
            <p>M# `src/App.css`

```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f6f9;
  color: #1f2937;
}

html {
  scroll-behavior: smooth;
}

.header {
  background-color: #1e3a8a;
  color: white;
  text-align: center;
  padding: 35px 20px;
}

.header h1 {
  margin: 0;
  font-size: 42px;
}

.navbar {
  background-color: #2563eb;
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
}

.navbar a {
  background-color: white;
  color: #1e3a8a;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: bold;
}

.navbar a:hover {
  background-color: #dbeafe;
}

.hero {
  text-align: center;
  padding: 50px 25px;
  background-color: white;
}

.hero p {
  max-width: 750px;
  margin: auto;
  line-height: 1.6;
}

.section {
  padding: 40px 25px;
  max-width: 1100px;
  margin: auto;
}

.section h2 {
  color: #1e3a8a;
  margin-bottom: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.card {
  background-color: white;
  padding: 22px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card h3 {
  color: #2563eb;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #d1d5db;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #1e3a8a;
  color: white;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 500px;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}

.contact-form textarea {
  height: 100px;
}

button {
  background-color: #1e3a8a;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #2563eb;
}

.footer {
  background-color: #1e3a8a;
  color: white;
  text-align: center;
  padding: 18px;
  margin-top: 30px;
}
````

---

# Updated `src/maon, budget use, and project completion status.

```
    </p>
    <ul>
      <li>Monthly program report</li>
      <li>Resident participation report</li>
      <li>Project progress report</li>
      <li>Welfare support summary</li>
    </ul>
  </section>

  <section className="section" id="contact">
    <h2>Contact Council Office</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Email Address" />
      <textarea placeholder="Write your message"></textarea>
      <button type="button">Submit Request</button>
    </form>
  </section>

  <footer className="footer">
    <p>© 2026 LCDMS Prototype | ICT103 System Analysis and Design</p>
  </footer>
</div>
```

)
}

export default App

````

---

# `src/App.css`

```css
body {
  margin: 0;
  padding: 0;
  background-color: #f4f6f9;
}

button {
  background-color: white;
  color: #1e3a8a;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #dbeafe;
}
````

---

# Updated `src/main.tsx`

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
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
