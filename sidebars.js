/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'GETTING STARTED',
      collapsed: true,
      items: [
        'tutorial-basics/setting-up-a-sandbox', 
        'tutorial-basics/checking-postman-collection',
        'tutorial-basics/making-your-first-test-payment'
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/Pwi',
        {
              type: 'link',
              label: 'Facebook', // The link label
              href: 'https://facebook.com', // The external URL
        }
      ],
    },
    {
      type: 'category',
      label: 'ADVANCED',
      collapsed: true,
      items: [
        'advanced/webhooks', 
        'advanced/refund-and-cancel',
        'advanced/integration-checklist',
        'advanced/live-checklist'
      ],
     },
     {
      type: 'category',
      label: 'REFERENCES',
      items: [
        {
          type: 'link',
          label: 'PWI DEMO', // The link label
          href: 'https://www.iyzico.com/demo/', // The external URL
        },
        {
          type: 'link',
          label: 'PWI Link Generate',
          href: 'https://gitbook-pwi.herokuapp.com/',
        },
        {
          type: 'link',
          label: 'Test Cards',
          href: 'https://dev.iyzipay.com/en/test-kartlari',
        },
        {
          type: 'link',
          label: 'Error Codes',
          href: 'https://dev.iyzipay.com/en/hata-kodlari',
        },
        {
          type: 'link',
          label: 'Github Repos', 
          href: 'https://github.com/iyzico'
        }
      ],
    },
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
