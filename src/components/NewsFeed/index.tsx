import { memo } from "react";
import { useAppSelector } from "hooks";
import { NewsCard } from "./components";
import { CardsWrapper, Container } from "./index.styled";
import { Heading } from "styles";
import { UserOperations } from "./components/UserOperations";

export const NewsFeed = memo(() => {
  const state = useAppSelector((state) => state.news.filteredNews);

  return (
    <Container>
      <hr style={{ marginBottom: "2rem" }} />
      <Heading style={{ fontSize: "2rem" }}>News Feed</Heading>
      <UserOperations />
      <hr style={{ marginBlock: "2rem" }} />
      <CardsWrapper>
        {state
          ?.filter((article) => !!article?.author)
          ?.map((article, idx: number) => {
            return <NewsCard article={article} key={`news-card-${idx}`} />;
          })}
      </CardsWrapper>
    </Container>
  );
});
