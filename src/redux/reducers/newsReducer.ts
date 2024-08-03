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
      };
    case NewsActionType.SET_NEWS_STATE:
      return {
        ...action.payload,
      };
    case NewsActionType.SET_FULL_NEWS:
      return {
        ...state,
        fullNews: action.payload,
      };
    case NewsActionType.SET_CAROUSEL_NEWS:
      return {
        ...state,
        carouselNews: action.payload,
      };
    default:
      return state;
  }
};

export default NewsReducer;
