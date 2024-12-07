// Library imports
import { gql } from "@apollo/client";

export const CREATE_ITEM = gql`
  mutation CreateItem($name: String!) {
    insert_items(objects: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation UpdateItem($id: Int!, $name: String!) {
    update_items(where: { id: { _eq: $id } }, _set: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation DeleteItem($id: Int!) {
    delete_items(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;