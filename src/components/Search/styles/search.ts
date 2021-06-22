import styled, { css } from "styled-components";

import { FaSearch, FaTimes } from "react-icons/fa";

export const Section = styled.section``;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.searchTitle};
  font-weight: 600;
  color: whitesmoke;
`;

type IconProps = {
  visible: number;
};

export const SearchIcon = styled(FaSearch)<IconProps>`
  box-sizing: border-box;
  padding: 10px;
  width: 42.5px;
  height: 42.5px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: #07051a;
  text-align: center;
  font-size: 1.2em;
  transition: all 1s;
  visibility: hidden;
  opacity: 0;

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`;

export const CloseIcon = styled(FaTimes)<IconProps>`
  box-sizing: border-box;
  padding: 10px;
  width: 42.5px;
  height: 42.5px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: #07051a;
  text-align: center;
  font-size: 1.2em;
  transition: all 1s;
  visibility: hidden;
  opacity: 0;

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fontFamily.main};
  font-size: ${({ theme }) => theme.fontSize.searchInput};
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42.5px;
  outline: 0;
  border: 0;
  border-radius: 20px;
  padding: 0 20px;
  color: black;
`;

type WProps = {
  searchActive: boolean;
};

export const Wrapper = styled.div<WProps>`
  position: relative;
  transition: all 1s;
  width: 200px;
  height: 50px;
  background: white;
  box-sizing: border-box;
  border-radius: 25px;
  border: 4px solid white;
  padding: 5px;

  ${({ searchActive }) =>
    searchActive &&
    css`
      width: 500px;
      cursor: pointer;

      ${Input} {
        display: block;
      }

      ${SearchIcon} {
        background: ${({ theme }) => theme.colors.listBackground};
        color: white;
      }

      ${CloseIcon} {
        background: ${({ theme }) => theme.colors.listBackground};
        color: white;
    `};
`;
