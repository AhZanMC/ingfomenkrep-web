// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ingfo Menkrep',
  tagline: 'Portal Informasi Minecraft',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ingfomenkrep.my.id',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AhZanMC', // Usually your GitHub org/user name.
  projectName: 'project-ingfomenkrep', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://youtu.be/MDnTljPQDAw',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://youtu.be/MDnTljPQDAw',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: 'BCGZZETB2M',
  
        // Public API key: it is safe to commit it
        apiKey: 'a214f2aa5402106aa6ca1d94ee6017d2',
  
        indexName: 'ingfomenkrep-my',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // Dimatiin dulu karena bikin bug
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/docs',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
  
        //... other Algolia params
      },
      // Replace with your project's social card
      image: 'img/logo.webp',
      navbar: {
        title: 'Ingfo Menkrep',
        logo: {
          alt: 'Logo Ingfo Menkrep',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Informasi',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: 'docs/category/repozan', label: 'Repozan', position: 'left' },
          {
            href: 'https://github.com/AhZanMC',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://afdmc.ingfomenkrep.my.id',
            label: 'AFDMC',
            position: 'right',
          },
          {
            href: 'https://contact.ingfomenkrep.my.id/',
            label: 'Contact Me!!',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Informasi',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://ingfomenkrep.my.id/discord.html',
              },
              {
                label: 'Saluran WA',
                href: 'https://ingfomenkrep.my.id/saluran-wa.html',
              },
              {
                label: 'Discord',
                href: 'https://ingfomenkrep.my.id/grup-wa.html',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact Me!!!',
                href: 'https://contact.ingfomenkrep.my.id/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'AFDMC',
                href: 'https://afdmc.ingfomenkrep.my.id',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Made by <a href="https://ahzanmc.my.id">AhZanMC</a> Powered by <a href="https://ingfomenkrep.my.id">Ingfo Menkrep</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
