import { useContext } from "react";
import styled from "styled-components";
import useMounted from "../../hooks/useMounted";
import { SidePanelContext } from "./index";

const SidePanel = () => {
  const { state: { title, component }, setSidePanelState } = useContext(SidePanelContext);
  const isMounted = useMounted();
 
  return (
    <StyledSidePanel $isMounted={isMounted}>
      <div className="side-panel-content">
        <div className="row between p2">
          <span className="b">{title}</span>
          <button onClick={() => setSidePanelState(null)}>
            X
          </button>
        </div>
        <div className='p2'>
            { component() }
        </div>
      </div>
    </StyledSidePanel>
  );
};

export default SidePanel;

// Panel Styles
const StyledSidePanel = styled.div`
  transition: all 0.3s;
  position: fixed;
  right: 0;
  top: 0;
  height: 100svh;
  width: 100%;
  z-index: 11;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(p) =>
    p.$isMounted ? "rgba(0,0,0,.6)" : "rgba(0,0,0,0)"};
  .side-panel-content {
    transition: all 0.2s 0.2s;
    width: ${(p) => (p.$isMounted ? "500px" : "0")};
    background-color: #fff;
    height: ${(p) => (p.$isMounted ? "calc(100% - 20px)" : "0")};
    max-height: 100svh;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  }
`;
