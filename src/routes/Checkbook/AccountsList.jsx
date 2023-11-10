import styled from "styled-components";
import kl from "../../framework/utils/klass";
import { display } from "../../framework/utils/money";
import TitleCap from "../../components/TitleCap";

const AccountsList = ({ accounts, setSelectedAccount, selectedAccount }) => {
  let total = 0;

  const accountList = accounts.map((account) => {
    total += account.value;
    return (
      <div
        key={account.id}
        onClick={() => setSelectedAccount(account.id)}
        className={kl(
          { "account-selected": selectedAccount === account.id },
          "account-list-item row between p2"
        )}
      >
        <span>{account.name}</span>
        <span className="tr">
          <span className="account-value mb1">{display(account.value)}</span>
          <span className="em">{account.type}</span>
        </span>
      </div>
    );
  });

  return (
    <StyledAccountsList>
      <TitleCap title="Accounts" color="#0B5652" bg="#75C1BD">
        {display(total)}
      </TitleCap>
      {accountList}
    </StyledAccountsList>
  );
};

export default AccountsList;

const StyledAccountsList = styled.section`
  .account-list-item {
    font-weight: bold;
    background-color: #fff;
    cursor: pointer;
    position: relative;
    transition: all 0.1s;
    z-index: 1;
    color: #585353;
    &:nth-child(odd) {
      background-color: #e9e9e9;
    }
    &.account-selected {
      background-color: #343434;
      color: #fff;
    }
    .account-value {
      color: #179b54;
      display: block;
    }
    &:hover:not(.account-selected) {
      box-shadow: 0 0 23px rgba(0, 0, 0, 0.3);
      background-color: #fff;
      z-index: 2;
      padding: 1rem 0.5rem;
      width: calc(96% + 15px);
      margin-left: -5px;
    }
  }
`;
