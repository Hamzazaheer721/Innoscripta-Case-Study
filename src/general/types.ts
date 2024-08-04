import { FunctionComponent, ReactNode } from "react";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "redux/types/rootTypes";

export type RoutesType = {
  path: string;
  Component: FunctionComponent;
  key: string;
};
export interface IErrorBoundryState {
  hasError: boolean;
}

export interface IErrorBoundryProps {
  children?: ReactNode;
}

export interface IApiError {
  message: string;
  description: string;
  statusCode: string | number;
}
export type AppDispatch = ThunkDispatch<RootState, void, any>;
export type Thunk = any;
export type RootReducerType = (state: any, action: any) => RootState;

export interface IDefaultThemeProps {
  color: Record<string, string>;
  backgroundColor: Record<string, string>;
  headingColor: Record<string, string>;
}
/* API URL Arguements */
export interface GetNewsApiURLType {
  country?: string;
  category?: string;
}

export interface Source {
  id: string | null;
  name: string | null;
}

export interface NewsArticle {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string | null;
  source: Source | null;
  title: string | null;
  url: string | null;
  urlToImage: string | null;
}
