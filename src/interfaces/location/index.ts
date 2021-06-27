export interface ILocation {
  id: string;
  name: string;
  type: string;
  dimension: string;
}

export interface ILocationWithResidents extends ILocation {
  residents: { name: string; id: string; image: string }[];
}
