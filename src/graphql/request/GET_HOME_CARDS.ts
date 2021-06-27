import { CHARACTER_FRAGMENT } from "./../../graphql/request";
import { gql } from "@apollo/client";

const GET_HOME_CARDS = gql`
  query GetHomeCards {
    characters {
      ...Character
    }
  }
  ${CHARACTER_FRAGMENT}
`;

export default GET_HOME_CARDS;
