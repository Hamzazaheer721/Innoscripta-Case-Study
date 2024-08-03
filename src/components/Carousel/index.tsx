import { Heading } from "styles";
import {
  CarouselContainer,
  CarouselWrapper,
  ContentBlockSection,
  ContentContainer,
} from "./index.styled";
import { Carousel } from "antd";
import { CarouselCard } from "./components";
import { memo, useEffect } from "react";
import axios from "axios";
import { getGuardianAPIURL } from "config";

const CarouselSection = memo(() => {
  const getApi = async () => {
    try {
      const { data } = await axios.get(getGuardianAPIURL());

      console.info({ data });
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    getApi();
  }, []);
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
