import { createContext, useMemo, useState } from "react";

const initialState = {
  COLORS: {
    primary: "#118881",
    primaryDark: "#11605B",
    primaryLight: "#BCE9E6"
  }
};

export const StylesContext = createContext(initialState);

const StyleProvider = ({ children }) => {
  const [styleState, setStyleState] = useState(initialState);

  const stateValue = useMemo(() => {
    return { data: styleState, setStyleState };
  }, [styleState]);

  return (
    <StylesContext.Provider value={stateValue}>
      {children}
    </StylesContext.Provider>
  );
};

export default StyleProvider;
