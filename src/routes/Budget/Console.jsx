import Card from "../../framework/components/Card";
import ProgressBar from "../../framework/components/ProgressBar";
import Badge from "../../framework/components/Badge";
import { display } from "../../framework/utils/money";
import { useContext } from "react";
import { StylesContext } from "../../framework/providers/StylesProvider";

const Console = ({ total, totalUsed, budgets }) => {
  const stylesState = useContext(StylesContext);

  const colors = stylesState.data.COLORS;

  let totalItems = 0;
  const itemsList = Object.keys(budgets).map((category, index) => {
    const budgetGroup = budgets[category];
    totalItems += budgetGroup.items.length;
    return (
      <div
        key={budgetGroup.name + "-" + category}
        className="p2"
        style={{ background: index % 2 === 0 ? "#fff" : "#E9E9E9" }}
      >
        <span className="row between p1">
          <span className="b">{budgetGroup.name}</span>
          <span> {budgetGroup.items.length}</span>
        </span>
        <ProgressBar
          value={(budgetGroup.amount / total) * 100}
          secondaryColor="#C0D9C7"
          primaryColor="#179B54"
        />
        {budgetGroup.items.map((budgetItem) => (
          <div
            className="w80 row pt2 end"
            key={budgetGroup.name + "-" + category + "-" + budgetItem.name}
          >
            <div className="w30 tr">{budgetItem.name}</div>
            <div className="w70">
              <ProgressBar
                value={(budgetItem.amount / budgetGroup.amount) * 100}
                secondaryColor="#B2E0EE"
                primaryColor="#54ACD1"
              />
            </div>
          </div>
        ))}
      </div>
    );
  });

  return (
    <div className="p2">
      <div className="row between mxa bgContent">
        <Badge
          text={'$'}
          color={colors.greenLight}
          background={colors.green}
          borderRadius="0"
          padding='1rem 1.42rem'
        />
        <div className="p1">
          <span className="pr1 b">
            {display(total)}{" "}
            <span className="tError">- {display(totalUsed)}</span>
          </span>
          <Badge
            text={display(total - totalUsed)}
            color={colors.greenLight}
            background={colors.green}
          />
        </div>
      </div>
      <Card>
        <div className="p2" style={{ background: colors.darkGray }}>
          <span className="row between p1">
            <span className="b">Total</span>
            <span />
          </span>
          <ProgressBar
            value={(totalUsed / total) * 100}
            primaryColor={colors.red}
            secondaryColor={colors.medGray2}
          />
        </div>
        {itemsList}
      </Card>
    </div>
  );
};

export default Console;
