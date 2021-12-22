import {
  Button,
  // TextField,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
// import produce from 'immer';
import {
  useQuery,
  // useApolloClient,
  useMutation,
} from '@apollo/client';
import { useMemo } from 'react';
// import { useSnackbar } from 'notistack';
import VodDetail from './VodDetail';
import { CREATE_VOD, GET_VODS } from './apollo/hooks';
// import { mongoObjectId } from '../../utils/generator';

interface Vod {
  _id: string;
  title: string;
  questions: {
    _id: string;
    staeement: string;
  }[];
  __typename: string;
}

const HomePage = () => {
  const classes = useStyles();
  // const client = useApolloClient();
  // const snackbarController = useSnackbar();

  const getVodsQuery = useQuery(GET_VODS);
  const [createVod, createVodResult] = useMutation(CREATE_VOD);

  const vods: Vod[] = useMemo(() => getVodsQuery.data?.getVods ?? [], [getVodsQuery.data]);

  const _handleClickAdNewVod = () => {
    const newVod = {
      title: 'New Vod',
      questions: [],
    };

    createVod({
      variables: {
        input: newVod,
      },
      refetchQueries: [{
        query: GET_VODS,
        variables: {},
      }],
      // update: (cache, { data: { createVod: newVodDb } }) => {
      //   try {
      //     const params = {
      //       query: GET_VODS,
      //       variables: {},
      //     };
      //     cache.writeQuery({
      //       ...params,
      //       data: produce(client.readQuery(params), (draft: any) => {
      //         draft.getVods.push(newVodDb);
      //       }),
      //     });
      //   } catch (error: any) {
      //     snackbarController.enqueueSnackbar(error.message ?? 'Ocurrio algun error');
      //   }
      // },
    });
  };

  if (getVodsQuery.loading) {
    return (
      <div>
        Loading ...
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {vods.map((vod) => (
        <VodDetail key={vod._id} {...vod} />
      ))}
      <Button onClick={_handleClickAdNewVod} disabled={createVodResult.loading}>
        Agregar vod a nivel de cache ( no existe en la base de datos)
      </Button>
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
