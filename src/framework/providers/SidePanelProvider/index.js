import { createContext, useMemo, useState } from "react";
import initialState from "./initialState";
import SidePanel from "./SidePanel";

// Panel State
export const SidePanelContext = createContext(initialState);

// Panel Provider
const SidePanelProvider = ({ children }) => {
  const [sidePanelState, __setSidePanelState] = useState(initialState);

  const setSidePanelState = (content) =>
    __setSidePanelState((currentState) =>
      content
        ? { ...currentState, ...content, isOpen: true }
        : { ...initialState }
    );

  const value = useMemo(
    () => ({
      state: sidePanelState,
      setSidePanelState,
    }),
    [sidePanelState]
  );

  return (
    <SidePanelContext.Provider value={value}>
      {sidePanelState.isOpen && <SidePanel {...sidePanelState.props} />}
      {children}
    </SidePanelContext.Provider>
  );
};

export default SidePanelProvider;
