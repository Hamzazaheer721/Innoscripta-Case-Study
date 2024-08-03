import { combineReducers } from "redux";
import NewsReducer from "./newsReducer";
import { RootState } from "redux/types/rootTypes";
import { RootReducerType } from "general";

const appReducer = combineReducers({
  /* NOTE: I will add more reducers here if required */
  news: NewsReducer,
});

export const RootReducer: RootReducerType = (state, action): RootState => {
  return appReducer(state, action);
};

export default RootReducer;
