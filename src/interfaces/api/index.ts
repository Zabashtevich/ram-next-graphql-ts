import { IEpisode } from "./../episode/index";
import { ILocation } from "./../location/index";
import { ICharacters } from "./../characters/index";

export interface ApiVariables {
  name: string;
}

export interface IProps {
  error?: boolean;
  results?: IApiResponse;
}

export interface IApiResponse {
  data:
    | ICharacters
    | { locations: { results: ILocation[] } }
    | { episodes: { results: IEpisode[] } };
}
