module.exports = {
  siteMetadata: {
    title: `Fernando Bosco`,
    siteUrl: `https://fernandobelotto.dev/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fernando Belotto`,
        short_name: `FB`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#1A365D`,
        icon: `src/images/icon.png`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-layout",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },

    "@chakra-ui/gatsby-plugin",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "LW07W1OYrt8hJXFF2W5Yda-Yxs0v2CS0I3Y8ejNk5es",
        spaceId: "2hy6h0qlqpdj",
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-54GKT4GLFS",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `./src/pages`,
      },
    },
  ],
};
