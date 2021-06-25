import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    main: "rgb(51,51,51)",
    secondary: "rgb(255, 152, 0)",
    listBackground: "rgb(36, 40, 47)",
    footerBackground: "rgb(32, 35, 41)",
    statusIcon: {
      dead: "rgb(214, 61, 46)",
      alive: "rgb(85, 204, 68)",
      unknown: "rgb(158, 158, 158)",
    },

    card: {
      cardBackground: "rgb(60, 62, 68)",
      main: "rgb(245, 245, 245)",
      subtitle: "rgb(158, 158, 158)",
    },

    footer: {
      main: "rgb(158, 158, 158)",
    },
  },
  fontSize: {
    navLinks: "1.2rem",
    mainTitle: "6rem",
    searchTitle: "2.5rem",
    searchInput: "1.2rem",
    SearchIcon: "1.5rem",

    card: {
      title: "27px",
      status: "16px",
      subtitle: "16px",
      value: "18px",
    },
  },
  fontFamily: {
    main: `'Rubik', sans-serif`,
  },
};

export { theme };
