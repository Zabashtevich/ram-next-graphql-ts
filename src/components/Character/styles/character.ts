import styled, { css } from "styled-components";

export const Item = styled.article`
  background-color: ${({ theme }) => theme.colors.card.cardBackground};
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.75rem;
  height: 220px;
  display: flex;
  width: 600px;

  @media (max-width: 650px) {
    flex-direction: column;
    height: initial;
    width: 100%;
  }
`;

interface ThumbnailProps {
  src?: string;
}

export const Thumbnail = styled.img<ThumbnailProps>`
  object-position: center center;
  object-fit: cover;

  @media (max-width: 650px) {
    height: 300px;
  }
`;

export const Info = styled.div`
  flex-direction: column;
  justify-content: space-around;
  padding: 0.75rem;
  display: flex;
  flex: 3 1 0%;
`;

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.card.main};
  flex-direction: column;
  display: flex;
`;

export const LinkWrapper = styled.a`
  color: ${({ theme }) => theme.colors.card.main};
  text-decoration: none;

  :hover {
    & > * {
      color: ${({ theme }) => theme.colors.secondary};
    }
    transition: 300ms;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.card.title};
  text-decoration: none;
  font-weight: 800;
  margin: 0;
`;

interface StatusProps {
  dead: number;
  alive: number;
  unknown: number;
}

export const Status = styled.span<StatusProps>`
  font-size: ${({ theme }) => theme.fontSize.card.status};
  align-items: center;
  display: flex;

  ::before {
    margin-right: 0.5rem;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    content: "";

    ${({ dead }) =>
      dead &&
      css`
        background-color: ${({ theme }) => theme.colors.statusIcon.dead};
      `};

    ${({ alive }) =>
      alive &&
      css`
        background-color: ${({ theme }) => theme.colors.statusIcon.alive};
      `};

    ${({ unknown }) =>
      unknown &&
      css`
        background-color: ${({ theme }) => theme.colors.statusIcon.unknown};
      `};
  }
`;

export const Row = styled.div`
  flex-direction: column;
  display: flex;

  @media (max-width: 650px) {
    margin-top: 2rem;
  }
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.card.subtitle};
  color: ${({ theme }) => theme.colors.card.subtitle};
  line-height: 26px;
  font-weight: 500;
  display: block;
`;

export const Value = styled.span`
  font-size: ${({ theme }) => theme.fontSize.card.value};
  color: ${({ theme }) => theme.colors.card.main};
  line-height: 26px;
  font-weight: 300;
  display: block;
`;
