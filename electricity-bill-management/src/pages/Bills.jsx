import bills from "../data/bills";

function Bills() {
  return (
    <div>
      <h1>Bills</h1>
      <p>Manage electricity bills and collection status</p>

      <div className="bills-table">
        <table>
          <thead>
            <tr>
              <th>Bill ID</th>
              <th>Consumer</th>
              <th>Area</th>
              <th>Amount</th>
              <th>Collector</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td>{bill.id}</td>
                <td>{bill.consumerName}</td>
                <td>{bill.area}</td>
                <td>₹{bill.amount}</td>
                <td>{bill.collector}</td>
                <td>{bill.dueDate}</td>
                <td>
                  <span className={`status ${bill.status.toLowerCase()}`}>
                    {bill.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bills;