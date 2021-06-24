import styled from "styled-components";

export const List = styled.ul`
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  max-width: 1920px;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  padding: 0;

  @media (max-width: 650px) {
    padding: 0 1.5rem;
  }
`;
