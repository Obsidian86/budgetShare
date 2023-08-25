import { useContext } from "react";
import Form from "../../framework/components/Form";
import { BudgetContext } from "../../providers/BudgetProvider";
import { display } from "../../framework/utils/money";
import Console from "./Console";
import Card from "../../framework/components/Card";
import Button from "../../framework/components/Button";
import Badge from "../../framework/components/Badge";

export default () => {
  const budgetContext = useContext(BudgetContext);

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
    <div className="row around wrap pt4">
      <p className="w30 breakMedium">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium
      </p>
      <Card className="w70 row vcenter between breakMedium">
        <p className="w70">
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
          <div>+ Add New Item</div>
          <div style={{ background: "#343434" }}>
            $1,429.12 - $429.12 <Badge text="$1,000" />
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
            render={(renderForm, formState) => (
              <>
                {formState.Amount > 0 && (
                  <span>
                    {total - totalUsed} -&gt;
                    {display(
                      total - totalUsed - parseInt(formState.Amount)
                    )}{" "}
                  </span>
                )}
                {renderForm}
              </>
            )}
          />
        </Card>
      </div>
      <div className="w70 mt5 breakMedium">
        <Console total={total} totalUsed={totalUsed} budgets={budgets} />
      </div>
    </div>
  );
};
