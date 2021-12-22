// import { loader } from 'graphql.macro';

import { gql } from '@apollo/client';

// export const CREATE_VOD = loader('./createVod.graphql');
// export const GET_VODS = loader('./getVods.graphql');

// console.log('CREATE_VOD', CREATE_VOD);
// console.log('GET_VODS', GET_VODS);

export const GET_VODS = gql`
  query GetVods {
    getVods {
      _id
      title
      questions {
        _id
        statement
        urlSourceAnswer
        updatedAt
        createdAt
      }
      updatedAt
      createdAt
    }
  }
`;

export const CREATE_VOD = gql`
  mutation createVod($input: CreateVodInput!) {
    createVod(input: $input) {
      _id
      title
      questions {
        _id
        statement
        urlSourceAnswer
      }
    }
  }
`;
