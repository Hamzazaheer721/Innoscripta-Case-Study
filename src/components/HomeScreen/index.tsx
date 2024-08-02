import { FC, memo } from "react";
import { HomeContainer } from "./index.styled";
import { Heading } from "styles";

export const HomeScreen: FC = memo(() => (
  <HomeContainer>
    <Heading secondary>Latest News</Heading>
  </HomeContainer>
));
