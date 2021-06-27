import { CHARACTERS_FRAGMENT } from "./../../graphql/request";
import { gql } from "@apollo/client";

const GET_HOME_CARDS = gql`
  query GetHomeCards {
    characters {
      ...Character
    }
  }
  ${CHARACTERS_FRAGMENT}
`;

export default GET_HOME_CARDS;
