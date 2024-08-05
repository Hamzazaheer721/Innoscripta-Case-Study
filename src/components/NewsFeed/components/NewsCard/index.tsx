import { defaultURL, NewsArticle } from "general";
import { FC, memo } from "react";
import {
  NewsAuthorName,
  NewsCardContainer,
  NewsCardContent,
  NewsCardTitle,
  NewsDate,
  NewsFooter,
  Anchor,
  NewsImg,
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
      <NewsCardContainer>
        <NewsCardTitle>{article?.title}</NewsCardTitle>
        <NewsImg
          src={article?.urlToImage ?? ""}
          alt={article?.author ?? "Author"}
          loading="lazy"
        />
        {article?.noContent ? (
          <div style={{ height: "36px" }} />
        ) : (
          <NewsCardContent>{article?.content}</NewsCardContent>
        )}
        <NewsFooter>
          <b>Source: </b>
          <NewsAuthorName>
            {" "}
            {article?.source?.name ?? "Google News"}
          </NewsAuthorName>
        </NewsFooter>
        <NewsFooter>
          <b>Author: </b>
          <NewsAuthorName> {article?.author}</NewsAuthorName>
        </NewsFooter>
        <NewsFooter>
          <b>Published at: </b>
          <NewsDate> {article?.publishedAt}</NewsDate>
        </NewsFooter>
      </NewsCardContainer>
    </Anchor>
  );
});
