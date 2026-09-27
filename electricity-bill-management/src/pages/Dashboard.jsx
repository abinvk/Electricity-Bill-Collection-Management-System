import collectors from "../data/collectors";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Electricity Bill Collection Management</p>

      <div className="stats">
        <div className="stat-card">
          <p>Total Bills</p>
          <h2>12,540</h2>
        </div>

        <div className="stat-card">
          <p>Collected</p>
          <h2>10,820</h2>
        </div>

        <div className="stat-card">
          <p>Pending Bills</p>
          <h2>1,720</h2>
        </div>

        <div className="stat-card">
          <p>Collectors</p>
          <h2>24</h2>
        </div>
      </div>

      <div className="chart-card">
        <h2>Collector Performance</h2>

        {collectors.map((collector) => {
          const performance =
            (collector.completed / collector.target) * 100;

          return (
            <div className="performance-row" key={collector.id}>
              <div className="performance-info">
                <span>{collector.name}</span>
                <span>{performance.toFixed(0)}%</span>
              </div>

              <div className="progress-bg">
                <div
                  className="progress-bar"
                  style={{ width: `${performance}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;