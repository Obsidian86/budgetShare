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
        .br${i} { border-radius: ${i}px; }
        .brt${i} { border-top-left-radius: ${i}px; border-top-right-radius: ${i}px; }
        .brb${i} { border-bottom-left-radius: ${i}px; border-bottom-right-radius: ${i}px; }
      `;
  }
  return classesString;
};

const StyledApplication = styled.div`
  font-size: 16px;
  font-family: ${(p) => p.styles.FONT.default};
  background-color: ${(p) => p.styles.THEME.background};
  min-height: 100svh;
  width: 100%;
  margin: 0;
  position: relative;

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

  .hideOver {
    overflow: hidden;
  }

  @media screen and (max-width: ${(p) => p.styles.LAYOUT.break.medium}) {
    .breakMedium {
      width: 98% !important;
    }
  }

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
  .em {
    font-weight: normal;
    font-style: italic;
  }
  .tError {
    color: ${(p) => p.styles.THEME.error};
  }
  .tPrimary {
    color: ${(p) => p.styles.THEME.primary};
  }
  .tWhite {
    color: #fff;
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
