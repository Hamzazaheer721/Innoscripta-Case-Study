import { Action } from "redux";

export type NewsType = Record<string, any>;

export type NewsReducerType = {
  carouselNews: NewsType[] | null;
  fullNews: NewsType[] | null;
};

export enum NewsActionType {
  RESET_NEWS = "RESET_NEWS",
  SET_NEWS_STATE = "SET_NEWS_STATE",
  SET_FULL_NEWS = "SET_FULL_NEWS",
  SET_CAROUSEL_NEWS = "SET_CAROUSEL_NEWS",
}

// Action creators
export interface ResetNewsAction extends Action {
  type: NewsActionType.RESET_NEWS;
}

export interface SetNewsAction extends Action {
  type: NewsActionType.SET_NEWS_STATE;
  payload: NewsReducerType;
}

export interface SetFullNews extends Action {
  type: NewsActionType.SET_FULL_NEWS;
  payload: NewsType[] | null;
}

export interface SetCarouselNews extends Action {
  type: NewsActionType.SET_CAROUSEL_NEWS;
  payload: NewsType[] | null;
}

// Union on all action creators to use on the reducer
export type NewsActions =
  | ResetNewsAction
  | SetNewsAction
  | SetFullNews
  | SetCarouselNews;
