// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pay with iyzico',
  tagline: 'Alternative Payment Method',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/pay_with_iyzico_colored.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            // spec: 'openapi/swagger.yaml',
            spec: 'openapi/swagger.yml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/pay_with_iyzico_colored.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/iyzico',
            docId: 'intro',
            position: 'right',
            label: 'Github',
          },
          {to: '/api', label: 'API Reference', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                href: 'https://www.iyzico.com/en',
              },
              {
                label: 'Career',
                href: 'https://www.iyzico.com/en/about-us/career',
              },
              {
                label: 'Pay with iyzico',
                href: 'https://www.iyzico.com/en/business/pay-with-iyzico'
              },
              {
                label: 'Social',
                href: 'https://www.iyzico.com/en/about-us/social-responsibilty',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCk4iPbGOno3mTSWEvQ1Rk5Q/featured',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Developer Page',
                href: 'https://dev.iyzipay.com/en',
              },
              {
                label: 'Github',
                href: 'https://github.com/iyzico',
              },
              {
                label: 'Medium',
                href: 'https://iyzico.engineering/',
              }
            ],
          },
          {
            title: 'Integration',
            items: [
              {
                label: 'Brand Guide',
                href: 'https://www.iyzico.com/en/about-us/iyzico-brand-guide',
              },
              {
                label: 'Solution Partners',
                href: 'https://www.iyzico.com/en/readyIntegration',
              },
              {
                label: 'Open Source',
                href: 'https://www.iyzico.com/en/open-source',
              }  
  
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Contact Us',
                href: 'https://www.iyzico.com/en/support/contact-us',
              },
              {
                label: 'Support Center',
                href: 'https://www.iyzico.com/en/support/help-center',
              },
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
