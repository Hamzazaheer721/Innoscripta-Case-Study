import styled from "styled-components";
import { device } from "styles";

export const GuardianContainer = styled.div`
  min-height: 50rem;
  color: #fff;
  line-height: 150%;
  height: 100%;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  & > div:first-of-type {
    width: 100%;
  }
  & > div > .ant-carousel {
    width: 100%;
  }
  @media (${device.mobileAndBelow}) {
    min-height: unset;
  }

  @media ${device.mobileAndBelow} {
  }
`;

export const GuardianCarouselWrapper = styled.div`
  display: flex;
  width: 100%;

  @media ${device.mobileAndBelow} {
  }
`;
export const GuardianCarouselCardContainer = styled.div`
  padding: 2rem 3rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.backgroundColor.secondary};
  height: 50rem;
  @media ${device.mobileAndBelow} {
  }
`;
