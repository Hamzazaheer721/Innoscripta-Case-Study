import { createStore, applyMiddleware, compose, Store } from "redux";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootState } from "./types/rootTypes";
import RootReducer from "./reducers/rootReducer";
import { Thunk } from "general";
import { thunk } from "redux-thunk";

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["news"],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<RootState> = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk as Thunk)),
);

const persistor = persistStore(store);

export { store, persistor };
