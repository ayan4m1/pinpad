require('dotenv/config');

const manifestOptions = {
  name: 'Pinpad',
  /* eslint-disable camelcase */
  short_name: 'Pinpad',
  start_url: '/',
  background_color: '#3c6197',
  theme_color: '#3c6197',
  /* eslint-enable camelcase */
  display: 'minimal-ui',
  icon: 'src/images/logo.png'
};

module.exports = {
  siteMetadata: {
    title: 'Pinpad',
    author: 'ayan4m1',
    description: 'Microcontroller pinouts',
    siteUrl: 'https://pinpad.cc/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'boards',
        path: `${__dirname}/src/boards`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestOptions
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json'
  ]
};
