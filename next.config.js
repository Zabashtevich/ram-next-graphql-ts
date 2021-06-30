module.exports = {
  ebpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: true,
  env: {
    API_URL: "https://rickandmortyapi.com/graphql",
  },
};
