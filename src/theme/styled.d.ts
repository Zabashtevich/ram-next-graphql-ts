import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      listBackground: string;
    };
    fontSize: {
      navLinks: string;
      mainTitle: string;
    };
  }
}
