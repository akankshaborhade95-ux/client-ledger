import { clients } from "../data/clients";
import { calculateTotals, getStatus } from "../utils/ledgerUtils";
import ClientCard from "../components/ClientCard";

export default function ClientList() {
  let totalReceivable = 0;

  return (
    <div>
      {/* Summary bar */}
      <div className="summary">
        Total Receivables Across Clients
      </div>

      {/* Cards */}
      <div className="grid">
        {clients.map(client => {
          const totals = calculateTotals(client.transactions);

          totalReceivable += totals.balance;

          return (
            <ClientCard
              key={client.id}
              client={client}
              totals={totals}
              status={getStatus(totals.balance, client.transactions)}
            />
          );
        })}
      </div>

      <h2 style={{ marginLeft: 15 }}>
        ₹ {totalReceivable}
      </h2>
    </div>
  );
}