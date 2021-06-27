import { gql } from "@apollo/client";

const GET_EPISODE_BY_ID = gql`
  query GetEpisodeById($id: ID!, $withCharacters: Boolean!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters @include(if: $withCharacters) {
        id
        name
        image
      }
    }
  }
`;

export default GET_EPISODE_BY_ID;
