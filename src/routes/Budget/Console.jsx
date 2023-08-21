import Card from "../../framework/components/Card";
import ProgressBar from "../../framework/components/ProgressBar";
import { display } from "../../framework/utils/money";
import { GROUP_MARKERS, TOTAL_MARKERS } from "./constants";

const Console = ({ total, totalUsed, budgets }) => {
  let totalItems = 0;
  const itemsList = Object.keys(budgets).map((category, index) => {
    const budgetGroup = budgets[category];
    totalItems += budgetGroup.items.length;
    return (
      <div key={budgetGroup.name + '-' + category} className='p2' style={{ background: index % 2 === 0 ? '#fff' : '#E9E9E9' }}>
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
          <div className="w80 row pt2 end" key={budgetGroup.name + '-' + category + '-' + budgetItem.name}>
            <div className='w30 tr'>{budgetItem.name}</div>
            <div className='w70'>
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
      <div className="row between mxa w90 vcenter">
        <div>
          $
        </div>
        {display(total)} - {display(totalUsed)} = {display(total - totalUsed)}
      </div>
      <Card>
        <div className='p2' style={{ background: '#343434' }}>
          <span className="row between p1">
            <span className="b">Total</span>
            <span />
          </span>
          <ProgressBar value={(totalUsed / total) * 100} primaryColor="#C14949" secondaryColor="#B9B9B9"/>
        </div>
        {itemsList}
      </Card>
    </div>
  );
};

export default Console;
