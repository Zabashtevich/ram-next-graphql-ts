import styled from "styled-components";

import { BsX, BsXCircle } from "react-icons/bs";

export const Section = styled.section`
  transform: translateX(-50%, -50%);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Inner = styled.button`
  background-color: transparent;
  position: absolute;
  font-size: 2.5rem;
  cursor: pointer;
  display: flex;
  border: none;
  right: -4%;
  top: -10%;

  @media (max-width: 1000px) {
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const Close = styled(BsXCircle)`
  color: ${({ theme }) => theme.colors.modal.text};
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 2000;
  height: 100%;
  width: 100%;

  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Container = styled.div`
  background-color: white;
  flex-direction: column;
  border-radius: 0.5rem;
  position: relative;
  z-index: 3000;
  display: flex;
  height: 500px;
  width: 900px;

  @media (max-width: 1000px) {
    height: 400px;
    width: 720px;
  }

  @media (max-width: 800px) {
    height: 400px;
    width: 500px;
  }

  @media (max-width: 550px) {
    height: 400px;
    width: 300px;
  }
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.modal.error};
  border-radius: 0.5rem 0.5rem 0 0;
  position: relative;
  height: 55%;
  width: 100%;
`;

export const Thumbnail = styled(BsXCircle)`
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 7rem;
  color: white;
  left: 50%;
  top: 50%;

  @media (max-width: 1000px) {
    font-size: 5rem;
  }
`;

export const Wrapper = styled.div`
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 45%;
  width: 100%;
`;

export const Message = styled.div`
  color: ${({ theme }) => theme.colors.modal.text};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  font-weight: 600;
  margin-top: 2rem;
  font-size: 3rem;
  display: block;

  @media (max-width: 1000px) {
    margin-top: 1rem;
    font-size: 2rem;
  }

  @media (max-width: 550px) {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.span`
  font-weight: 500;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  display: block;

  @media (max-width: 550px) {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.modal.error};
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  padding: 0.5rem 2.5rem;
  border-radius: 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: white;

  :hover {
    color: ${({ theme }) => theme.colors.modal.text};
    background-color: white;
    transition: 300ms;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    padding: 0.3rem 1.5rem;
  }

  @media (max-width: 1000px) {
    margin-bottom: 0.5rem;
    padding: 0 1rem;
  }
`;
