import { device } from "./../../styles/devices";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  gap: 1.5rem;

  @media ${device.mobileAndBelow} {
    flex-direction: column;
  }
`;

export const CarouselWrapper = styled.div`
  width: calc(70% - 1.5rem);

  @media ${device.mobileAndBelow} {
    width: 80%;
    align-self: center;
  }
`;

export const ContentBlockSection = styled.div`
  flex: 1 0 calc(30%- 1.5rem);
`;
