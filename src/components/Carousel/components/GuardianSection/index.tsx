import { Carousel } from "antd";
import { FC, memo } from "react";
import {
  GuardianCarouselCardContainer,
  GuardianCarouselWrapper,
  GuardianContainer,
} from "./index.styled";
import { useGuardianCarousel } from "./index.hook";

export const GuardianCarouselCard: FC<any> = memo(() => {
  return (
    <GuardianCarouselCardContainer>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quasi,
      deleniti fugiat ullam fugit consequatur quia necessitatibus a ipsam dolor
      accusantium quidem sint magni. Reiciendis minima illum laboriosam deleniti
      nesciunt?
    </GuardianCarouselCardContainer>
  );
});

export const GuardianSection = memo(() => {
  const { state } = useGuardianCarousel();

  console.info({ state });
  return (
    <GuardianContainer>
      <GuardianCarouselWrapper>
        <Carousel
          rootClassName="guardian-cls"
          autoplay
          draggable
          adaptiveHeight
          lazyLoad="progressive"
          speed={1500}
          swipe
          autoplaySpeed={2500}
          dotPosition="right"
        >
          {state?.map((article: any, idx: number) => {
            return (
              <div key={`Guardian-card-${idx}`}>
                <GuardianCarouselCard article={article} />
              </div>
            );
          })}
        </Carousel>
      </GuardianCarouselWrapper>
    </GuardianContainer>
  );
});
