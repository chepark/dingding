import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import logger from "redux-logger";
import journeysReducer from "../components/Journeys/journeysSlice";

export const store = configureStore({
  reducer: { journeys: journeysReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
