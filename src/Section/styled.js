import styled, { css } from "styled-components";

export const ContentSection = styled.section`
  background-color: #ffffff;
  margin: 10px 0;
  box-shadow: 0px 8px 5px -16px rgba(66, 68, 90, 1);
`;

export const Header = styled.div`
  padding: 20px;
  border-bottom: 2px solid #e1e1e1;
  display: grid;
  grid-template-columns: auto 300px;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }

  ${({ buttons }) =>
    buttons &&
    css`
      padding: 5px 20px 5px 20px;
      margin-top: 20px;
    `}
`;

export const Body = styled.div`
  padding: 20px;
`;
