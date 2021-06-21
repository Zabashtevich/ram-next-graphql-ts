import styled, { css } from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  width: 100%;
`;

export const Navigation = styled.nav`
  justify-content: space-between;
  padding: 1rem 2rem;
  display: flex;
`;

export const List = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.navLinks};
  display: flex;

  list-style: none;
`;

interface ItemProps {
  linkActive?: boolean;
}

export const Item = styled.li<ItemProps>`
  margin: 0 1rem;

  > * {
    color: ${({ theme }) => theme.colors.main};
    text-decoration: none;
    font-weight: 800;
  }

  ${({ linkActive }) =>
    linkActive &&
    css`
      > * {
        color: ${({ theme }) => theme.colors.secondary};
      }
    `};

  :hover {
    > * {
      color: ${({ theme }) => theme.colors.secondary};
      transition: 300ms;
    }
  }
`;

export const Logo = styled.svg`
  fill: rgb(41, 41, 41);
`;

export const LogoLink = styled(Link)``;

export const NavLink = styled(Link)``;
