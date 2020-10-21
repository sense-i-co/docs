module.exports = {
  title: 'Sense-i',
  tagline: 'View documentation for Sense-i Management Systems',
  url: 'https://scotthallauer.github.io',
  baseUrl: '/sense-i/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'scotthallauer', // Usually your GitHub org/user name.
  projectName: 'sense-i', // Usually your repo name.
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
          to: 'download',
          label: 'Download',
          position: 'left',
        },
        /*
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://github.com/scotthallauer/sense-i',
          label: 'GitHub',
          position: 'right',
        },
        */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
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
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/scotthallauer/sense-i',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sense-i, Inc. Built with Docusaurus.`,
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
            'https://github.com/scotthallauer/sense-i/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/scotthallauer/sense-i/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
