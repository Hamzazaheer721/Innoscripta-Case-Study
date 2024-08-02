import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 2rem 4rem;
  background: ${({ theme }) => theme.backgroundColor.primary};
  height: calc(100vh - 6.4rem);
`;
