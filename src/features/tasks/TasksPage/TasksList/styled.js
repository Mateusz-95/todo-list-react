import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  border-bottom: 2px solid #e9e9e9;
  padding: 10px;
  display: grid;
  grid-template-columns: auto 1fr auto;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.div`
  justify-self: center;
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
      background-color: #ffffff;
    `}

  ${({ remove }) =>
    remove &&
    css`
      margin: 0 0 0 auto;
      border: none;
      padding: 0;
      background-color: #ffffff;
    `}
`;

export const ContentLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.normal};
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.active};
  }
`;
