import { useContext } from "react";
import { styled } from "styled-components";
import { StylesContext } from "../framework/providers/StylesProvider";

const Footer = () => {
  const stylesContext = useContext(StylesContext);
  console.log({ stylesContext  })
  return (
    <StyledFooter $theme={stylesContext.data.THEME} >
      <div className="content tc pt4 pb4">
        <span>Sed ut perspiciatis unde omnis iste natus error sit</span> <br />
        <span className='pt4'>v1.0.0</span>
      </div>
      <button onClick={stylesContext.toggleTheme}>{stylesContext.data.currentTheme}</button>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  width: 100%;
  background-color: ${(p) => p.$theme.primary};
`;
