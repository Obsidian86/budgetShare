import StylesProvoder from "./framework/providers/StylesProvider";
import BudgetProvider from "./providers/BudgetProvider";
import Budget from "./routes/Budget";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Footer />
      </div>
    </StylesProvoder>
  );
}
