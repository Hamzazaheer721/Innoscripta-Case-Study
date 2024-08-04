import { useAppSelector } from "hooks/useAppSelector";

export const useFullNews = () => useAppSelector((state) => state.news.fullNews);
