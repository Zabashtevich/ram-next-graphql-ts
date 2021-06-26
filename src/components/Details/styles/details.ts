import styled from "styled-components";

export const Container = styled.section`
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  max-width: 1920px;
  display: flex;
  width: 100%;

  @media (max-width: 650px) {
    padding: 0 1.5rem;
  }
`;
