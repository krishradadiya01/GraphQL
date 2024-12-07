// Library imports
import { gql } from '@apollo/client';

export const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
    }
  }
`;