import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Collectors from "./pages/Collectors";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Electricity Bill Collection Management</p>
    </div>
  );
}

function Bills() {
  return (
    <div>
      <h1>Bills</h1>
      <p>Electricity bills management</p>
    </div>
  );
}

function Reports() {
  return (
    <div>
      <h1>Reports</h1>
      <p>Collection reports and performance analytics</p>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <p>System settings</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/collectors" element={<Collectors />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;