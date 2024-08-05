import { device } from "./../../styles/devices";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  @media ${device.mobileAndBelow} {
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  gap: 1.5rem;

  @media ${device.tabletAndBelow} {
    flex-direction: column;
    gap: 2.2rem;
  }
`;

export const CarouselWrapper = styled.div`
  width: calc(70% - 1.5rem);

  @media ${device.tabletAndBelow} {
    width: 100%;
    align-self: center;
  }
`;

export const ContentBlockSection = styled.div`
  width: calc(30% - 1.5rem);
  flex-grow: 1;
  @media ${device.tabletAndBelow} {
    width: 100%;
    align-self: center;
  }
`;
