import styled from "styled-components";

export const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.card.cardBackground};
  box-sizing: border-box;
  flex-direction: column;
  border-radius: 0.5rem;
  align-items: center;
  overflow: hidden;
  padding: 0 2rem;
  height: 220px;
  display: flex;
  width: 600px;

  @media (max-width: 650px) {
    height: initial;
    padding: 2rem;
    width: 100%;
  }
`;

export const Header = styled.header``;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.card.title};
  color: ${({ theme }) => theme.colors.card.main};
  font-weight: 800;
`;

export const Row = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.card.subtitle};
  color: ${({ theme }) => theme.colors.card.subtitle};
  line-height: 26px;
  font-weight: 500;
`;

export const Value = styled.span`
  font-size: ${({ theme }) => theme.fontSize.card.value};
  color: ${({ theme }) => theme.colors.card.main};
  line-height: 26px;
  font-weight: 300;
`;
