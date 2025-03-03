'use client';

import apolloClient from '@/lib/apollo-client';
import { ApolloProvider as BaseApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';

interface ApolloProviderProps {
  children: ReactNode;
}

export default function ApolloProvider({ children }: ApolloProviderProps) {
  // This component will be uncommented when the GraphQL URL is provided
  // For now, we'll just return the children

  return (
    <BaseApolloProvider client={apolloClient}>{children}</BaseApolloProvider>
  );
}
