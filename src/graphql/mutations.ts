import { gql } from '@apollo/client';

/**
 * Example mutation to create a new item
 * This is a placeholder and will be updated when the actual GraphQL schema is provided
 */
export const CREATE_ITEM = gql`
  mutation CreateItem($input: CreateItemInput!) {
    createItem(input: $input) {
      id
      name
      description
      createdAt
    }
  }
`;

/**
 * Example mutation to update an existing item
 * This is a placeholder and will be updated when the actual GraphQL schema is provided
 */
export const UPDATE_ITEM = gql`
  mutation UpdateItem($id: ID!, $input: UpdateItemInput!) {
    updateItem(id: $id, input: $input) {
      id
      name
      description
      updatedAt
    }
  }
`;

/**
 * Example mutation to delete an item
 * This is a placeholder and will be updated when the actual GraphQL schema is provided
 */
export const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      success
      message
    }
  }
`;
