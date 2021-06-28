import {
  charactersListFragment,
  episodesListFragment,
  locationsListFragment,
} from "../fragments/index";

export const cardsQueries = {
  characters: `
    ${charactersListFragment}
    query GetCharactersPage($page: Int!) {
      characters(page: $page) {
        info {
          pages
        }
        ...CharactersList
      }
    }
  `,
  episodes: `
  ${episodesListFragment}
  query GetEpisodesPage($page: Int!) {
    episodes(page: $page) {
      info {
        pages
      }
      ...EpisodesList
    }
  }
`,
  locations: `
  ${locationsListFragment}
    query GetLocationsPage($page: Int!) {
      locations(page: $page) {
        info {
          pages
        }
        ...LocationsList
      }
    }
  `,
};
