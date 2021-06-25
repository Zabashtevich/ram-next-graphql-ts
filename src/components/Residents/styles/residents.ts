import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  margin-top: 5rem;
  padding: 0 4rem;
  display: flex;
  width: 100%;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.card.main};
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
`;

export const List = styled.ul`
  justify-content: center;
  margin-top: 2rem;
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  padding: 0;
`;

export const Card = styled.li``;

type PosterProps = {
  src: string;
};

export const Poster = styled.img<PosterProps>``;

export const Subtitle = styled.div``;
