import { Carousel } from "antd";
import { FC, memo } from "react";
import {
  GuardianCarouselCardContainer,
  GuardianCarouselCardTitle,
  GuardianCarouselDate,
  GuardianCarouselImageAnchor,
  GuardianCarouselImg,
  GuardianCarouselWrapper,
  GuardianContainer,
} from "./index.styled";
import { useGuardianCarousel } from "./index.hook";
import { defaultURL } from "general";
import { Heading } from "styles";

interface IGuardianCarouselCardProps {
  article: Record<string, string>;
}
export const GuardianCarouselCard: FC<IGuardianCarouselCardProps> = memo(
  ({ article }) => {
    const { urlToImg, publishedAt, category, url, title } = article;
    return (
      <GuardianCarouselCardContainer>
        <Heading color={"darkRed"}>{category}</Heading>
        <GuardianCarouselImageAnchor
          href={url ?? defaultURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GuardianCarouselImg
            src={urlToImg ?? ""}
            alt={`gCarousel-${article?.author ?? "Author"}`}
            loading="lazy"
          />
        </GuardianCarouselImageAnchor>
        <GuardianCarouselCardTitle>{title}</GuardianCarouselCardTitle>
        <GuardianCarouselDate>{publishedAt}</GuardianCarouselDate>
      </GuardianCarouselCardContainer>
    );
  },
);

export const GuardianSection = memo(() => {
  const { state } = useGuardianCarousel();
  return (
    <GuardianContainer>
      <GuardianCarouselWrapper>
        <Carousel
          rootClassName="guardian-cls"
          autoplay
          draggable
          adaptiveHeight
          lazyLoad="progressive"
          speed={1500}
          swipe
          autoplaySpeed={2500}
          dotPosition="right"
        >
          {state?.map((article: Record<string, string>, idx: number) => {
            return (
              <div key={`Guardian-card-${idx}`}>
                <GuardianCarouselCard article={article} />
              </div>
            );
          })}
        </Carousel>
      </GuardianCarouselWrapper>
    </GuardianContainer>
  );
});
