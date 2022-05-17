import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;

  display: flex;
  flex-direction: column;
`;

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem;

  h1 {
    margin-top: 2rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    column-gap: 1rem;
    h1 {
      font-size: 2.5rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export const CardImage = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 80%;
    height: 100%;
    max-width: 25rem;
  }

  h2 {
    margin-top: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    font-size: 1.5rem;
  }
`;

export const CardForm = styled.form`
  width: 100%;
  max-width: 450px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 2.5rem;

  div label {
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: ${({ theme})=>theme.FONTES.BOLD};
  }

  div,
  input {
    width: 100%;
    height: 2.2rem;
    outline: none;
    border: transparent;
  }

  input {
    margin-top: 0.3rem;
    box-shadow: -10px 9px 12px 0px ${({ theme }) => theme.COLORS.TEXT_BORDER};
    padding-left: 0.5rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
  }

  @media only screen and (min-width: 768px) {
    margin-top: 4rem;
  }
`;

export const MessageErro = styled.div`
  p {
    color: red;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.FONTES.REGULAR};
    line-height: 1rem;
  }
`;

export const Cep = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  label {
    margin: 0;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 0.3rem;
    margin: 0;
  }

  input {
    flex: 2;
    height: 2.2rem;
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT_BORDER};
    border-radius: 0.3rem;
    margin: 0;
  }
`;

export const Button = styled.button`
  flex: 1;
  height: 2.2rem;
  width: 100%;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.FONTES.BOLD};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  color: ${({ theme }) => theme.COLORS.TEXT_TERTIARY};
  border: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    transition: 0.3s ease;
  }
`;

export const Footer = styled.footer`
  margin-top: 3rem;
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    padding-bottom: 1.5rem;
    line-height: 1rem;
    font-weight: ${({ theme }) => theme.FONTES.BOLD};
  }

  div {
    ul {
      display: flex;
      margin: 1rem 0rem;
    }

    li {
      padding: 0rem 1rem;
      transition: 0.3s;
    }

    img {
      width: 2rem;
      height: 2rem;

      :hover {
        transform: scale(1.1);
      }
    }
  }
`;
