import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clients } from "../data/clients";
import { withRunningBalance } from "../utils/ledgerUtils";

export default function StatementPage() {
  const { id } = useParams();

  const client = clients.find(c => c.id === Number(id));
  const rows = withRunningBalance(client.transactions);

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className="statement">
      <h2>Statement of Account</h2>
      <h3>Client: {client.name}</h3>

      {rows.map(r => (
        <p key={r.id}>
          {r.date} | {r.description} | {r.runningBalance}
        </p>
      ))}

      <p>This is a computer-generated statement and does not require signature</p>
    </div>
  );
}