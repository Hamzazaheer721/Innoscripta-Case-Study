import { FC, memo } from "react";
import { HomeContainer } from "./index.styled";
import Carousel from "components/Carousel";

export const HomeScreen: FC = memo(() => (
  <HomeContainer>
    <Carousel />
  </HomeContainer>
));
