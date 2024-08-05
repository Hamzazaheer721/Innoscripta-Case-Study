import { Carousel } from "antd";
import { FC, memo } from "react";
import {
  CarouselCardContainer,
  CarouselCardTitle,
  CarouselDate,
  CarouselImageAnchor,
  CarouselImg,
  CarouselWrapper,
  MainContainer,
} from "./index.styled";
import { useGuardianCarousel } from "./index.hook";
import { defaultURL } from "general";
import { Heading } from "styles";
import { Loader } from "components/Loader";

interface IOtherNewsCarouselCard {
  article: Record<string, string>;
}

export const OtherNewsCarouselCard: FC<IOtherNewsCarouselCard> = memo(
  ({ article }) => {
    const { urlToImg, publishedAt, category, url, title } = article;
    return (
      <CarouselCardContainer>
        <Heading color={"darkRed"}>{category}</Heading>
        <CarouselImageAnchor
          href={url ?? defaultURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CarouselImg
            src={urlToImg ?? ""}
            alt={`gCarousel-${article?.author ?? "Author"}`}
            loading="lazy"
          />
        </CarouselImageAnchor>
        <CarouselCardTitle>{title}</CarouselCardTitle>
        <CarouselDate>{publishedAt}</CarouselDate>
      </CarouselCardContainer>
    );
  },
);

export const GuardianSection = memo(() => {
  const { state, isLoading, error } = useGuardianCarousel();

  // eslint-disable-next-line no-constant-condition
  if (isLoading)
    return (
      <CarouselCardContainer>
        <Loader height="100%" />
      </CarouselCardContainer>
    );

  if (error) return null;

  return (
    <MainContainer>
      <CarouselWrapper>
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
                <OtherNewsCarouselCard article={article} />
              </div>
            );
          })}
        </Carousel>
      </CarouselWrapper>
    </MainContainer>
  );
});
