// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sense-i',
  tagline: 'View documentation for Sense-i Enterprise Management Systems (SEMS)',
  url: 'https://sense-i.co',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sense-i-co', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
            'https://github.com/sense-i-co/docs/edit/main/',   */
          showLastUpdateTime: true,
        },
       theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
      title: 'Sense-i',
        logo: {
        alt: 'Sense-i Logo',
        src: 'img/logo.png',
        },
        items: [
        {
          to: 'systems/',
          activeBasePath: 'systems',
          label: 'Systems',
          position: 'left',
          items: [
            {
              to: 'systems/product-design/',
              label: 'Product Design & Costing'
            },
           {
              to: 'systems/operations-management/',
              label: 'Operations Management'
            },
           {
              to: 'systems/financial-management/',
              label: 'Financial Management'
            },
          ]
        },
        {
          to: 'about',
          activeBasePath: 'about',
          label: 'About Us',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
          },
          {
            to: 'docs/INTROVID',
            activeBasePath: 'docs',
            label: 'Videos',
            position: 'left',
            },
  
  
          {to: '/release', label: 'Release Notes', position: 'left'},
        /*
          {
          href: 'https://github.com/sense-i-co/docs',
            label: 'GitHub',
            position: 'right',
          },
        */
        ],
      },
      footer: {
        style: 'dark',
        links: [
            ],
      logo: {
        alt: 'Sense-i Logo',
        src: 'img/text_logo_white.png',
        height: 64,
      },
      copyright: `<span>Copyright © 1998 to ${new Date().getFullYear()} Sense-i Management Systems. All Rights Reserved.</span><span style="display: block; margin-top: 5px; opacity: 0.6;">This process, and all associated documentation, is proprietary and confidential to Sense-i Management Systems. It cannot be used, disclosed or duplicated without the prior written consent of Sense-i. This is an published work protected by copyright laws and no unauthorised copying, adaptation, distribution or display is permitted.</span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'OHC9H3SGA1',
        apiKey: '49d06032e1d94d1923e4e5ea56f5d41e',
        indexName: 'dev_senseidocs',
      }
    }),
};

module.exports = config;

