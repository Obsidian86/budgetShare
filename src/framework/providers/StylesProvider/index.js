import { createContext, useMemo, useState } from "react";
import StyledApplication from "./StyledApplication";
import "normalize.css";
import { BREAKPOINTS, COLORS, FONT_STACK } from "./constants";

const initialState = {
  COLORS,
  THEME: {
    content: COLORS.white,
    background: COLORS.teal,
    primary: COLORS.teal,
    primaryDark: COLORS.tealDark,
    primaryLight: COLORS.tealLight,
    mediumGray: COLORS.medGray,
    success: COLORS.green,
    error: COLORS.red,
  },
  FONT: {
    default: FONT_STACK.default,
  },
  LAYOUT: {
    break: {
      medium: BREAKPOINTS.MEDIUM,
    },
  },
};

export const StylesContext = createContext(initialState);

const StyleProvider = ({ children, customColors = {} }) => {
  const [styleState, setStyleState] = useState({
    ...initialState,
    COLORS: {
      ...initialState.COLORS,
      custom: { ...customColors },
    },
  });

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
