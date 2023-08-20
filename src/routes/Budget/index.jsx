import { useContext } from "react";
import Form from "../../framework/components/Form";
import { BudgetContext } from "../../providers/BudgetProvider";
import { display } from "../../framework/utils/money"
import Console from "./Console";
import Card from "../../framework/components/Card";
import Button from "../../framework/components/Button";

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
        items: []
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
        [curr.toLocaleLowerCase()]: formState[curr]
      }),
      {}
    );
    budgetContext.actions.addBudgetItem(newItem);
  };

  return (
    <div className="row around wrap">
      <p className="w30">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
      <Card className="w70 row v-center between">
        <p className='w70'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <span className='w30'>
          <Button label='Delete' type='danger' />
          <Button label='Save' />
        </span>
      </Card>
      <div className="w30">
        <Form
          label={(field) => <label>{field.name}</label>}
          fields={[
            { name: "Name" },
            { name: "Category", type: "select", options: Object.keys(budgets) },
            { name: "Amount", type: "number", default: 0 }
          ]}
          onSubmit={onSubmit}
          render={(renderForm, formState) => (
            <>
              {formState.Amount > 0 && (
                <span>
                  {total - totalUsed} -&gt;
                  {display(total - totalUsed - parseInt(formState.Amount))}{" "}
                </span>
              )}
              {renderForm}
            </>
          )}
        />
      </div>
      <div className="w70">
        <Console total={total} totalUsed={totalUsed} budgets={budgets} />
      </div>
    </div>
  );
};
