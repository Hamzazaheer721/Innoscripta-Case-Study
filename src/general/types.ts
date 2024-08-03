import { FunctionComponent, ReactNode } from "react";
import { store } from "redux/store";
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

export type AppDispatch = typeof store.dispatch;
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
