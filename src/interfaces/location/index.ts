export interface ILocation {
  location: {
    name: string;
    type: string;
    dimension: string;
    residents: { name: string; id: string; image: string }[];
  };
}
