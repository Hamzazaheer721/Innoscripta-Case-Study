import { NewsReducerType } from "./types/newsTypes";

export const initialNewsState: NewsReducerType = {
  carouselNews: null,
  fullNews: null,
  filteredNews: null,
  loaders: {
    appLoader: false,
    guardianNewsLoader: false,
    latestNewsLoader: false,
    newsApiMainloader: false,
  },
};
