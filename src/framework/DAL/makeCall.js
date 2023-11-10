const transactions = [1, 2, 3, 4, 5, 6, 7].map((trans) => ({
  id: trans,
  name: `trans ${trans}`,
  description: "this is a test descr",
  amount: `${trans * Math.random()}`,
  date: '11/14/2023'
}));

const accounts = [1, 2, 3, 4, 5, 6, 7].map((trans) => ({
  id: trans,
  name: `acc ${trans}`,
  value: trans * 100,
  type: trans % 2 === 0 ? 'Checking' : 'Savings',
  description: "this is a test descr for account",
}));

const data = {
  budgetItems: [
    { id: 1, name: "rent", amount: 2100.23, category: "Housing" },
    { id: 2, name: "nf", amount: 15.53, category: "Entertainment" },
    { id: 3, name: "car", amount: 400, category: "Transportation" },
    { id: 4, name: "gas", amount: 83.23, category: "Transportation" },
    { id: 5, name: "repair", amount: 13.14, category: "Transportation" },
    { id: 6, name: "music", amount: 23.13, category: "Entertainment" },
    { id: 7, name: "music", amount: 23.13, category: "Other" },
  ],
  transactionItems: transactions,
  accountItems: accounts
};

const test = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 10);
  });
};

export default async ({ endpoint }) => {
  await test();
  return data[endpoint];
};
