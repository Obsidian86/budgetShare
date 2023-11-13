import { randomInt } from '../utils/numbers'
 
const transTypes = ['deposit', 'withdraw']
const budgetTypes = ["Housing", "Entertainment", "Transportation", "Food", "Other"]
const accountTypes = ["Checking", "Savings"]

const oneOf = (options = []) => {
  return options[randomInt(options.length)]
}

const transactions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
  (trans) => ({
    id: trans,
    name: `trans ${trans}`,
    description: "this is a test descr",
    amount: `${trans * Math.random()}`,
    date: "11/14/2023",
    type: oneOf(transTypes)
  })
);

const accounts = [1, 2, 3, 4, 5, 6, 7].map((trans) => ({
  id: trans,
  name: `acc ${trans}`,
  value: trans * 100,
  type: oneOf(accountTypes),
  description: "this is a test descr for account",
}));

const data = {
  budgetItems: [
    { id: 1, name: "rent", amount: 2100.23, category: oneOf(budgetTypes) },
    { id: 2, name: "nf", amount: 15.53, category: oneOf(budgetTypes) },
    { id: 3, name: "car", amount: 400, category: oneOf(budgetTypes) },
    { id: 4, name: "gas", amount: 83.23, category: oneOf(budgetTypes) },
    { id: 5, name: "repair", amount: 13.14, category: oneOf(budgetTypes) },
    { id: 6, name: "music", amount: 23.13, category: oneOf(budgetTypes) },
    { id: 7, name: "music", amount: 23.13, category: oneOf(budgetTypes) },
  ],
  transactionItems: transactions,
  accountItems: accounts,
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
