import styled from "styled-components";

export const HomeContainer = styled.div`
  box-sizing: border-box;
  padding: 2rem 4rem;
  background: ${({ theme }) => theme.backgroundColor.primary};
  min-height: calc(100vh - 6.4rem);
`;
