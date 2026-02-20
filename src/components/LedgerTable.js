export default function LedgerTable({ rows }) {
  if (!rows || rows.length === 0) return <p>No data</p>;

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Debit</th>
          <th>Credit</th>
          <th>Running Balance</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((r) => (
          <tr key={r.id}>
            <td>{r.date}</td>
            <td>{r.description}</td>
            <td>{r.type === "debit" ? r.amount : ""}</td>
            <td>{r.type === "credit" ? r.amount : ""}</td>
            <td>{r.runningBalance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}