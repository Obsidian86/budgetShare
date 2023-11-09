import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../providers/TransactionsProvider";
import { AccountsContext } from "../../providers/AccountsProvider";
import AccountsList from "./AccountsList";
import Card from "../../framework/components/Card";

const Checkbook = () => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const transactionContext = useContext(TransactionsContext);
  const accountsContext = useContext(AccountsContext);

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
      <div className="w65">
        <Card radius={'8px'} shadow background={'#F0F0F0'}>
          <div className='row between content pt2 pb1'>
            <span>Account One</span>
            <span>$1,000.000</span>
          </div>
          <hr className='content' />
          <span className='tc'>Credit - 3% APY.</span>
          <div className='row between content pt2'>
            <span>1 Budget Item</span>
            <span>112 transactions</span>
          </div>
          <div className='row between content pt2 pb2'>
            <span>2 Aut transactions</span>
            <span>12 widthdraws / 100 deposits</span>
          </div>
        </Card>
        {transactions.map((trans) => (
          <div key={trans.id}>{trans.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Checkbook;
