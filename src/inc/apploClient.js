import {
    ApolloClient,
    InMemoryCache
  } from "@apollo/client";

  export const client = new ApolloClient({
    uri: 'https://seia.internaltest.website/graphql',
    cache: new InMemoryCache()
  });