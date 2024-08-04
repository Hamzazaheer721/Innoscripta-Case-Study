import styled from "styled-components";
import { device } from "styles";

export const Container = styled.div`
  margin-block: 3rem;
  padding: 2rem 3rem;
  text-align: center;
`;

export const CardsWrapper = styled.div`
  display: grid;

  padding-block: 2rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem; /* Adjust the gap between items as needed */

  @media (${device.tabletAndBelow}) {
    grid-template-columns: 1fr;
  }
`;
