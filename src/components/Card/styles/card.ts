import styled from "styled-components";

export const Item = styled.article`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.75rem;
  height: 220px;
  display: flex;
  width: 600px;
`;

interface ThumbnailProps {
  src?: string;
}

export const Thumbnail = styled.img<ThumbnailProps>`
  object-position: center center;
  object-fit: cover;
  flex: 2 1 0%;
`;

export const Info = styled.div`
  flex: 3 1 0%;
`;

export const Header = styled.div``;

export const Title = styled.div``;

export const Status = styled.div``;

export const Description = styled.div``;

export const Row = styled.div``;

export const Subtitle = styled.div``;

export const Link = styled.div``;
