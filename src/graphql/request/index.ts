export const CHARACTERS_FRAGMENT = `
  fragment Character on Characters {
    results {
      status
      species
      image
      name
      id
      origin {
        id
        name
      }
      location {
        name
        id
      }
    }
  }
`;

export const LOCATIONS_FRAGMENT = ``;
