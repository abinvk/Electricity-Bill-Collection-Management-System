import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Collectors from "./pages/Collectors";
import Bills from "./pages/Bills";

function Reports() {
  return (
    <div>
      <h1>Reports</h1>
      <p>Collection reports and analytics</p>
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
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/dashboard" replace />}
            />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/collectors" element={<Collectors />} />

            <Route path="/bills" element={<Bills />} />

            <Route path="/reports" element={<Reports />} />

            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;