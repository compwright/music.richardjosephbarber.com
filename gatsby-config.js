require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Music by Richard Joseph Barber',
    meta: {
      description: 'Complete index of works for choir, solo, and instrumental performance',
      keywords: '',
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Compositions',
            tableView: 'Grid view',
            tableLinks: ['Publications', 'Recordings']
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Publications',
            tableView: 'Grid view',
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Recordings',
            tableView: 'Grid view',
            tableLinks: ['Compositions']
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Albums',
            tableView: 'Grid view'
          }
        ]
      }
    }
  ]
}
