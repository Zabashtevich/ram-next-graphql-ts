import { gql } from "@apollo/client";

const GET_HOME_CARDS = gql`
  query GetHomeCards {
    characters {
      results {
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
  }
`;

export default GET_HOME_CARDS;
