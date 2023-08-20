import BudgetProvider from "./providers/BudgetProvider";
import StylesProvoder from "./providers/StylesProvider";
import Budget from "./routes/Budget";
import Header from "./components/Header";

export default function App() {
  return (
    <StylesProvoder>
      <div className="App">
        <Header />
        <BudgetProvider>
          <div className="content">
            <Budget />
          </div>
        </BudgetProvider>
      </div>
    </StylesProvoder>
  );
}
