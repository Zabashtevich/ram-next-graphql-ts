import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer.footerBackground};
  flex-direction: column;
  align-items: center;
  padding: 4.5rem 0;
  display: flex;
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;

  @media (max-width: 500px) {
    flex-direction: column;

    & > a {
      margin-top: 0.2rem;
    }
  }
`;

export const Category = styled.li`
  flex-wrap: wrap;
  margin: 0 1rem;
  display: flex;
`;

export const Subtitle = styled.span``;

export const Value = styled.span`
  margin-left: 0.3rem;
`;

export const Signature = styled.div``;

export const Author = styled.a`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 16px;
  color: white;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-bottom: none;
    transition: 300ms;
  }
`;

export const LinkWrapper = styled.a`
  color: ${({ theme }) => theme.colors.footer.main};
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 700;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
