import StylesProvoder from "./framework/providers/StylesProvider";
import BudgetProvider from "./providers/BudgetProvider";
import Budget from "./routes/Budget";
import Header from "./components/Header";
import Footer from "./components/Footer";

const customColors = {
  darkTextGray: "#585353",
};

export default function App() {
  return (
    <StylesProvoder customColors={customColors}>
      <div className="App bgMedium">
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
