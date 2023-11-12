import React from "react";
import { HashRouter } from "react-router-dom";
import StylesProvoder from "./framework/providers/StylesProvider";
import ModalProvider from "./framework/providers/ModalProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouterComponet, { routeList } from "./routes";
import RegisterProviders from "./providers/RegisterProviders";
import Splash from "./components/Splash";
import ContextMenu from "./components/ContextMenu";

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
                <div
                  style={{
                    position: "fixed",
                    right: "0",
                    top: "0",
                    backgroundColor: "rgba(0,0,0,.3)",
                    height: "100svh",
                    width: "100%",
                    zIndex: "11",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "500px",
                      backgroundColor: "#fff",
                      height: "calc(100% - 20px)",
                      maxHeight: "100svh",
                      marginRight: "10px",
                      marginTop: "10px",
                      borderRadius: "10px",
                      marginBottom: "10px",
                      boxShadow: "0 0 4px rgba(0,0,0,.6)",
                    }}
                  >
                    asdasd adasda
                  </div>
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
