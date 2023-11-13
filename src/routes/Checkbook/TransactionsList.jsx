import { useContext } from "react";
import { display } from "../../framework/utils/money";
import Card from "../../framework/components/containers/Card";
import TitleCap from "../../components/TitleCap";
import { StylesContext } from "../../framework/providers/StylesProvider";
import styled from "styled-components";
import kl from "../../framework/utils/klass";

const TransactionList = ({ transactions }) => {
  const { THEME } = useContext(StylesContext)?.data;
  return (
    <StyledTransacttionList shadow radius="8px 8px 0 0" $theme={THEME}>
      <TitleCap title="Transactions" bg={THEME.bgLight} />
      {transactions.map((trans, index) => (
        <Card
          key={trans.id}
          background={index % 2 === 0 ? THEME.bgMed : THEME.bgLight}
          accent={trans.type === "deposit" ? THEME.success : THEME.error}
        >
          <span className="row between wrap content">
            <span className="w50 pb1 pt1 b">{trans.name}</span>
            <span
              className={kl(
                {
                  tSuccess: trans.type === "deposit",
                  tError: trans.type === "withdraw",
                },
                "w50 tr pb1 pt1 b"
              )}
            >
              {display(trans.amount)}
            </span>
            <span className="w50 pb1 tLight">{trans.date}</span>
            <span className="w50 tr pb1 em tLight">{trans.description}</span>
          </span>
        </Card>
      ))}
    </StyledTransacttionList>
  );
};

const StyledTransacttionList = styled(Card)`
  color: ${(p) => p.$theme.text};
`;

export default TransactionList;
