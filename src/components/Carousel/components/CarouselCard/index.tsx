import { NewsArticle } from "general";
import { CarouselCardContainer } from "./index.styled";
import { FC, memo } from "react";

interface ICarouselCard {
  article: NewsArticle;
}

export const CarouselCard: FC<ICarouselCard> = memo(({ article }) => {
  console.info({ article });
  return <CarouselCardContainer>const</CarouselCardContainer>;
});
