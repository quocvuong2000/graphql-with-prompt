import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// This URL will be updated when the GraphQL server URL is provided
// For now, we'll use a placeholder URL
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL!;

// Create an HTTP link to the GraphQL server
const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
});

// Create the Apollo Client instance
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
});

export default apolloClient;