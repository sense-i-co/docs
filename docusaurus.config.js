module.exports = {
  title: 'Sense-i',
  tagline: 'View documentation for Sense-i Enterprise Management Systems (SEMS)',
  url: 'https://sense-i-co.github.io',
  baseUrl: '/docs/',
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
        /*
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
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
              label: 'Blog',
              to: 'blog',
            },
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
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sense-i-co/docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
