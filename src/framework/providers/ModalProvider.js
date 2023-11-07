import React from "react";
import styled, { css } from "styled-components";

const initialModalState = {
  isOpen: false
}

export const ModalContext = React.createContext(initialModalState)

const ModalProvider = ({ children }) => {
  const [modalState, __setModalState] = React.useState(initialModalState)

  const setModalState = (data) => data
    ? __setModalState({ ...data, ...modalState, isOpen: true })
    : __setModalState({ ...initialModalState })

  return (
    <ModalContext.Provider value={modalState}>
      <StyledScreenCover $isOpen={modalState.isOpen} onClick={() => setModalState(null)} />
      <div>{children}</div>
    </ModalContext.Provider>
  );
};

export default ModalProvider;


const openStyles = css`
  width: 100%;
  height: 100svh;
  opacity: .6;
`

const StyledScreenCover = styled.div`
  top: 0;
  left: 0;
  background-color: #000;
  position: fixed;
  width: 0;
  height: 0;
  opacity: 0;
  transition: opacity .4s;
  ${p => p.$isOpen && openStyles}
`