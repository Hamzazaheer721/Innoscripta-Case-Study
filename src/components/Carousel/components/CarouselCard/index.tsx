import { defaultURL, NewsArticle } from "general";
import {
  CarouselAuthorName,
  CarouselCardContainer,
  CarouselCardContent,
  CarouselCardTitle,
  CarouselDate,
  CarouselFooter,
  CarouselImageAnchor,
  CarouselImg,
} from "./index.styled";
import { FC, memo } from "react";

interface ICarouselCard {
  article: NewsArticle;
}

export const CarouselCard: FC<ICarouselCard> = memo(({ article }) => {
  return (
    <CarouselCardContainer>
      {" "}
      <CarouselCardTitle>{article?.title}</CarouselCardTitle>
      <CarouselImageAnchor
        href={article?.url ?? defaultURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CarouselImg
          src={article?.urlToImage ?? ""}
          alt={article?.author ?? "Author"}
          loading="lazy"
        />
      </CarouselImageAnchor>
      <CarouselCardContent>{article?.content}</CarouselCardContent>
      <CarouselFooter>
        <CarouselAuthorName>{article?.author}</CarouselAuthorName>
        <CarouselDate>{article?.publishedAt}</CarouselDate>
      </CarouselFooter>
    </CarouselCardContainer>
  );
});
