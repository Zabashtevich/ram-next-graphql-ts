import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
    };
    fontSize: {
      navLinks: string;
      mainTitle: string;
    };
  }
}
