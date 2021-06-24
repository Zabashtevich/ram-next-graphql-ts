export type HomePageRequestItem = {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
    id: string;
  };
  origin: {
    name: string;
    id: string;
  };
};

export interface HomePageRequestData {
  characters: {
    results: HomePageRequestItem[];
  };
}

export interface HomePageProps {
  error?: boolean;
  data?: HomePageRequestData;
}
