import {
  NewsActionType,
  NewsLoadersType,
  NewsReducerType,
  NewsType,
  ResetNewsAction,
  SetCarouselNews,
  SetFullNews,
  SetNewsAction,
  SetNewsLoaders,
} from "redux/types/newsTypes";

export const resetNewsState = (): ResetNewsAction => ({
  type: NewsActionType.RESET_NEWS,
});

export const setNewsState = (payload: NewsReducerType): SetNewsAction => ({
  type: NewsActionType.SET_NEWS_STATE,
  payload,
});

export const setFullNews = (payload: NewsType[] | null): SetFullNews => ({
  type: NewsActionType.SET_FULL_NEWS,
  payload,
});

export const setCarouselNews = (
  payload: NewsType[] | null,
): SetCarouselNews => ({
  type: NewsActionType.SET_CAROUSEL_NEWS,
  payload,
});

export const setNewsLoaders = (payload: NewsLoadersType): SetNewsLoaders => ({
  type: NewsActionType.SET_NEWS_LOADERS,
  payload,
});