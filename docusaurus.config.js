module.exports = {
  title: 'Sense-i',
  tagline: 'View documentation for Sense-i Enterprise Management Systems (SEMS)',
  url: 'https://sense-i.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'sense-i-co', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Sense-i',
      logo: {
        alt: 'Sense-i Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'example/',
          activeBasePath: 'example',
          label: 'Example',
          position: 'left',
          items: [
            {
              to: 'example/example1/',
              activeBasePath: 'example/example1',
              label: 'Example 1',
              items: [
                'Example 1A', '/example/example1/example1a',
                'Example 1B', '/example/example1/example1b',
                'Example 1C', '/example/example1/example1c'
              ].join("|")
            },
            {
              to: 'example/example2/',
              activeBasePath: 'example/example2',
              label: 'Example 2',
            },
            {
              to: 'example/example3/',
              activeBasePath: 'example/example3',
              label: 'Example 3',
              items: [
                'Example 3A', '/example/example3/example3a',
                'Example 3B', '/example/example3/example3b'
              ].join("|")
            }
          ]
        },
        {
          to: 'about',
          activeBasePath: 'about',
          label: 'About Us',
          position: 'left',
        },
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
      /*
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/original/styles',
            },
            {
              label: 'MDX',
              to: 'docs/original/mdx',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sense-i-co/docs',
            },
          ],
        },
      ],
      */
      logo: {
        alt: 'Sense-i Logo',
        src: 'img/text_logo_white.png',
      },
      copyright: `<span>Copyright © 1998 to ${new Date().getFullYear()} Sense-i Management Systems. All Rights Reserved.</span><span style="display: block; margin-top: 5px; opacity: 0.6;">This process, and all associated documentation, is proprietary and confidential to Sense-i Management Systems. It cannot be used, disclosed or duplicated without the prior written consent of Sense-i. This is an published work protected by copyright laws and no unauthorised copying, adaptation, distribution or display is permitted.</span>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sense-i-co/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  clientModules: [
    require.resolve('./src/js/NavBarMutator.js'),
  ],
};
