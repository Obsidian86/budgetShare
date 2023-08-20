import { useContext } from "react";
import { styled } from "styled-components";
import { StylesContext } from "../providers/StylesProvider";

const Header = () => {
  const StylesState = useContext(StylesContext);
  console.log({ StylesState });
  return (
    <StyledHeader
      colors={StylesState.data.COLORS}
      // style={{
      //   width: "100%",
      //   backgroundColor: StylesState.data.COLORS.primary,
      //   padding: "20px 0",
      //   marginBottom: "20px"
      // }}
    >
      <div className="content">Header</div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${(p) => p.colors.primary};
`;
