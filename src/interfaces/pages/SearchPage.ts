import { IEpisode } from "./../episode/index";
import { ILocation } from "./../location/index";
import { ICharacterItem } from "../characters/index";
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

export interface SearchPageResponse {
  characters?: {
    info: {
      pages: string;
    };
    results: ICharacterItem[];
  };
  episodes?: {
    info: {
      pages: string;
    };
    results: IEpisode[];
  };
  locations?: {
    info: {
      pages: string;
    };
    results: ILocation[];
  };
}

export type SearchPageCards = ILocation[] | IEpisode[] | ICharacterItem[];
