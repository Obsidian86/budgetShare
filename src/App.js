import StylesProvoder from "./framework/providers/StylesProvider";
import BudgetProvider from "./providers/BudgetProvider";
import Budget from "./routes/Budget";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkbook from "./routes/Checkbook";
import ModalProvider from "./framework/providers/ModalProvider";

const customColors = {
  darkTextGray: "#585353",
};

export default function App() {
  return (
    <StylesProvoder customColors={customColors}>
      <ModalProvider>
        <div className="App bgMedium">
          <Header />
          <BudgetProvider>
            <div className="content">
              <Checkbook />
            </div>
          </BudgetProvider>
          <Footer />
        </div>
      </ModalProvider>
    </StylesProvoder>
  );
}
