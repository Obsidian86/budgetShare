import { useContext } from "react";
import { display } from "../../framework/utils/money";
import Card from "../../framework/components/Card";
import TitleCap from "../../components/TitleCap";
import { StylesContext } from "../../framework/providers/StylesProvider";

const TransactionList = ({ transactions }) => {
    const { THEME } = useContext(StylesContext)?.data
    return (
      <>
        <TitleCap title="Transactions" bg={THEME.bgLight} />
        {transactions.map((trans, index) => (
          <Card
            key={trans.id}
            background={index % 2 === 0 ? THEME.bgMed: THEME.bgLight}
          >
            <span className="row between wrap content">
              <span className="w50 pb1 pt1 b">{trans.name}</span>
              <span className="w50 tr pb1 pt1">{display(trans.amount)}</span>
              <span className="w50 pb1">{trans.date}</span>
              <span className="w50 tr pb1 em">{trans.description}</span>
            </span>
          </Card>
        ))}
      </>
    );
  };

export default TransactionList