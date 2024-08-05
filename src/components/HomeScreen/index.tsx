import { FC, memo } from "react";
import { HomeContainer } from "./index.styled";
import Carousel from "components/Carousel";
import { useHomeScreen } from "./index.hook";
import { NewsFeed } from "components/NewsFeed";
import { withCarouselState } from "hoc";

const EnhancedCarouselSection = withCarouselState(Carousel);

export const HomeScreen: FC = memo(() => {
  useHomeScreen();
  return (
    <HomeContainer>
      <EnhancedCarouselSection />
      <NewsFeed />
    </HomeContainer>
  );
});
