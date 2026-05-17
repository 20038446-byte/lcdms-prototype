import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("login");
  const [popup, setPopup] = useState("");
  const [search, setSearch] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [payments, setPayments] = useState([
    { program: "Sports and Fitness Camp", amount: "$20", method: "Visa Card", status: "Paid" },
  ]);

  const showPopup = (message) => {
    setPopup(message);
    setTimeout(() => setPopup(""), 2500);
  };

  const programs = [
    { title: "Youth Coding Workshop", date: "20 June 2026", place: "Community Hall", age: "15–25", category: "Education", capacity: 12, fee: "$15", details: "This program teaches basic coding, computer use, and problem solving for young community members." },
    { title: "Health Awareness Program", date: "25 June 2026", place: "Council Centre", age: "All ages", category: "Health", capacity: 30, fee: "$10", details: "This session provides health education, wellbeing advice, safety awareness, and local support information." },
    { title: "Sports and Fitness Camp", date: "30 June 2026", place: "Local Park", age: "12–20", category: "Sports", capacity: 18, fee: "$20", details: "This camp includes outdoor fitness, teamwork activities, warm-up sessions, and healthy lifestyle guidance." },
  ];

  const filteredPrograms = programs.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase()) ||
    p.place.toLowerCase().includes(search.toLowerCase())
  );

  const enrolments = [
    { name: "Youth Coding Workshop", status: "Active", attendance: "3/4 sessions attended" },
    { name: "Clean Community Event", status: "Completed", attendance: "Present" },
    { name: "Health Awareness Program", status: "Pending", attendance: "Not started" },
  ];

  const startPayment = (program) => {
    setSelectedProgram(program);
    setPage("paymentForm");
  };

  const completePayment = () => {
    setPayments([
      ...payments,
      { program: selectedProgram.title, amount: selectedProgram.fee, method: "Card Payment", status: "Paid" },
    ]);
    showPopup("Enrolled and payment successful");
    setPage("payments");
  };

  return (
    <div className="app">
      {popup && <div className="popup">✅ {popup}</div>}

      <header className="topbar">
        <div>
          <h1>LCDMS Prototype</h1>
          <p>Local Community Development Management System</p>
        </div>
        {page !== "login" && <button className="btn dark" onClick={() => setPage("login")}>Logout</button>}
      </header>

      {page === "login" && (
        <main className="login-page">
          <section className="login-card">
            <h2>Community Member Portal</h2>
            <p className="muted">Login or register to access community programs.</p>
            <label>Email</label>
            <input type="email" placeholder="member@email.com" />
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
            <button className="btn primary full" onClick={() => setPage("dashboard")}>Register as Member</button>
          </section>
        </main>
      )}

      {page === "dashboard" && (
        <main>
          <section className="hero managed-hero">
            <h2>Welcome to LCDMS Dashboard</h2>
            <p>This prototype keeps all community services organised in one simple digital platform.</p>
          </section>

          <section className="dashboard-grid">
            <button className="dashboard-btn" onClick={() => setPage("browse")}>🔍 Browse Programs<span>Search and enrol in community programs</span></button>
            <button className="dashboard-btn" onClick={() => setPage("enrolments")}>📋 My Enrolments<span>View active and past enrolments</span></button>
            <button className="dashboard-btn" onClick={() => setPage("payments")}>💳 Payments<span>Check payment history</span></button>
            <button className="dashboard-btn" onClick={() => setPage("notifications")}>🔔 Notifications<span>See latest updates</span></button>
            <button className="dashboard-btn staff-wide" onClick={() => setPage("staffMenu")}>🧾 Staff Interface<span>Open session view and activity log</span></button>
          </section>
        </main>
      )}

      {page === "browse" && (
        <main>
          <button className="btn back" onClick={() => setPage("dashboard")}>← Back to Dashboard</button>
          <h2>Browse Programs</h2>
          <section className="search-box">
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search program by name, category or location..." />
            <button className="btn primary" onClick={() => showPopup("Search completed")}>Search</button>
          </section>
          <section className="filters">
            <input placeholder="Category" />
            <input type="date" />
            <input placeholder="Location" />
            <input placeholder="Age group" />
          </section>
          <section className="grid three">
            {filteredPrograms.map((p) => (
              <article className="program-card" key={p.title}>
                <span className="badge">{p.category}</span>
                <h3>{p.title}</h3>
                <p><b>Date:</b> {p.date}</p>
                <p><b>Location:</b> {p.place}</p>
                <p><b>Age group:</b> {p.age}</p>
                <p><b>Capacity left:</b> {p.capacity}</p>
                <p><b>Fee:</b> {p.fee}</p>
                <div className="actions">
                  <button className="btn secondary" onClick={() => { setSelectedProgram(p); setPage("programDetails"); }}>View Details</button>
                  <button className="btn primary" onClick={() => startPayment(p)}>Enrol</button>
                </div>
              </article>
            ))}
          </section>
        </main>
      )}

      {page === "programDetails" && selectedProgram && (
        <main>
          <button className="btn back" onClick={() => setPage("browse")}>← Back to Browse Programs</button>
          <section className="details-card">
            <h2>{selectedProgram.title}</h2>
            <p className="muted">Program Details</p>
            <div className="info-row"><span>Category</span><b>{selectedProgram.category}</b></div>
            <div className="info-row"><span>Date</span><b>{selectedProgram.date}</b></div>
            <div className="info-row"><span>Location</span><b>{selectedProgram.place}</b></div>
            <div className="info-row"><span>Age Group</span><b>{selectedProgram.age}</b></div>
            <div className="info-row"><span>Capacity Left</span><b>{selectedProgram.capacity}</b></div>
            <div className="info-row"><span>Fee</span><b>{selectedProgram.fee}</b></div>
            <p className="details-text">{selectedProgram.details}</p>
            <button className="btn primary full" onClick={() => startPayment(selectedProgram)}>Enrol Now</button>
          </section>
        </main>
      )}

      {page === "paymentForm" && selectedProgram && (
        <main>
          <button className="btn back" onClick={() => setPage("browse")}>← Back to Browse Programs</button>
          <section className="payment-card">
            <h2>Payment Method</h2>
            <p>You are enrolling in <b>{selectedProgram.title}</b></p>
            <p><b>Total fee:</b> {selectedProgram.fee}</p>
            <label>Cardholder Name</label>
            <input placeholder="Pranish Pandit" />
            <label>Card Number</label>
            <input placeholder="1234 5678 9012 3456" />
            <div className="two-inputs">
              <div><label>Expiry Date</label><input placeholder="MM/YY" /></div>
              <div><label>CVV</label><input placeholder="123" /></div>
            </div>
            <button className="btn success full" onClick={completePayment}>Pay and Confirm Enrolment</button>
          </section>
        </main>
      )}

      {page === "enrolments" && (
        <main>
          <button className="btn back" onClick={() => setPage("dashboard")}>← Back to Dashboard</button>
          <h2>My Enrolments</h2>
          <section className="panel">
            <table>
              <thead><tr><th>Program</th><th>Status</th><th>Attendance Summary</th></tr></thead>
              <tbody>{enrolments.map((e) => <tr key={e.name}><td>{e.name}</td><td>{e.status}</td><td>{e.attendance}</td></tr>)}</tbody>
            </table>
          </section>
        </main>
      )}

      {page === "payments" && (
        <main>
          <button className="btn back" onClick={() => setPage("dashboard")}>← Back to Dashboard</button>
          <section className="panel">
            <h2>Payment History</h2>
            <table>
              <thead><tr><th>Program</th><th>Amount</th><th>Method</th><th>Status</th></tr></thead>
              <tbody>{payments.map((p, index) => <tr key={index}><td>{p.program}</td><td>{p.amount}</td><td>{p.method}</td><td>{p.status}</td></tr>)}</tbody>
            </table>
          </section>
        </main>
      )}

      {page === "notifications" && (
        <main>
          <button className="btn back" onClick={() => setPage("dashboard")}>← Back to Dashboard</button>
          <section className="panel"><h2>Notifications</h2><div className="notice">New workshop has been added this week.</div><div className="notice">Your Health Awareness Program enrolment is pending.</div><div className="notice">Sports Camp starts on 30 June 2026.</div></section>
        </main>
      )}

      {page === "staffMenu" && (
        <main>
          <button className="btn back" onClick={() => setPage("dashboard")}>← Back to Dashboard</button>
          <h2>Staff Interface</h2>
          <section className="dashboard-grid two-only">
            <button className="dashboard-btn" onClick={() => setPage("sessionView")}>📌 Program Session View<span>View program session and mark attendance</span></button>
            <button className="dashboard-btn" onClick={() => setPage("activityLog")}>📝 Activity Log Screen<span>Record activities and upload supporting info</span></button>
          </section>
        </main>
      )}

      {page === "sessionView" && (
        <main>
          <button className="btn back" onClick={() => setPage("staffMenu")}>← Back to Staff Interface</button>
          <section className="session-card full-screen-card">
            <h2>Program Session View</h2>
            <p className="muted">This screen is used to check program details and mark member attendance.</p>
            <div className="info-row"><span>Program</span><b>Youth Coding Workshop</b></div>
            <div className="info-row"><span>Date</span><b>20 June 2026</b></div>
            <div className="info-row"><span>Enrolled Members</span><b>3 Members</b></div>
            <label className="check"><input type="checkbox" defaultChecked /> Pranish Pandit — Present</label>
            <label className="check"><input type="checkbox" defaultChecked /> Sam Lee — Present</label>
            <label className="check"><input type="checkbox" /> Alex Brown — Absent</label>
            <button className="btn success full" onClick={() => showPopup("Attendance saved successfully")}>Save Attendance</button>
          </section>
        </main>
      )}

      {page === "activityLog" && (
        <main>
          <button className="btn back" onClick={() => setPage("staffMenu")}>← Back to Staff Interface</button>
          <section className="activity-card full-screen-card">
            <h2>Activity Log Screen</h2>
            <p className="muted">Staff can record daily activity details and upload event proof.</p>
            <input type="date" />
            <input placeholder="Program name" />
            <textarea placeholder="Description of activities" rows="3"></textarea>
            <input placeholder="Number of attendees" />
            <textarea placeholder="Notes" rows="3"></textarea>
            <input type="file" />
            <button className="btn success full" onClick={() => showPopup("Report submitted successfully")}>Submit Report</button>
          </section>
        </main>
      )}
    </div>
  );
}
