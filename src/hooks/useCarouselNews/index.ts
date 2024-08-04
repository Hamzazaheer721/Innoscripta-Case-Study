import { useAppSelector } from "hooks/useAppSelector";

export const useCarouselNews = () => {
  return useAppSelector((state) => state.news.carouselNews);
};
