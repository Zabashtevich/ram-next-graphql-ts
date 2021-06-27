import { gql } from "@apollo/client";

const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      status
      species
      image
      name
      id
      origin {
        id
        name
      }
      location {
        name
        id
      }
    }
  }
`;

export default GET_CHARACTER_BY_ID;
