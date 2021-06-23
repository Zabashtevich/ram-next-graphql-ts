import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const graphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.API_URL,
  }),
  ssrMode: typeof window === "undefined",
});

export default graphqlClient;
