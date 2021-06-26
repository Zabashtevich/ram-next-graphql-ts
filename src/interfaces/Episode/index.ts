export interface IEpisode {
  episode: {
    name: string;
    air_date: string;
    episode: string;
    characters: { id: string; name: string; image: string }[];
  };
}

export interface EpisodePageProps {
  error?: boolean;
  data?: IEpisode;
}

export interface EpisodeVariables {
  id: string;
}
