import React, { useContext } from "react";
import TitleCap from "./TitleCap";
import Card from "../framework/components/containers/Card";
import { StylesContext } from "../framework/providers/StylesProvider";
import { TransactionsContext } from "../providers/TransactionsProvider";
import { AccountsContext } from "../providers/AccountsProvider";
import { display } from "../framework/utils/money";
import kl from "../framework/utils/klass";

const AccountDataCard = ({ accountId }) => {
  const accountsContext = useContext(AccountsContext);
  const { THEME } = useContext(StylesContext)?.data;

  if (!accountId) return null;

  const accountData = accountsContext?.getters?.account(accountId);

  const value = accountData.value
  const isValue = value >= 0

  return (
    <Card radius={"8px"} shadow background={THEME.bgLight} className="mb2">
      <TitleCap title="Account One" bg={THEME.bgLight} sep>
        <span
          className={kl(
            {
              tSuccess: isValue,
              tError: !isValue,
            },
            "b"
          )}
        >
          {display(value)}
        </span>
      </TitleCap>
      <div className="tc w100 pt1">Credit - 3% APY.</div>
      <div className="row between content pt1">
        <span>1 Budget Item</span>
        <span>112 transactions</span>
      </div>
      <div className="row between content pt2 pb2">
        <span>2 Auto transactions</span>
        <span>12 widthdraws / 100 deposits</span>
      </div>
    </Card>
  );
};

export default AccountDataCard;
