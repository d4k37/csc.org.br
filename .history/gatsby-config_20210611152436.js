module.exports = {
  siteMetadata: {
    title: `Comunidade Servos da Cruz`,
    author: {
      name: `Luiz Correia`,
      email: `luiz@luizcorreia.eti.br`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://comunidadeservosdacruz.org.br`,
    social: {
      twitter: ``,
      facebook: `https://www.facebook.com/comunidadeservosdacruz`,
      instagram: `https://www.instagram.com/comunidade_servos_da_cruz/`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.(js)`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     localeFilter: (locale) => locale.code === "pt-BR",
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //     downloadLocal: true,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true,
              showCaptions: true,
            },
          },
        ],
      },
    },
  ],
}
