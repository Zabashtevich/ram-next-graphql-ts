export const charactersListFragment = `
  fragment CharactersList on Characters {
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

export const episodesListFragment = ` 
  fragment EpisodesList on Episodes {
    results {
        id
        name
        air_date
        episode
     }
}`;

export const locationsListFragment = `
  fragment LocationsList on Locations {
    results {
        id
        name
        type
        dimension
      }
  }`;
