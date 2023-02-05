import { configureStore, createSlice } from '@reduxjs/toolkit';
import { MovieOrTVShow } from '../comps/model';

const selectedMovieOrTvShowSlice = createSlice({
  name: 'selectedMovieOrTvShow',
  initialState: [] as MovieOrTVShow[],
  reducers: {
    updateSelectedMovieOrTvShow(state, action: { payload: MovieOrTVShow }) {
      return [action.payload];
    },
  },
});

const store = configureStore({
  reducer: {
    selectedMovieOrTvShow: selectedMovieOrTvShowSlice.reducer,
  },
});

export default store;

export const { updateSelectedMovieOrTvShow } =
  selectedMovieOrTvShowSlice.actions;
