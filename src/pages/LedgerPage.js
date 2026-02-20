import { useParams, Link } from "react-router-dom";
import { clients } from "../data/clients";
import { withRunningBalance } from "../utils/ledgerUtils";
import LedgerTable from "../components/LedgerTable";

export default function LedgerPage() {
  const { id } = useParams();

  const client = clients.find(c => c.id === Number(id));
  const rows = withRunningBalance(client.transactions);

  return (
    <div>
      <h2>{client.name} Ledger</h2>

      <LedgerTable rows={rows} />

      <Link to={`/statement/${id}`}>Print Statement</Link>
    </div>
  );
}