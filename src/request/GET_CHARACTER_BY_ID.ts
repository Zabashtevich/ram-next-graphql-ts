import { gql } from "@apollo/client";

const GET_CHARACTER_BY_ID = gql`
query GetCharacterById {
    charactersByIds(id: ID!) {
        status
        species
        image
        origin {
          id
          name
        }
        location {
          name
          id
        }
        name
        id
      }
    }
}`;

export default GET_CHARACTER_BY_ID;
