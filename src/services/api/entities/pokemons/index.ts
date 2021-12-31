import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../../extensions/types';
import { pokemonAPI } from '../../extensions/pokemonAPI';

const pokemonAdapter = createEntityAdapter<Pokemon>({
  selectId: (pokemon) => pokemon.id,
});

const pokemonEntity = createSlice({
  name: 'pokemons',
  initialState: pokemonAdapter.getInitialState({ loading: false }),
  reducers: {},
  extraReducers: {
    // [pokemonAPI.util.]: (state, action) => {
    //   state.loading = true;
    // },
  },
});
