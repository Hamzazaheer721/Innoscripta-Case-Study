import { NewsArticle } from "general";
import { CarouselCardContainer, CarouselImg } from "./index.styled";
import { FC, memo } from "react";

interface ICarouselCard {
  article: NewsArticle;
}

export const CarouselCard: FC<ICarouselCard> = memo(({ article }) => {
  // console.info({ article });
  return (
    <CarouselCardContainer>
      <CarouselImg
        src={article?.urlToImage ?? ""}
        alt={article?.author ?? "Author"}
        loading="lazy"
      />
      <h1>asdasdasd</h1>
    </CarouselCardContainer>
  );
});
