import { defaultURL, NewsArticle, parseDate } from "general";
import { FC, memo } from "react";
import {
  CarouselAuthorName,
  CarouselCardContainer,
  CarouselCardContent,
  CarouselCardTitle,
  CarouselDate,
  CarouselFooter,
  Anchor,
  CarouselImg,
} from "./index.styled";

interface INewsCardProps {
  article: NewsArticle;
}

export const NewsCard: FC<INewsCardProps> = memo(({ article }) => {
  return (
    <Anchor
      href={article?.url ?? defaultURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CarouselCardContainer>
        <CarouselCardTitle>{article?.title}</CarouselCardTitle>

        <CarouselImg
          src={article?.urlToImage ?? ""}
          alt={article?.author ?? "Author"}
          loading="lazy"
        />
        <CarouselCardContent>{article?.content}</CarouselCardContent>
        <CarouselFooter>
          <CarouselAuthorName>{article?.author}</CarouselAuthorName>
          <CarouselDate>
            {parseDate(article?.publishedAt ?? new Date().toISOString())}
          </CarouselDate>
        </CarouselFooter>
      </CarouselCardContainer>
    </Anchor>
  );
});
