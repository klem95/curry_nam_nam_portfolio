const { resolve } = require("./public/render-page");

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({path: `.env.${activeEnv}`,})

module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    siteUrl: "https://needstobetheproductionurl.com",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",

      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `gcms`,
        url: 'https://api-eu-central-1.graphcms.com/v2/ckmryztzxzgr901z6c8b2ft4c/master',
      },

      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
      },
    },
  ],
};
