import React, { useContext } from "react";
import { styled } from "styled-components";
import { StylesContext } from "../framework/providers/StylesProvider";
import { Link, useLocation } from "react-router-dom";
import useScrollEffect from "../framework/hooks/useScrollEffect";
import Icon from "../framework/components/ui/Icon";

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
      <StyledHeader
        $theme={StylesState.data.THEME}
        className="row between"
        $isScrolled={isScrolled}
      >
        <div className="main-logo">MainTitle</div>
        <div className="row vcenter">
          <div className="scrolled-nav">{navLinks}</div>
          <div className="profile-link p2">
            <Icon icon="user" />
            <span className='pl1'>Profile</span>
          </div>
        </div>
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
  .main-logo {
    font-weight: bold;
    padding: 1rem;
    color: #fff;
    font-size: 1.1rem;
  }
  .profile-link {
    background-color: ${(p) => p.$theme.primaryDark};
    color: ${(p) => p.$theme.primaryLight};
    margin-left: 1rem;
    padding: auto 1.5rem;
  }
  .scrolled-nav {
    max-height: 0;
    max-width: 0;
    overflow: hidden;
    transition: all 0.3s;
    ${(p) =>
      p.$isScrolled &&
      `
      max-height: 100vh;
      max-width: 100vh;
      `}
      a {
      color: #fff;
      margin-left: 15px;
      text-decoration: none;
      font-weight: bold;
    }
  }
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
