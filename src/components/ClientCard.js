import { Link } from "react-router-dom";

export default function ClientCard({ client, totals, status }) {
  return (
    <div className={`card ${status}`}>
      <h3>{client.name}</h3>

      <p>Billed: ₹{totals.totalDebit}</p>
      <p>Received: ₹{totals.totalCredit}</p>
      <p>Balance: ₹{totals.balance}</p>

      <Link to={`/ledger/${client.id}`}>View Ledger</Link>
    </div>
  );
}