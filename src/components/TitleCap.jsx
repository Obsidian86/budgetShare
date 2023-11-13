import styled, { css } from "styled-components";

const TitleCap = ({
  title,
  children,
  radius = true,
  color = "#343434",
  bg = "#fff",
  sep = false,
}) => {
  return (
    <StyledTitleCap $radius={radius} $color={color} $bg={bg} $sep={sep}>
      <div className="content row vcenter between">
        <h5>{title}</h5>
        <span>{children}</span>
      </div>
    </StyledTitleCap>
  );
};

export default TitleCap;

const sepStyles = css`
  &::after {
    position: absolute;
    bottom: -1px;
    left: 2%;
    content: "";
    height: 0;
    width: 96%;
    border-bottom: 1px solid #d9d9d9;
  }
`;

const StyledTitleCap = styled.div`
  border-radius: ${(p) => (p.$radius ? "8px 8px 0 0" : "0px")};
  background-color: ${(p) => p.$bg};
  position: relative;
  ${(p) => p.$sep && sepStyles}
  h5 {
    font-size: 1.2rem;
    line-height: 2rem;
    margin: 0.5rem 0;
    color: ${(p) => p.$color};
  }
`;
