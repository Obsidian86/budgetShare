import { useContext } from "react";
import { styled } from "styled-components";
import { StylesContext } from "../framework/providers/StylesProvider";
import { Link, useLocation } from "react-router-dom";

const Header = ({ links }) => {
  const StylesState = useContext(StylesContext);
  const { pathname } = useLocation()

  return (
    <>
      <StyledHeader $theme={StylesState.data.THEME} className="row">
        <div className="content">MainTitle</div>
        <div className="p2">Profile</div>
      </StyledHeader>
      <StyledSpacer />
      <StyledNavLinks className="content row end pt2">
        {links.map(({ to, name }) => (
          <Link to={to} key={name} className={`${to === pathname ? 'active-link' : ''}`}>
            {name}
          </Link>
        ))}
      </StyledNavLinks>
    </>
  );
};

export default Header;

const StyledSpacer = styled.div`
  height: 50px;
  width: 100%;
`;

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(p) => p.$theme.primary};
`;

const StyledNavLinks = styled.div`
  a {
    text-decoration: none;
    font-weight: 800;
    color: #3A2B2B;
    padding: 15px 24px;
    border-radius: 6px;
    transition: background .2s;
    margin-left: .5rem;
    &:hover {
      background-color: rgba(255,255,255,.4);
    }
    &.active-link { 
      background-color: rgba(255,255,255,.6);
      box-shadow: 0 0 3px rgba(0,0,0,.3);
     }
  }
`