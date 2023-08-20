import Card from "../../framework/components/Card";
import ProgressBar from "../../framework/components/ProgressBar";
import { display } from "../../framework/utils/money";
import { GROUP_MARKERS, TOTAL_MARKERS } from "./constants";

const Console = ({ total, totalUsed, budgets }) => {
  let totalItems = 0;
  const itemsList = Object.keys(budgets).map((category) => {
    const budgetGroup = budgets[category];
    totalItems += budgetGroup.items.length;
    return (
      <div key={budgetGroup.name + '-' + category}>
        <span className="row between p1">
          <span className="b">{budgetGroup.name}</span>
          <span> {budgetGroup.items.length}</span>
        </span>
        <ProgressBar
          value={(budgetGroup.amount / total) * 100}
          markers={GROUP_MARKERS}
        />
        <div
          className="p1"
          style={{
            marginTop: "5px"
          }}
        >
          {budgetGroup.items.map((budgetItem) => (
            <span
              key={budgetGroup.name + '-' + category + '-' + budgetItem.name}
              style={{
                marginRight: ".5rem",
                padding: ".3rem .55rem",
                borderRadius: "15px",
                backgroundColor: "#c8c8c8",
                color: "#333",
                fontWeight: "600",
                boxShadow: "inset 0 0 3px rgba(0,0,0,.2)"
              }}
            >
              {budgetItem.name} {display(budgetItem.amount)}
            </span>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div className="p2">
      <div
        className="row between mxa w90 v-center"
        style={{ backgroundColor: "#fff", paddingRight: "2rem" }}
      >
        <div
          style={{
            backgroundColor: "green",
            padding: "1rem 1.35rem",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.2rem"
          }}
        >
          $
        </div>
        {display(total)} - {display(totalUsed)} = {display(total - totalUsed)}
      </div>
      <Card className="mt1" background="#d9d9d9">
        <div>
          <span className="row between p1">
            <span className="b">Total</span>
            <span>{totalItems}</span>
          </span>
          <ProgressBar
            value={(totalUsed / total) * 100}
            markers={TOTAL_MARKERS}
          />
        </div>
        {itemsList}
      </Card>
    </div>
  );
};

export default Console;
