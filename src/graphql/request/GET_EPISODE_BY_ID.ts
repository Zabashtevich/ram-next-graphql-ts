import { gql } from "@apollo/client";

const GET_EPISODE_BY_ID = gql`
  query GetEpisodeById($id: ID!) {
    episode(id: $id) {
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`;

export default GET_EPISODE_BY_ID;
