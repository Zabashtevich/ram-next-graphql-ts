export interface ApiVariables {
  name: string;
}

export interface ApiRequest<T, K, M> {
  data?:
    | { characters: { results: T[] } }
    | { locations: { results: K[] } }
    | { episodes: { results: M[] } };
  error?: boolean;
}
