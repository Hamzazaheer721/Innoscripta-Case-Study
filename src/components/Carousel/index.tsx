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

const CarouselSection = memo(() => {
  return (
    <CarouselContainer>
      <Heading secondary>Latest News</Heading>
      <ContentContainer>
        <CarouselWrapper>
          <Carousel arrows>
            <div>
              <CarouselCard />
            </div>
            <div>
              <CarouselCard />
            </div>
            <div>
              <CarouselCard />
            </div>
            <div>
              <CarouselCard />
            </div>
          </Carousel>
        </CarouselWrapper>{" "}
        <ContentBlockSection>hey</ContentBlockSection>
      </ContentContainer>
    </CarouselContainer>
  );
});

export default CarouselSection;
