import { FC, memo } from "react";
import { HomeContainer } from "./index.styled";
import Carousel from "components/Carousel";
import { useHomeScreen } from "./index.hook";

export const HomeScreen: FC = memo(() => {
  useHomeScreen();
  return (
    <HomeContainer>
      <Carousel />
    </HomeContainer>
  );
});
