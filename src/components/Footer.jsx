import { useContext } from "react";
import { styled } from "styled-components";
import { StylesContext } from "../framework/providers/StylesProvider";

const Footer = () => {
  const StylesState = useContext(StylesContext);
  return (
    <StyledHeader $theme={StylesState.data.THEME} >
      <div className="content tc pt4 pb4">
        <span>Sed ut perspiciatis unde omnis iste natus error sit</span> <br />
        <span className='pt4'>v1.0.0</span>
      </div>
    </StyledHeader>
  );
};

export default Footer;

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${(p) => p.$theme.primary};
`;
