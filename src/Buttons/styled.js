import styled, { css } from "styled-components";

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
  color: hsl(180, 100%, 25%);
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  &:active {
    color: hsl(180, 100%, 40%);
  }

  &:disabled {
    color: #ccc;
  }

  @media (max-width: 767px) {
    padding: 10px;
  }
`;
