import { createContext, useMemo, useState } from "react";
import StyledApplication from "./StyledApplication";
import "normalize.css";
import { COLORS, FONT_STACK } from "./constants";

const initialState = {
  COLORS: {
    background: COLORS.teal,
    primary: COLORS.teal,
    primaryDark: COLORS.tealDark,
    primaryLight: COLORS.tealLight,
    mediumGray: COLORS.medGray,
  },
  FONT: {
    default: FONT_STACK.default,
  },
};

export const StylesContext = createContext(initialState);

const StyleProvider = ({ children }) => {
  const [styleState, setStyleState] = useState(initialState);

  const stateValue = useMemo(() => {
    return { data: styleState, setStyleState };
  }, [styleState]);

  return (
    <StyledApplication styles={styleState}>
      <StylesContext.Provider value={stateValue}>
        {children}
      </StylesContext.Provider>
    </StyledApplication>
  );
};

export default StyleProvider;
