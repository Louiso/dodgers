import {
  Button,
  // TextField,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import counterSlice from '@slices/counter/counterSlice';
import { RootState } from '../../store';

const HomePage = () => {
  const classes = useStyles();

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

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
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles<Theme>((/* theme */) => ({
  root: {

  },
}), { name: 'HomePage' });

export default HomePage;
