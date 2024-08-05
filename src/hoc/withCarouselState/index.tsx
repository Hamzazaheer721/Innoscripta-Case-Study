import { useCarouselSection } from "components/Carousel/index.hook";
import { NewsArticle } from "general";
import React from "react";

export interface MyProps {
  state: NewsArticle[] | null;
}

export const withCarouselState = <T extends MyProps>(
  WrappedComponent: React.ComponentType<T>,
) => {
  return (props: Omit<T, keyof MyProps>) => {
    const { state } = useCarouselSection();
    const newProps = {
      state,
    };
    return <WrappedComponent {...(props as T)} {...newProps} />;
  };
};
