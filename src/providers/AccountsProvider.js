import { createContext, useMemo, useState } from "react";
import makeCall from "../framework/DAL/makeCall";

const defaultAccountsState = { data: null };

export const AccountsContext = createContext(defaultAccountsState);

export default ({ children }) => {
  const [accountsState, setAccountsState] = useState(defaultAccountsState);

  const getAccountsItems = async () => {
    const response = await makeCall({ endpoint: "accountItems" });
    setAccountsState({
      data: response,
    });
  };

  const addAccountsItem = (newItem) => {
    console.log({ newItem });
  };

  const value = useMemo(() => {
    return {
      state: accountsState,
      getters: {
        data: accountsState?.data ?? [],
        loaded: accountsState?.data !== null,
        account: (accountId) =>
          (accountsState?.data ?? []).find((acc) => acc.id === accountId),
      },
      actions: { addAccountsItem, getAccountsItems },
    };
  }, [accountsState]);

  return (
    <AccountsContext.Provider value={value}>
      {children}
    </AccountsContext.Provider>
  );
};
