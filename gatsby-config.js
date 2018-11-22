module.exports = {
  pathPrefix: '/adept-test',
  siteMetadata: {
    title: 'Adept Ecommerce and Fulfilment',
    menuLinks: [
      {
        name: 'Components',
        link: '/components',
      },
      {
        name: 'GitHub',
        link: '/page-2',
      },
      {
        name: 'Options',
        childLinks: [
          {
            name: 'Option 1',
            link: '/components',
          },
          {
            name: 'Option 2',
            link: '/',
            divider: true,
          },
          {
            name: 'Reset',
            link: '/',
          },
        ],
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['styles/'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Adept Ecommerce & Fulfilment',
        short_name: 'Adept',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'nunito sans:400,600',
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
