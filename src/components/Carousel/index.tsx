import { Heading } from "styles";
import {
  CarouselContainer,
  CarouselWrapper,
  ContentBlockSection,
  ContentContainer,
} from "./index.styled";
import { Carousel } from "antd";
import { CarouselCard } from "./components";
import { memo } from "react";
import { useCarouselSection } from "./index.hook";
import { NewsArticle } from "general";

const CarouselSection = memo(() => {
  const { state } = useCarouselSection();

  return (
    <CarouselContainer>
      <Heading color="red">Latest News</Heading>
      {!!state?.length && (
        <ContentContainer>
          <CarouselWrapper>
            <Carousel
              autoplay
              draggable
              adaptiveHeight
              lazyLoad="progressive"
              speed={1500}
              swipe
              autoplaySpeed={2500}
            >
              {state?.map((article: NewsArticle, idx: number) => {
                return (
                  <div key={String(idx)}>
                    <CarouselCard article={article} />
                  </div>
                );
              })}
            </Carousel>
          </CarouselWrapper>{" "}
          <ContentBlockSection>hey</ContentBlockSection>
        </ContentContainer>
      )}
    </CarouselContainer>
  );
});

export default CarouselSection;
