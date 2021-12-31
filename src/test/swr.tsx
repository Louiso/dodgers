import { Button } from '@mui/material';
// eslint-disable-next-line camelcase
import useSWR, { useSWRConfig, unstable_serialize } from 'swr';

/*
  El paradigma es hacer consultas cada vez q se entra nuevamente a una nuevamente.
  Para datos con scroll infinito seria invalidar estos datos cada vez q el componente se desmonta
*/

const fetcherData = (args: any) => {
  console.log('Luis Sullca ~ file: swr.tsx ~ line 5 ~ fetcher ~ args', args);
  const { url } = args;
  return fetch(url).then((res) => res.json());
};

function useMatchMutate() {
  const { cache, mutate } = useSWRConfig();

  const f = async (matcher: RegExp, ...args: any[]) => {
    if (!(cache instanceof Map)) {
      throw new Error('matchMutate requires the cache provider to be a Map instance');
    }

    const keys = [];

    console.log('cache.keys()', cache.keys());
    console.log('cache', cache);
    console.log('cache.entries', cache.entries());

    const key = unstable_serialize({
      url: 'https://api.github.com/repos/vercel/swr',
      method: 'GET',
      body: {
        search: '',
      },
    });
    console.log('unstable_serialize', cache.get(key));

    // eslint-disable-next-line no-restricted-syntax
    for (const key of cache.keys()) {
      // console.log('cache', cache.get(key));

      if (matcher.test(key)) {
        keys.push(key);
      }
    }

    console.log('keys', keys);

    // const mutations = keys.map((key) => mutate(key, ...args));
    // return Promise.all(mutations);
  };
  return f;
}

const AppSWR = () => {
  const matchMutate = useMatchMutate();

  const { data, error } = useSWR(
    {
      url: 'https://api.github.com/repos/vercel/swr',
      method: 'GET',
      body: {
        search: '',
      },
    },
    fetcherData,
  );

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👁 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <Button onClick={() => matchMutate(/^\/api\//)}>Mutate</Button>
    </div>
  );
};

export default AppSWR;
