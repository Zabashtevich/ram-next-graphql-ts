import styled from "styled-components";

export const Main = styled.main`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Section = styled.section`
  height: calc(50vh - 60px);
  align-items: center;
  position: relative;
  max-width: 1300px;
  display: flex;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.mainTitle};
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
  font-weight: 800;
  color: black;

  @media (max-width: 1200px) {
    font-size: 5rem;
  }

  @media (max-width: 950px) {
    font-size: 4rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const Inner = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const Thumbnail = styled.img`
  opacity: 0.05;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.listBackground};
  flex-direction: column;
  align-items: center;
  padding: 4.5rem 0;
  display: flex;
  width: 100%;
`;
