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
          to: 'systems',
          activeBasePath: 'systems',
          label: 'Systems',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          activeBasePath: 'example',
          label: 'Example',
          position: 'left',
          items: [
            {
              activeBasePath: 'example/category1',
              label: 'Category 1',
              items: [
                'Item 1A', '/example/category1/item1a',
                'Item 1B', '/example/category1/item1b',
                'Item 1C', '/example/category1/item1c'
              ].join("|")
            },
            {
              to: 'example/category2/',
              activeBasePath: 'example/category2',
              label: 'Category 2',
            },
            {
              to: 'example/category3/',
              activeBasePath: 'example/category3',
              label: 'Category 3',
              items: [
                'Item 3A', '/example/category3/item3a',
                'Item 3B', '/example/category3/item3b'
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
  plugins: [
    require.resolve('./plugins/navigation-level-3')
  ],
};
