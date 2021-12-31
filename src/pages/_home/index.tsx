import {
  Button,
  // TextField,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import counterSlice from '@slices/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery } from '@services/extensions/pokemonAPI';
import AppSWR from '../../test/swr';

const Pokemon = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  const [lazyGetPokemonByNameQuery, lazyGetPokemonByNameResult] = useLazyGetPokemonByNameQuery();
  const getPokemon = async () => {
    const { data: pok } = await lazyGetPokemonByNameQuery('charmander', false);
    console.log('Luis Sullca ~ file: index.tsx ~ line 17 ~ getPokemon ~ pok', pok);
  };

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data?.species.name}</h3>
          <img src={data?.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      <Button disabled={lazyGetPokemonByNameResult.isLoading} onClick={getPokemon}>Get Pokemon</Button>
    </div>
  );
};

const HomePage = () => {
  const classes = useStyles();

  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  const _handleClickRight = async () => {
    try {
      const a = await dispatch(counterSlice.actions.incrementByAmount(3));
      console.log('a', a);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={_handleClickRight}
        >
          Decrement
        </Button>
      </div>
      <Pokemon />
      <AppSWR />
    </div>
  );
};

const useStyles = makeStyles<Theme>((/* theme */) => ({
  root: {

  },
}), { name: 'HomePage' });

export default HomePage;
