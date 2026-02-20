// calculate totals
export function calculateTotals(transactions) {
  let debit = 0;
  let credit = 0;

  transactions.forEach(t => {
    if (t.type === "debit") debit += t.amount;
    else credit += t.amount;
  });

  return {
    totalDebit: debit,
    totalCredit: credit,
    balance: debit - credit
  };
}


// running balance
export function withRunningBalance(transactions) {
  let balance = 0;

  return transactions.map(t => {
    if (t.type === "debit") balance += t.amount;
    else balance -= t.amount;

    return { ...t, runningBalance: balance };
  });
}


// aging color
export function getStatus(balance, transactions) {
  if (balance === 0) return "green";

  const today = new Date();

  const debitTx = transactions.filter(t => t.type === "debit");

  if (debitTx.length === 0) return "yellow";

  const oldest = new Date(debitTx[0].date);

  const diffDays =
    (today - oldest) / (1000 * 60 * 60 * 24);

  if (diffDays > 30) return "red";

  return "yellow";
}