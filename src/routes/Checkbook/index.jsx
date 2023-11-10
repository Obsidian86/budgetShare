import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../providers/TransactionsProvider";
import { AccountsContext } from "../../providers/AccountsProvider";
import AccountsList from "./AccountsList";
import Card from "../../framework/components/Card";
import TransactionList from "./TransactionsList";
import TitleCap from "../../components/TitleCap";
import { StylesContext } from "../../framework/providers/StylesProvider";
import AccountDataCard from "./AccountDataCard";

const Checkbook = () => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const transactionContext = useContext(TransactionsContext);
  const accountsContext = useContext(AccountsContext);
  const { THEME } = useContext(StylesContext)?.data

  const transactions = transactionContext.getters.data(selectedAccount);
  const accounts = accountsContext.getters.data;

  useEffect(() => {
    selectedAccount &&
      transactionContext.actions.getTransactionsItems(selectedAccount);
  }, [selectedAccount]);

  useEffect(() => {
    accountsContext.actions.getAccountsItems();
  }, []);

  useEffect(() => {
    if (!selectedAccount && accounts.length > 0) {
      setSelectedAccount(accounts[0].id);
    }
  }, [accounts]);

  console.log({ transactionContext, accountsContext });

  if (!accountsContext.getters.loaded) {
    return "Loading Accounts";
  }

  return (
    <div className="row around mt5 mb5">
      <div className="w30">
        <AccountsList
          accounts={accounts}
          setSelectedAccount={setSelectedAccount}
          selectedAccount={selectedAccount}
        />
      </div>
      <section className="w65">
        <AccountDataCard />
        <TransactionList transactions={transactions} />
      </section>
    </div>
  );
};

export default Checkbook;
