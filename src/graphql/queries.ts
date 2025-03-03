import { gql } from '@apollo/client';

/**
 * Example query to fetch a list of items
 * This is a placeholder and will be updated when the actual GraphQL schema is provided
 */
export const GET_ITEMS = gql`
  query GetPokemons {
  pokemons(limit: 100, offset: 0) {
    results {
      name
      artwork
      id
    }
  }
}
`;

/**
 * Example query to fetch a single item by ID
 * This is a placeholder and will be updated when the actual GraphQL schema is provided
 */
export const GET_ITEM_BY_ID = gql`
  query GetItemById($id: ID!) {
    item(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      # Additional fields will be added based on the actual schema
    }
  }
`;

/**
 * Example query to fetch user information
 * This is a placeholder and will be updated when the actual GraphQL schema is provided
 */
export const GET_USER = gql`
  query GetUser {
    currentUser {
      id
      name
      email
      avatar
    }
  }
`;
