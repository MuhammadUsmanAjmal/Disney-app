import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../Features/Users/userSlice";
import movieReducer from "../Features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});