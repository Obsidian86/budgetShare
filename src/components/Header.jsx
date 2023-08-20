import { useContext } from "react";
import { styled } from "styled-components";
import { StylesContext } from "../framework/providers/StylesProvider";
import Field from "../framework/components/Field";

const Header = () => {
  const StylesState = useContext(StylesContext);
  console.log({ StylesState });
  return (
    <StyledHeader $colors={StylesState.data.COLORS} className="row">
      <div className="content">MainTitle</div>
      <div className="row">
        Income{" "}
        <Field background={StylesState.data.COLORS.primaryDark} />
      </div>
      <div className="p2">Profile</div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${(p) => p.$colors.primary};
`;
