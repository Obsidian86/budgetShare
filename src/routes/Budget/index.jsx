import { useContext, useState } from "react";
import { BudgetContext } from "../../providers/BudgetProvider";
import { StylesContext } from "../../framework/providers/StylesProvider";
import Form from "../../framework/components/Form";
import { display } from "../../framework/utils/money";
import Console from "./Console";
import Card from "../../framework/components/Card";
import Button from "../../framework/components/Button";
import Badge from "../../framework/components/Badge";

export default () => {
  const budgetContext = useContext(BudgetContext);
  const stylesState = useContext(StylesContext);

  const colors = stylesState.data.COLORS;

  const total = 8000;
  let totalUsed = 0;
  const budgets = budgetContext.state.data.reduce((prev, curr) => {
    const category = curr.category || "None";
    if (!prev[category]) {
      prev[category] = {
        name: category,
        amount: 0,
        items: [],
      };
    }
    prev[category].items.push(curr);
    totalUsed = totalUsed + curr.amount;
    prev[category].amount += curr.amount;
    return prev;
  }, {});

  const onSubmit = (formState) => {
    const newItem = Object.keys(formState).reduce(
      (prev, curr) => ({
        ...prev,
        [curr.toLocaleLowerCase()]: formState[curr],
      }),
      {}
    );
    budgetContext.actions.addBudgetItem(newItem);
  };

  return (
    <div className="row around wrap pt4 pb6">
      <p className="w30 tPrimary b breakMedium">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium
      </p>
      <Card className="w65 row vcenter between breakMedium">
        <p className="w70 tPrimary p2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium
        </p>
        <span className="w30">
          <Button label="Delete" type="danger" />
          <Button label="Save" />
        </span>
      </Card>
      <div className="w30 mt5 breakMedium">
        <Card>
          <div className="bgSuccess row between p2 b">
            <span>+</span>
            <span>Add New Item</span>
          </div>
          <Form
            label={(field) => <label>{field.name}</label>}
            fields={[
              { name: "Name" },
              {
                name: "Category",
                type: "select",
                options: Object.keys(budgets),
              },
              { name: "Amount", type: "number", default: 0 },
            ]}
            onSubmit={onSubmit}
            render={(renderForm, formState) => {
              const remaining = total - (formState.Amount || 0);
              return (
                <>
                  <div
                    style={{ background: colors.darkGray }}
                    className="tWhite b tr"
                  >
                    <div className="p2">
                      <span className="pr1">
                        {display(total)} - {display(formState.Amount || 0)}
                      </span>
                      <Badge
                        text={display(remaining)}
                        background={
                          remaining < 0 ? colors.red : colors.babyBlue
                        }
                      />
                    </div>
                  </div>
                  {renderForm}
                </>
              );
            }}
          />
        </Card>
      </div>
      <div className="w65 mt5 breakMedium">
        <Console total={total} totalUsed={totalUsed} budgets={budgets} />
      </div>
    </div>
  );
};
