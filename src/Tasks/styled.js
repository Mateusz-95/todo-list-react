import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  border-bottom: 2px solid #e9e9e9;
  padding: 10px;
  display: flex;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.div`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }
  &:active {
    filter: brightness(140%);
  }

  ${({ done }) =>
    done &&
    css`
      margin: 0 10px 0 10px;
      padding: 0;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
    `}

  ${({ remove }) =>
    remove &&
    css`
      margin: 0 0 0 auto;
      border: none;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
    `}
`;
