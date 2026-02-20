// helper functions for dynamic dates
const today = new Date();
const daysAgo = (d) =>
  new Date(today.getTime() - d * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

export const clients = [

  // 🟢 GREEN (fully paid)
  {
    id: 1,
    name: "ABC Pvt Ltd",
    transactions: [
      { id: 1, date: daysAgo(20), type: "debit", description: "Invoice #1001", amount: 50000 },
      { id: 2, date: daysAgo(15), type: "credit", description: "Payment", amount: 50000 }
    ]
  },

  // 🟡 YELLOW (< 30 days pending)
  {
    id: 2,
    name: "Tech Solutions",
    transactions: [
      { id: 1, date: daysAgo(5), type: "debit", description: "Website Development", amount: 80000 },
      { id: 2, date: daysAgo(2), type: "credit", description: "Advance Payment", amount: 30000 }
    ]
  },

  // 🔴 RED (> 30 days overdue)
  {
    id: 3,
    name: "Sunrise Traders",
    transactions: [
      { id: 1, date: daysAgo(45), type: "debit", description: "ERP License", amount: 120000 },
      { id: 2, date: daysAgo(40), type: "credit", description: "Partial Payment", amount: 20000 }
    ]
  },

  // 🔴 RED (no payment, very old)
  {
    id: 4,
    name: "Global Mart",
    transactions: [
      { id: 1, date: daysAgo(60), type: "debit", description: "Inventory System", amount: 150000 }
    ]
  },

  // 🟢 GREEN (small fully paid)
  {
    id: 5,
    name: "Quick Services",
    transactions: [
      { id: 1, date: daysAgo(10), type: "debit", description: "AMC Charges", amount: 20000 },
      { id: 2, date: daysAgo(8), type: "credit", description: "Cash Payment", amount: 20000 }
    ]
  }
];