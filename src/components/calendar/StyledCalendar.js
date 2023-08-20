import styled from "styled-components";

export default styled.div`
  .day-list {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    .cal-day {
      box-shadow: inset 0 0 1px gray;
      padding: 10px 10px 85px 10px;
      .day-number {
        color: #d9d9d9;
        &.current-day {
          color: black;
          font-weight: bold;
        }
      }
    }
  }
`;
