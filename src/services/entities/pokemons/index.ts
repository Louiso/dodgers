import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { pokemonAPI } from '@services/extensions/pokemonAPI';
import { Pokemon } from '@services/types';

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
