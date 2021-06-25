import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      listBackground: string;
      cardBackground: string;
      footerBackground: string;

      statusIcon: {
        dead: string;
        alive: string;
        unknown: string;
      };

      card: {
        main: string;
        subtitle: string;
      };

      footer: {
        main: string;
      };
    };
    fontSize: {
      navLinks: string;
      mainTitle: string;
      searchTitle: string;
      searchInput: string;
      SearchIcon: string;

      card: {
        title: string;
        status: string;
        subtitle: string;
        value: string;
      };
    };
    fontFamily: {
      main: string;
    };
  }
}
