import React from "react";

import {
  Header,
  LogoLink,
  Logo,
  Navigation,
  List,
  NavLink,
} from "./styles/AppHeader";

export default function AppHeader() {
  return (
    <Header>
      <Navigation>
        <LogoLink href="/">
          <Logo />
        </LogoLink>
        <List>
          <NavLink href="/">
            <a>Characters</a>
          </NavLink>
          <NavLink href="/">Locations</NavLink>
          <NavLink href="/">Episodes</NavLink>
        </List>
      </Navigation>
    </Header>
  );
}
