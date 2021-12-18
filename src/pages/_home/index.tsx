import {
  Button,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  memo, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useParams } from 'react-router-dom';

import Children from './Children';

const HomePage = () => {
  const classes = useStyles();
  const params = useParams();
  const [value, setValue] = useState(1);
  const [count, setCount] = useState(1);
  const ref = useRef<any | null>(null);

  // redefinir
  // const valueDouble = useMemo(() => value * 2, [value]);
  const valueDouble = 22222;

  const _handleClickCount = useCallback(() => {
    console.log('_handleClickCount');
    setCount((count) => count * 2);
  }, []);

  const _handleClickRef = () => {
    console.log('ref.current', ref.current);
    ref.current.click();
  };

  useEffect(() => {
    console.log('mount');
  }, []);

  useEffect(() => {
    console.log('value', value);
  }, [value]);

  console.log('Hijo ya saliste?');
  console.log('ref.current', ref.current);

  console.log('params', params);

  return (
    <div className={classes.root}>
      <div>{value}</div>
      <div>{count}</div>
      <div>{JSON.stringify(valueDouble, null, 2)}</div>
      <Button onClick={_handleClickCount}>Click</Button>
      <Button onClick={_handleClickRef}>Click ref</Button>
      <Children onClick={_handleClickCount} valueDouble={valueDouble} ref={ref} />
    </div>
  );
};

const useStyles = makeStyles<Theme>((/* theme */) => ({
  root: {

  },
}), { name: 'HomePage' });

export default HomePage;

// tiempo
// memoria
