import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../providers/TransactionsProvider";
import { AccountsContext } from "../../providers/AccountsProvider";
import AccountsList from "./AccountsList";
import TransactionList from "./TransactionsList";
import AccountDataCard from "../../components/AccountDataCard";
import { SidePanelContext } from "../../framework/providers/SidePanelProvider";
import Controls from "../../components/Controls";
import Field from "../../framework/components/form/Field";
import Card from "../../framework/components/containers/Card";
import Icon from "../../framework/components/ui/Icon";

// id: trans,
// name: `trans ${trans}`,
// description: "this is a test descr",
// amount: `${trans * Math.random()}`,
// date: "11/14/2023",
// type: oneOf(transTypes)

const Form = ({ selectedAccountData }) => {
  const formHandler = useState({});
  return (
    <form>
      <h4 className="b tMed mt1 tSuccess">
        <Icon icon='plus' />
        <span className="pl1">Adding transaction for account {selectedAccountData.name}</span>
      </h4>
      <Card className="p1" shadow radius="6px" title='Transaction'>
        <Field name="name" label="Name" formHandler={formHandler} />
        <Field name="amount" label="Amount" formHandler={formHandler} />
        <Field name="type" label="Transaction Type" formHandler={formHandler} margin='0 0 5px 0' />
      </Card>
      <Card className="p1 mt2" shadow radius="6px" title='Additional details'>
        <Field name="date" label="Date" formHandler={formHandler} />
        <Field
          name="description"
          label="Description"
          margin='0 0 5px 0'
          formHandler={formHandler}
        />
      </Card>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log({ formHandler });
        }}
      >
        TEST
      </button>
    </form>
  );
};

const controlPanelLink = {
  "Add Transaction": (props = {}) => <Form {...props} />,
  "Add Account": (props = {}) => <Form {...props} />,
};

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

  const selectedAccountData = accountsContext.getters.account(selectedAccount);

  return (
    <div className="row around mt5 mb5 wrap">
      <div className="w100">
        <Controls
          controls={Object.keys(controlPanelLink).map((label) => ({
            label,
            icon: "plus",
            action: () =>
              setSidePanelState({
                title: label,
                props: { selectedAccountData },
                component: controlPanelLink[label],
              }),
          }))}
        />
      </div>
      <div className="w30">
        <AccountsList
          accounts={accounts}
          setSelectedAccount={setSelectedAccount}
          selectedAccount={selectedAccount}
        />
      </div>
      <section className="w65">
        <AccountDataCard accountId={selectedAccount} />
        <TransactionList transactions={transactions} />
      </section>
    </div>
  );
};

export default Checkbook;
