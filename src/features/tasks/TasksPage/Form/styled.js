import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: 2px solid #e1e1e1;
  padding: 10px;

  &:active {
    outline: none !important;
    border: 2px solid #574f4f;
  }
`;

export const Button = styled.button`
  color: #dbfaf6;
  background-color: ${({ theme }) => theme.colors.normal};
  border: none;
  padding: 10px;
  transition: background 0.5s, transform 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    transform: scale(1.15);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;
