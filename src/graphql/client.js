// Library imports
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://saving-stallion-64.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': '2LR6FH5NxSb54FmDgGSsw6eQIKtOgrblKeM2VvwSFZe2OlPW2H8A5jjB30NrJfOp',
  },
});

export default client;
