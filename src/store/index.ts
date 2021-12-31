import { configureStore } from '@reduxjs/toolkit';
import { pokemonAPI } from '@services/extensions/pokemonAPI';
import counterSlice from '@slices/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [pokemonAPI.reducerPath]: pokemonAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
