import styled from "styled-components";
import { device } from "styles";

export const NewsCardContainer = styled.div`
  min-height: 20rem;
  line-height: 150%;
  overflow: hidden;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};

  height: 60rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem 3rem;

  @media (${device.mobileAndBelow}) {
    min-height: unset;
  }

  &:hover {
    box-shadow: 1px 0.2px 6px #636363;
    transition: all 0.6s ease;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
`;

export const NewsImg = styled.img`
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
`;

export const NewsCardTitle = styled.h4`
  all: unset;
  width: 100%;
  font-weight: 600;
  font-size: 1.6rem;
  text-align: left;
  line-height: 150%;
  color: ${({ theme }) => theme.headingColor.secondary};
  @media (${device.mobileAndBelow}) {
    text-align: center;
  }
`;

export const NewsCardContent = styled.p`
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

export const NewsFooter = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.headingColor.secondary};
  font-size: 1.2rem;
  font-weight: 500;
  gap: 0.4rem;
  @media ${device.mobileAndBelow} {
    width: 100%;
    gap: 1.2rem;
    flex-direction: column;
    place-items: center;
    justify-content: unset;
  }
`;

export const NewsAuthorName = styled.span`
  text-align: left;
  font-weight: 500;
  @media ${device.tabletAndBelow} {
    text-align: center;
  }
`;
export const NewsDate = styled.span`
  font-weight: 500;
  text-align: left;
`;
