import { memo } from "react";
import { useAppSelector } from "hooks";
import { NewsCard } from "./components";
import { CardsWrapper, Container } from "./index.styled";
import { Heading } from "styles";

export const NewsFeed = memo(() => {
  const state = useAppSelector((state) => state.news.fullNews);

  return (
    <Container>
      <hr style={{ marginBottom: "2rem" }} />
      <Heading style={{ fontSize: "2rem" }}>News Feed</Heading>

      <CardsWrapper>
        {state?.map((article, idx: number) => {
          return <NewsCard article={article} key={`news-card-${idx}`} />;
        })}
      </CardsWrapper>
      {/* Heading: User News Feed */}
      {/* User Section */}
      {/* Cards Section */}
    </Container>
  );
});
