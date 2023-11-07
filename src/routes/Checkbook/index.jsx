const Checkbook = () => {
  const accounts = [
    { name: "account 1", id: 1 },
    { name: "account 2", id: 2 },
  ];

  const transactions = [1, 2, 3, 4, 5, 6, 7].map((trans) => ({
    id: trans,
    name: `trans ${trans}`,
    description: "this is a test descr",
  }));

  return (
    <div>
      {transactions.map((trans) => (
        <div key={trans.id}>{trans.name}</div>
      ))}
    </div>
  );
};

export default Checkbook;
