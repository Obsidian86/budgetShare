import React from "react";
import StylesProvoder from "./framework/providers/StylesProvider";
import BudgetProvider from "./providers/BudgetProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalProvider from "./framework/providers/ModalProvider";
import { HashRouter, Link } from "react-router-dom";
import RouterComponet, { routeList } from "./routes";

const customColors = {
  darkTextGray: "#585353",
};

export default function App() {
  return (
    
    <StylesProvoder customColors={customColors}>
      <ModalProvider>
        <HashRouter>
          <div className="App bgMedium">
            <Header />
            {
              routeList.map(routeItem => <Link to={routeItem.path} key={routeItem.name}>{routeItem.name}</Link>)
            }
            <BudgetProvider>
              <div className="content">
                <RouterComponet />
              </div>
            </BudgetProvider>
            <Footer />
          </div>
        </HashRouter>
      </ModalProvider>
    </StylesProvoder>
  );
}
