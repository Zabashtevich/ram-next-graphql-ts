import { gql } from "@apollo/client";

export const CHARACTER_FRAGMENT = `
  fragment Character on Characters {
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
`;
