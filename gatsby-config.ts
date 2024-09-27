import type { GatsbyConfig } from 'gatsby';

// eslint-disable-next-line
const path = require('path');

/** @type {import('tailwindcss').Config} */
const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.azzurracapital.com.br',
        custom: `
            ##### LOCAWEB - NAO REMOVER #####
            AddHandler php80-script .php
            suPHP_ConfigPath /home/azzurracapital1/
            ##### LOCAWEB - NAO REMOVER #####
            # Custom HTTPS force Rule
        `,
      },
    },
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-svgr',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal'
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@root': path.resolve(__dirname, 'src'),
          '@static': path.resolve(__dirname, 'static'),
          '@content': path.resolve(__dirname, 'content'),
          '@constant': path.resolve(__dirname, 'src/constant'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@templates': path.resolve(__dirname, 'src/templates')
        },
        extensions: []
      }
    }
  ]
};

export default config;
