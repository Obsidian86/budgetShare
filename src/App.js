import React from "react";
import { HashRouter } from "react-router-dom";
import StylesProvoder from "./framework/providers/StylesProvider";
import ModalProvider from "./framework/providers/ModalProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouterComponet, { routeList } from "./routes";
import RegisterProviders from "./providers/RegisterProviders";
import Splash from "./components/Splash";

const customColors = {
  darkTextGray: "#585353",
};

export default function App() {
  return (
    <StylesProvoder customColors={customColors}>
      <ModalProvider>
        <HashRouter>
          <div className="App bgMedium">
            <Splash />
            <div style={{ position: "relative", zIndex: 2 }}>
              <Header
                links={routeList.map((routeItem) => ({
                  name: routeItem.name,
                  to: routeItem.path,
                }))}
              />
              <RegisterProviders>
                <div className="content">
                  <RouterComponet />
                </div>
              </RegisterProviders>
            </div>
            <Footer />
          </div>
        </HashRouter>
      </ModalProvider>
    </StylesProvoder>
  );
}
