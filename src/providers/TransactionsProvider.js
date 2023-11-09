import { createContext, useEffect, useMemo, useState } from "react";
import makeCall from "../framework/DAL/makeCall";

const defaultTransactionsState = { data: {} };

export const TransactionsContext = createContext(defaultTransactionsState);

export default ({ children }) => {
    const [transactionsState, setTransactionsState] = useState(defaultTransactionsState);

    const getTransactionsItems = async (accountId) => {
        const response = await makeCall({ endpoint: "transactionItems" });
        setTransactionsState({
            data: { ...transactionsState.data, [accountId]: response }
        });
    };

    const addTransactionsItem = (newItem) => {
        console.log({ newItem })
    };

    const value = useMemo(() => {
        return {
            state: transactionsState,
            getters: {
                data: (accountId) => transactionsState?.data?.[accountId] ?? []
            },
            actions: { addTransactionsItem, getTransactionsItems },
        };
    }, [transactionsState]);

    return (
        <TransactionsContext.Provider value={value}>{children}</TransactionsContext.Provider>
    );
};
