const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/articles": { page: "/articles" },
      "/albums": { page: "/albums" },
      // "/articles/:articleId": { page: "/post" },
      // "/albums/:albumId": { page: "/post" },
    };
  },
  assetPrefix: !debug ? "/next-blog/" : "",
};
