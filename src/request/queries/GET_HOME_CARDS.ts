import { gql } from "@apollo/client";

const GET_HOME_CARDS = gql`
  query GetHomeCards {
    characters {
      info {
        count
      }
      results {
        name
        id
      }
    }
  }
`;

export default GET_HOME_CARDS;
