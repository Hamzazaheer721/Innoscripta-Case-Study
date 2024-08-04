import styled from "styled-components";
import { device } from "styles";

export const CarouselCardContainer = styled.div`
  height: 50rem;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
  overflow: hidden;
  border-radius: 2rem;

  @media (${device.mobileAndBelow}) {
    height: 100%;
  }
`;

export const CarouselImg = styled.img`
  aspect-ratio: 16/9;
  width: 70%;
  height: auto;
  margin: auto;
  object-fit: cover;
  border-radius: 2rem;
  @media (${device.tabletAndBelow}) {
    width: 60%;
  }
  @media (${device.mobileAndBelow}) {
    width: 100%;
    height: unset;
  }
`;
