export const CHARACTERS_FRAGMENT = `
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

export const LOCATIONS_FRAGMENT = ``;
