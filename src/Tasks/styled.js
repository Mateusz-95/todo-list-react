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

export const Button = styled.button``;
