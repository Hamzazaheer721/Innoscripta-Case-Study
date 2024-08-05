import { Reducer } from "redux";

import {
  NewsActions,
  NewsActionType,
  NewsReducerType,
} from "redux/types/newsTypes";
import { initialNewsState } from "redux/helper";

const NewsReducer: Reducer<NewsReducerType, NewsActions> = (
  state: NewsReducerType = initialNewsState,
  action: NewsActions,
) => {
  switch (action.type) {
    case NewsActionType.RESET_NEWS:
      return {
        carouselNews: null,
        fullNews: null,
        loaders: {
          appLoader: false,
          guardianNewsLoader: false,
          latestNewsLoader: false,
          newsApiMainloader: false,
        },
      };
    case NewsActionType.SET_NEWS_STATE:
      return {
        ...action.payload,
        loaders: state.loaders,
      };
    case NewsActionType.SET_FULL_NEWS: {
      const fullNews =
        action.payload?.filter((article) => !!article?.author) ?? null;
      return {
        ...state,
        fullNews: fullNews,
      };
    }
    case NewsActionType.SET_CAROUSEL_NEWS:
      return {
        ...state,
        carouselNews: action.payload,
      };
    case NewsActionType.SET_NEWS_LOADERS:
      return {
        ...state,
        loaders: action.payload,
      };
    default:
      return state;
  }
};

export default NewsReducer;
