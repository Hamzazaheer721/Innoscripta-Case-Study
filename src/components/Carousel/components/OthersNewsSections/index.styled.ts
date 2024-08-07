import styled from "styled-components";
import { device } from "styles";

export const MainContainer = styled.div`
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
  @media (${device.tabletAndBelow}) {
    min-height: unset;
  }

  @media ${device.mobileAndBelow} {
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;

  @media ${device.mobileAndBelow} {
  }
`;
export const CarouselCardContainer = styled.div`
  padding: 2rem 3rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.backgroundColor.secondary};
  height: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.tabletAndBelow} {
    gap: 1.6rem;
    height: auto;
  }

  @media ${device.mobileAndBelow} {
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    height: auto;
  }
`;

export const CarouselCardTitle = styled.h4`
  all: unset;
  width: 100%;
  font-weight: 600;
  font-size: 1.6rem;
  text-align: left;
  color: ${({ theme }) => theme.headingColor.secondary};
  @media (${device.mobileAndBelow}) {
    text-align: center;
  }
`;

export const CarouselImageAnchor = styled.a``;

export const CarouselImg = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 2rem;
  @media (${device.tabletAndBelow}) {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  @media (${device.mobileAndBelow}) {
    width: 100%;
    height: unset;
  }

  &:hover {
    box-shadow: 1px 0.2px 6px #636363;
    transition: all 0.6s ease;
  }
`;

export const CarouselCardContent = styled.p`
  all: unset;
  width: 100%;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.5;
  text-align: left;
  color: ${({ theme }) => theme.color.secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  max-height: calc(
    1.2rem * 1.5 * 2
  ); /* font-size * line-height * number of lines */

  @media (${device.tabletAndBelow}) {
    text-align: center;
    -webkit-line-clamp: 1;
    max-height: calc(1.2rem * 1.5 * 1);
  }

  @media (${device.mobileAndBelow}) {
    text-align: center;
    -webkit-line-clamp: 3;
    max-height: calc(1.2rem * 1.5 * 3);
  }
`;

export const CarouselDate = styled.span``;
