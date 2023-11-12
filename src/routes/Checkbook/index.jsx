import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../providers/TransactionsProvider";
import { AccountsContext } from "../../providers/AccountsProvider";
import AccountsList from "./AccountsList";
import TransactionList from "./TransactionsList";
import AccountDataCard from "./AccountDataCard";
import { SidePanelContext } from "../../framework/providers/SidePanelProvider";

const Form = () => {
  return <form>
    test form
    <input type='text' />
    <input type='text' />
    <input type='text' />
  </form>
}

const Checkbook = () => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const transactionContext = useContext(TransactionsContext);
  const accountsContext = useContext(AccountsContext);
  const { setSidePanelState } = useContext(SidePanelContext);

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

  if (!accountsContext.getters.loaded) {
    return "Loading Accounts";
  }

  return (
    <div className="row around mt5 mb5 wrap">
      <div className="w100">
        <button onClick={() => {
          setSidePanelState({ title: 'Add Transaction', component: Form })
        }}>Add Transaction</button>
      </div>
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
