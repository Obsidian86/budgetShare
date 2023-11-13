import { createContext, useEffect, useMemo, useRef, useState } from "react";
import StyledApplication from "./StyledApplication";
import "normalize.css";
import { BREAKPOINTS, COLORS, FONT_STACK } from "./constants";

const themeTypes = {
  LIGHT: "light",
  DARK: "dark",
};

const themes = {
  [themeTypes.LIGHT]: {
    background: COLORS.teal,
    primary: COLORS.teal,
    primaryDark: COLORS.tealDark,
    primaryLight: COLORS.tealLight,
    textLight: COLORS.medGray,
    textMed: COLORS.medDarkGray,
    text: COLORS.darkGray2,
    mediumGray: COLORS.medGray,
    bgLight: COLORS.lightGray,
    bgMed: COLORS.medGray,
    success: COLORS.green,
    error: COLORS.red,
  },
  [themeTypes.DARK]: {
    background: "red",
    primary: COLORS.teal,
    primaryDark: COLORS.tealDark,
    primaryLight: COLORS.tealLight,
    mediumGray: "#333",
    bgLight: "black",
    bgMed: "#333",
    success: COLORS.green,
    error: COLORS.red,
  },
};

const initialState = {
  COLORS,
  THEME: themes[themeTypes.LIGHT],
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
  const currentThemeRef = useRef(themeTypes.LIGHT);
  const [styleState, setStyleState] = useState({
    ...initialState,
    COLORS: {
      ...initialState.COLORS,
      custom: { ...customColors },
    },
  });

  const toggleTheme = () => {
    currentThemeRef.current =
      currentThemeRef.current === themeTypes.LIGHT
        ? themeTypes.DARK
        : themeTypes.LIGHT;

    setStyleState((currentStyleState) => ({
      ...currentStyleState,
      THEME: { ...themes[currentThemeRef.current] },
    }));
  };

  const stateValue = useMemo(() => {
    return {
      data: {
        ...styleState,
        currentTheme: currentThemeRef.current,
      },
      setStyleState,
      toggleTheme,
    };
  }, [styleState]);

  return (
    <StyledApplication $styles={styleState}>
      <StylesContext.Provider value={stateValue}>
        {children}
      </StylesContext.Provider>
    </StyledApplication>
  );
};

export default StyleProvider;
