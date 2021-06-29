import { IEpisode } from "./../episode/index";
import { ILocation } from "./../location/index";
import { ICharacter } from "../character/index";
import { NextPageContext } from "next";

export interface SearchPageProps {
  data?: SearchPageResponse;
  error?: boolean;
  pagesAmount?: string;
}

export interface SearchPageContext extends NextPageContext {
  query: {
    target: string;
    page: string;
  };
}

export type SearchPageResponse =
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
