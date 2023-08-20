import { styled } from "styled-components";
import useMounted from "../hooks/useMounted";

const ProgressBar = ({
  value = 0,
  borderRadius = 16,
  padding = 4,
  primaryColor = "green",
  secondaryColor = "#444",
  fontColor = "rgba(255, 255, 255, 0.9)",
  markers = []
}) => {
  const isMounted = useMounted();

  const barColor = markers.reduce((prev, curr) => {
    if (curr.value && curr.actColor && value >= curr.value) {
      return curr.actColor;
    }
    return prev;
  }, primaryColor);

  return (
    <StyledProgressBar
      borderRadius={borderRadius}
      value={value}
      mounted={isMounted}
      primaryColor={barColor}
      secondaryColor={secondaryColor}
      fontColor={fontColor}
      padding={padding}
    >
      {markers?.map?.(({ color, value }) => (
        <div
          className="progress-marker"
          key={value + color}
          style={{ left: `${value}%`, backgroundColor: color }}
        />
      ))}
      <div className="progress-meter" />
      <span className="progress-value">{value}%</span>
    </StyledProgressBar>
  );
};

export default ProgressBar;

const StyledProgressBar = styled.div`
  border-radius: ${(p) => p.borderRadius}px;
  background-color: ${(p) => p.secondaryColor};
  position: relative;
  overflow: hidden;
  .progress-meter {
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    height: 100%;
    transition: width 0.3s ease-in-out 0.1s;
    width: ${({ value, mounted }) => (mounted ? value : 0)}%;
    background-color: ${(p) => p.primaryColor};
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: ${({ borderRadius }) =>
      `${borderRadius} 0 0 ${borderRadius} `};
    z-index: 1;
  }
  .progress-value {
    width: 100%;
    height: 100%;
    display: block;
    padding: ${(p) => `${p.padding}px 0 ${p.padding}px 0`};
    z-index: 2;
    position: relative;
    text-align: center;
    color: ${({ fontColor }) => fontColor};
    font-weight: 600;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    font-family: "open sans", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  .progress-marker {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
`;
