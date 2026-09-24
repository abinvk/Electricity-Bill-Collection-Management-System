import collectors from "../data/collectors";

function Collectors() {
  return (
    <div>
      <h1>Collectors</h1>
      <p>Manage bill collectors and their performance</p>

      <div className="collector-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Area</th>
              <th>Target</th>
              <th>Completed</th>
              <th>Pending</th>
              <th>Performance</th>
            </tr>
          </thead>

          <tbody>
            {collectors.map((collector) => {
              const performance =
                (collector.completed / collector.target) * 100;

              return (
                <tr key={collector.id}>
                  <td>{collector.id}</td>
                  <td>{collector.name}</td>
                  <td>{collector.area}</td>
                  <td>{collector.target}</td>
                  <td>{collector.completed}</td>
                  <td>{collector.pending}</td>
                  <td>{performance.toFixed(0)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Collectors;