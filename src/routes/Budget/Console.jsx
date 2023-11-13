import Card from "../../framework/components/containers/Card";
import ProgressBar from "../../framework/components/ui/ProgressBar";
import Badge from "../../framework/components/ui/Badge";
import { display } from "../../framework/utils/money";
import { useContext } from "react";
import { StylesContext } from "../../framework/providers/StylesProvider";
import { styled } from "styled-components";
import klass from "../../framework/utils/klass";

const Console = ({ total, totalUsed, budgets }) => {
  const stylesState = useContext(StylesContext);

  const colors = stylesState.data.COLORS;

  let totalItems = 0;
  const groupList = Object.keys(budgets) || [];
  const itemsList = groupList.map((category, index) => {
    const budgetGroup = budgets[category];
    totalItems += budgetGroup.items.length;
    return (
      <div
        key={budgetGroup.name + "-" + category}
        className={klass(
          {
            "even-row": index % 2 === 0
          },
          "p2 content-row"
        )}
      >
        <span className="row between p1">
          <span className="b">{budgetGroup.name}</span>
          <span> {budgetGroup.items.length}</span>
        </span>
        <ProgressBar
          value={(budgetGroup.amount / total) * 100}
          secondaryColor={colors.greenLight}
          primaryColor={colors.green}
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
                secondaryColor={colors.skyBlue}
                primaryColor={colors.babyBlue}
              />
            </div>
          </div>
        ))}
      </div>
    );
  });

  return (
    <StyledConsole $colors={colors} className='br10 hideOver'>
      <div className="row between mxa bgContent">
        <Badge
          text={"$"}
          color={colors.greenLight}
          background={colors.green}
          borderRadius="0"
          padding="1rem 1.42rem"
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
            <span className="b tWhite">Total</span>
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
    </StyledConsole>
  );
};

export default Console;

const StyledConsole = styled.div`
  color: ${(p) => p.$colors.custom.darkTextGray};
  .content-row {
    background-color: ${(p) => p.$colors.lightGray};
    &.even-row {
      background-color: ${(p) => p.$colors.white};
    }
  }
`;
