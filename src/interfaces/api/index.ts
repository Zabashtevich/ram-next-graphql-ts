import { SearchPageResponse } from "../pages/SearchPage";

export interface ApiVariables {
  name: string;
}

export interface IProps {
  error?: boolean;
  data?: SearchPageResponse;
}
