import { Heading } from "styles";
import {
  CarouselContainer,
  CarouselWrapper,
  ContentBlockSection,
  ContentContainer,
} from "./index.styled";
import { Carousel } from "antd";
import { CarouselCard, GuardianSection } from "./components";
import { FC, memo } from "react";
import { NewsArticle } from "general";
import { useAppLoader } from "hooks";
import { Loader } from "components/Loader";

interface CarouselSectionProps {
  state: NewsArticle[];
}

const CarouselSection: FC<CarouselSectionProps> = memo(({ state }) => {
  const { loaders } = useAppLoader();

  if (loaders.appLoader) return <Loader />;

  return (
    <CarouselContainer>
      <Heading color="darkRed">Headlines</Heading>

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
          <ContentBlockSection>
            <GuardianSection />
          </ContentBlockSection>
        </ContentContainer>
      )}
    </CarouselContainer>
  );
});

export default CarouselSection;
