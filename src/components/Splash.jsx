import styled from "styled-components";
import backgroundImage from "../resources/bg.jpg";

const Splash = () => {
  return (
    <StyledSplash $image={backgroundImage}>
      <div className="image-container" />
    </StyledSplash> 
  );
};

export default Splash;

const StyledSplash = styled.div`
  height: 400px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #CAC0A6;
  zIndex: 1;
  .image-container {
    height: 100%;
    width: 100%;
    background-image: url(${(p) => p.$image});
    background-size: 350px;
    opacity: .3;
  }
`;
