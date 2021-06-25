import { gql } from "@apollo/client";

const GET_LOCATION_BY_ID = gql`
  query GetCharacterById($id: ID) {
    location(id: $id) {
      name
      type
      dimension
      residents {
        name
        id
        image
      }
    }
  }
`;

export default GET_LOCATION_BY_ID;
