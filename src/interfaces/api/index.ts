import { IEpisode } from "./../episode/index";
import { ILocation } from "./../location/index";
import { SearchPageResponse } from "../pages/SearchPage";
import { ICharacter } from "../character/index";

export interface SearchApiProps {
  error?: boolean;
  data?: SearchPageResponse;
}

export type SearchApiResponse =
  | CharactersResponse
  | LocationsResponse
  | EpisodesResponse;

interface CharactersResponse {
  characters: {
    info: {
      pages: string;
    };
    results: ICharacter[];
  };
}

interface LocationsResponse {
  locations: {
    info: {
      pages: string;
    };
    results: ILocation[];
  };
}

interface EpisodesResponse {
  episodes: {
    info: {
      pages: string;
    };
    results: IEpisode[];
  };
}
