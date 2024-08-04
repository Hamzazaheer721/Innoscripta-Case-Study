import { useAppSelector } from "hooks/useAppSelector";

export const useCarouselNews = () =>
  useAppSelector((state) => state.news.carouselNews);
