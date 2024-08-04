import { FC, memo } from "react";
import { HomeContainer } from "./index.styled";
import Carousel from "components/Carousel";
import { useHomeScreen } from "./index.hook";
import { NewsFeed } from "components/NewsFeed";

export const HomeScreen: FC = memo(() => {
  useHomeScreen();
  return (
    <HomeContainer>
      <Carousel />
      <NewsFeed />
    </HomeContainer>
  );
});
