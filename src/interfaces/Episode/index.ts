export interface IEpisode {
  episode: {
    name: string;
    air_date: string;
    episode: string;
    characters: { id: string; name: string }[];
  };
}

export interface EpisodeProps {
  error?: boolean;
  data?: IEpisode;
}

export interface EpisodeVariables {
  id: string;
}
