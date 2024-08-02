import styled, { css } from "styled-components";

export const Paragraph = styled.h1`
  font-weight: bold;
`;

export const Heading = styled.h4<{ secondary?: boolean }>`
  all: unset;
  font-weight: 600;
  font-size: 2rem;
  color: ${({ theme }) => theme.headingColor.primary};

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.headingColor.secondary};
    `}
`;
