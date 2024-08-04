import { useCarouselNews } from "hooks";

export const useCarouselSection = () => {
  const state = useCarouselNews();
  return { state };
};
