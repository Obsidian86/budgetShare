import React from "react";
import TitleCap from "../../components/TitleCap";
import Card from "../../framework/components/containers/Card";
import { StylesContext } from "../../framework/providers/StylesProvider";

const AccountDataCard = () => {
  const { THEME } = React.useContext(StylesContext)?.data;
  return (
    <Card radius={"8px"} shadow background={THEME.bgLight} className="mb2">
      <TitleCap title="Account One" bg={THEME.bgLight} sep>
        $1,000.000
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
