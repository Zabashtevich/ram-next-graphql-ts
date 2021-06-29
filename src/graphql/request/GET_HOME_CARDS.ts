import { gql } from "@apollo/client";
import { charactersListFragment } from "../fragments";

const GET_HOME_CARDS = gql`
  ${charactersListFragment}
  query GetHomeCards {
    characters {
      ...CharactersList
    }
  }
`;

export default GET_HOME_CARDS;
