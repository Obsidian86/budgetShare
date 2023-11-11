import React, { useContext } from "react";
import { styled } from "styled-components";
import { StylesContext } from "../framework/providers/StylesProvider";
import { Link, useLocation } from "react-router-dom";
import useScrollEffect from "../framework/hooks/useScrollEffect";

const Header = ({ links }) => {
  const StylesState = useContext(StylesContext);
  const { pathname } = useLocation();

  const { isScrolled } = useScrollEffect({
    isScrolled: { gt: 67 },
  });

  const navLinks = links.map(({ to, name }) => (
    <Link
      to={to}
      key={name}
      className={`${to === pathname ? "active-link" : ""}`}
    >
      {name}
    </Link>
  ));

  return (
    <>
      <StyledHeader $theme={StylesState.data.THEME} className="row">
        <div className="content">MainTitle</div>
        {isScrolled && <div>{navLinks}</div>}
        <div className="p2">Profile</div>
      </StyledHeader>
      <StyledSpacer />
      <StyledNavLinks className="content row end pt2">
        {navLinks}
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
  z-index: 10;
  background-color: ${(p) => p.$theme.primary};
`;

const StyledNavLinks = styled.div`
  a {
    text-decoration: none;
    font-weight: 800;
    color: #3a2b2b;
    padding: 15px 24px;
    border-radius: 6px;
    transition: background 0.2s;
    margin-left: 0.5rem;
    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
    &.active-link {
      background-color: rgba(255, 255, 255, 0.6);
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }
  }
`;
