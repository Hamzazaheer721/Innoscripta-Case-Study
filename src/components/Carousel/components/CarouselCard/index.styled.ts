import styled from "styled-components";
import { device } from "styles";

export const CarouselCardContainer = styled.div`
  min-height: 50rem;
  color: #fff;
  line-height: 150%;
  /* background: #364d79; */
  overflow: hidden;
  height: 100%;

  padding-inline: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (${device.mobileAndBelow}) {
    min-height: unset;
  }
`;

export const CarouselImageAnchor = styled.a``;

export const CarouselImg = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
  height: 30rem;
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

export const CarouselCardContent = styled.p`
  all: unset;
  width: 100%;
  font-weight: 400;
  font-size: 1.2rem;
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
  @media (${device.mobileAndBelow}) {
    text-align: center;
    -webkit-line-clamp: 3;
    max-height: calc(1.2rem * 1.5 * 3);
  }
`;

export const CarouselFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.headingColor.secondary};
  font-size: 1.2rem;
  font-weight: 500;
  align-items: center;
  @media ${device.mobileAndBelow} {
    width: 100%;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: unset;
  }
`;

export const CarouselAuthorName = styled.span``;
export const CarouselDate = styled.span``;
