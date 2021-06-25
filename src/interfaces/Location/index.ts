export interface LocationRequestData {
  location: {
    name: string;
    type: string;
    dimension: string;
    residents: { name: string; id: string; image: string }[];
  };
}

export interface LocationPageProps {
  error?: boolean;
  data?: LocationRequestData;
}

export interface LocationVariables {
  id: string;
}
