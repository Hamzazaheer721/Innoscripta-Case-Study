import { useAppSelector } from "hooks";

export const useCarouselSection = () => {
  const state = useAppSelector((state) => state.news.carouselNews);
  return { state };
};
