import { normalize, schema } from 'normalizr';

const originalData = {
  id: '123',
  author: {
    id: '1',
    name: 'Paul',
  },
  title: 'My awesome blog post',
  comments: [
    {
      id: '324',
      commenter: {
        id: '2',
        name: 'Nicole',
      },
    },
  ],
};

// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user,
});

// Define your article
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment],
});

const normalizedData = normalize(originalData, article);
console.log('Luis Sullca ~ file: index.tsx ~ line 45 ~ normalizedData', normalizedData);