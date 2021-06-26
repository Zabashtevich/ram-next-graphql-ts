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

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const List = styled.ul`
  justify-content: center;
  margin-top: 2rem;
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  padding: 0;
`;

export const Card = styled.li`
  background-color: #3f3f3f;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 0.4rem 0.6rem;
  align-items: center;
  max-width: 300px;
  overflow: hidden;
  display: flex;
  width: 100%;
`;

type PosterProps = {
  src: string;
};

export const Poster = styled.img<PosterProps>`
  object-position: center center;
  object-fit: cover;
  width: 40%;
`;

export const Subtitle = styled.a`
  font-size: ${({ theme }) => theme.fontSize.card.subtitle};
  color: ${({ theme }) => theme.colors.card.main};
  text-overflow: ellipsis;
  margin-left: 0.5rem;
  white-space: nowrap;
  padding: 0 0.5rem;
  overflow: hidden;
  font-weight: 500;
  margin: 0 auto;
`;
