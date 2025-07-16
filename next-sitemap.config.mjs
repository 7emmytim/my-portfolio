const config = {
  siteUrl: "https://timilehinomotugba.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => [
    await config.transform(config, "/resume.pdf"),
  ],
};

export default config;
