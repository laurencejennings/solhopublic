require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `solho`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-root-import",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
            },
            {
              family: "Roboto Slab",
            },
          ],
        },
       
      },
    },
    {
        resolve: `gatsby-plugin-favicon`,
        options: {
          logo: "./src/favicon-16x16.png",
    
          // WebApp Manifest Configuration
          appName: "SOLHO, solar horticulture", // Inferred with your package.json
          appDescription: null,
          developerName: null,
          developerURL: null,
          dir: 'auto',
          lang: 'en-US',
          background: '#C0A98D',
          theme_color: '#D04C1A',
          display: 'standalone',
          orientation: 'any',
          start_url: '/?homescreen=1',
          version: '1.0',
    
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            yandex: false,
            windows: false
          }
        }
      },
  ],
}
