import styled, { css } from "styled-components";

export const Container = styled.section`
  align-items: center;
  margin-top: 5rem;
  display: flex;
`;

interface ItemProps {
  selected: number;
}

export const Item = styled.span<ItemProps>`
  color: ${({ theme }) => theme.colors.main};
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: whitesmoke;
  box-sizing: border-box;
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.4rem 0;
  font-size: 1.2rem;
  margin: 0 0.2rem;
  font-weight: 500;
  cursor: pointer;
  width: 40px;

  :hover {
    filter: brightness(70%);
    transition: 300ms;
  }

  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.colors.card.main};
      border: 1px solid rgba(255, 255, 255, 0.5);
      background-color: #3f3f3f;

      :hover {
        filter: none;
      }
    `};
`;
