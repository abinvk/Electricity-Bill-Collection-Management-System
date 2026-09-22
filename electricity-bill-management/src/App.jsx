import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";

function App() {
  return (
    <div>
      <Sidebar />

      <main>
        <h1>Dashboard</h1>
        <p>Electricity Bill Collection Management</p>

        <div className="stats">
          <StatCard title="Total Bills" value="12,540" />
          <StatCard title="Collected" value="10,820" />
          <StatCard title="Pending Bills" value="1,720" />
          <StatCard title="Collectors" value="24" />
        </div>
      </main>
    </div>
  );
}

export default App;