import { gql, useMutation } from '@apollo/client';
import { TextField } from '@mui/material';
import produce from 'immer';
import { useSnackbar } from 'notistack';
import { FC, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const VOD_FRAGMENT = gql`
  fragment VodFragment on Vod {
    _id
    title
  }
`;

const UPDATE_VOD = gql`
  mutation updateVod(
    $vodId: ID!
    $input: UpdateVodInput!
  ) {
    updateVod(
      vodId: $vodId
      input: $input
    ) {
      title
    }
  }
`;

interface VodDetailProps {
  title: string;
  _id: string;
}

const VodDetail: FC<VodDetailProps> = ({ title, _id }) => {
  const [value, setValue] = useState(title);
  const [updateVod] = useMutation(UPDATE_VOD);
  const snackbarController = useSnackbar();

  const updateVodDebounce = useDebouncedCallback(({ vodId, input }: any) => {
    updateVod({
      variables: {
        vodId,
        input,
      },
      update: (cache) => {
        try {
          const params = {
            fragment: VOD_FRAGMENT,
            id: `Vod:${vodId}`,
          };
          cache.writeFragment({
            ...params,
            data: produce(cache.readFragment(params), (draft: any) => {
              draft.title = input.title;
            }),
          });
        } catch (error: any) {
          snackbarController.enqueueSnackbar(error.message ?? 'Ocurrio algun error');
        }
      },
    });
  }, 500);

  const _handleChange = ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(value);
    updateVodDebounce({
      vodId: _id,
      input: {
        title: value,
      },
    });
  };

  return (
    <div>
      <TextField value={value} onChange={_handleChange} />
    </div>
  );
};

export default VodDetail;
