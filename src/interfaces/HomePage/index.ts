type HomePageRequestItem = {
  id: string;
  name: string;
  status: string;
  location: {
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
