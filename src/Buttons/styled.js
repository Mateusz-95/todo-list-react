import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.normal};
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.active};
  }

  &:disabled {
    color: #ccc;
  }

  @media (max-width: 767px) {
    padding: 10px;
  }
`;
