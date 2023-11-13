import { useEffect, useState } from "react";
import { styled } from "styled-components";

const prepareData = (data) =>
  data?.map?.((dataItem, index) => ({ value: dataItem, key: index }));

const Card = ({
  children,
  className = "",
  background = "#fff",
  radius = "0px",
  shadow = false,
  data = null,
  accent = null,
  title = null,
}) => {
  const [__data, setData] = useState(prepareData(data));

  useEffect(() => {
    setData(prepareData(data));
  }, [data]);

  return (
    <StyledCard
      className={className}
      $background={background}
      $radius={radius}
      $shadow={shadow}
      $accent={accent}
    >
      { title && <p className='card-title'>{title}</p> }
      {children}
      {__data && (
        <div className="row between content pt2 pb2">
          {__data?.map?.((dataItem) => (
            <span key={dataItem.key}>{dataItem.value}</span>
          ))}
        </div>
      )}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  background-color: ${(p) => p.$background};
  border-radius: ${(p) => p.$radius};
  .card-title {
    width: calc(100% - .3rem);
    text-align: right;
    padding: .55rem .65rem .95rem 0;
    font-weight: 600;
    margin: 0;
  }
  ${(p) => (p.$shadow ? "box-shadow: 0 0 4px rgba(0,0,0,.2);" : "")}
  ${(p) => (p.$accent ? `border-left: 5px solid ${p.$accent}` : "")}
`;
