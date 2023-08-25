import styled from "styled-components";

const getLayoutClasses = () => {
  let classesString = `.mxa {  margin-left: auto; margin-right: auto; }`;
  let i = 0;
  while (i <= 100) {
    i += 1;
    classesString = `
        ${classesString}
        .w${i} { width: ${i}%; }
        .p${i} { padding: ${i / 2}rem; }
        .m${i} { margin: ${i / 2}rem; }
        .pt${i} { padding-top: ${i / 2}rem; }
        .mt${i} { margin-top: ${i / 2}rem; }
        .pr${i} { padding-right: ${i / 2}rem; }
        .mr${i} { margin-right: ${i / 2}rem; }
        .pl${i} { padding-left: ${i / 2}rem; }
        .ml${i} { margin-left: ${i / 2}rem; }
        .pb${i} { padding-bottom: ${i / 2}rem; }
        .mb${i} { margin-bottom: ${i / 2}rem; }
      `;
  }
  return classesString;
};

const StyledApplication = styled.div`
  font-size: 16px;
  font-family: ${(p) => p.styles.FONT.default};
  background-color: ${(p) => p.styles.THEME.background};
  min-height: 100vh;
  width: 100%;
  margin: 0;

  // -------------- //
  // -- Utitlity -- //
  // -------------- //

  // layout --------- //
  .content {
    width: 96%;
    margin: 0 auto;
  }

  .row {
    display: flex;
    &.wrap {
      flex-wrap: wrap;
    }
    &.vcenter {
      align-items: center;
    }
    &.vtop {
      align-items: top;
      border: 1px solid red;
    }
    &.between {
      justify-content: space-between;
    }
    &.around {
      justify-content: space-evenly;
    }
    &.end {
      justify-content: flex-end;
    }
  }

  ${getLayoutClasses()}

  // text ------------ //
  .b {
    font-weight: bold;
  }
  .tc {
    text-align: center;
  }
  .tr {
    text-align: right;
  }
  .tError {
    color: ${(p) => p.styles.THEME.error};
  }

  // colors ------------ //
  .bgMedium {
    background-color: ${(p) => p.styles.THEME.mediumGray};
  }
  .bgContent {
    background-color: white;
  }
  .bgSuccess {
    background-color: ${(p) => p.styles.THEME.success};
  }
`;

export default StyledApplication;
