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
};

const test = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
};

export default async ({ endpoint }) => {
  await test();
  return data[endpoint];
};
