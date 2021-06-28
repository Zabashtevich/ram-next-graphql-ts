import { gql } from "@apollo/client";
import { charactersListFragment } from "../fragments";

const GET_HOME_CARDS = gql`
  query GetHomeCards {
    characters {
      ...Character
    }
  }
  ${charactersListFragment}
`;

export default GET_HOME_CARDS;
