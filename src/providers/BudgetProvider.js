import { createContext, useEffect, useMemo, useState } from "react";
import makeCall from "../framework/DAL/makeCall";

const defaultBudgetState = { data: [] };

export const BudgetContext = createContext(defaultBudgetState);

export default ({ children }) => {
  const [budgetState, setBudgetState] = useState(defaultBudgetState);

  const getBudgetItems = async () => {
    const response = await makeCall({ endpoint: "budgetItems" });
    setBudgetState({ data: response });
  };

  const addBudgetItem = (newItem) => {
    setBudgetState((currentState) => ({
      ...currentState,
      data: [
        ...currentState.data,
        { ...newItem, id: currentState.data.length + 1 },
      ],
    }));
  };

  useEffect(() => {
    getBudgetItems();
  }, []);

  const value = useMemo(() => {
    return {
      state: budgetState,
      actions: { addBudgetItem },
    };
  }, [budgetState]);

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};
