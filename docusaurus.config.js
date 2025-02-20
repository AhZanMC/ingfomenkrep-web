// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ingfo Menkrep",
  tagline: "Portal Informasi Minecraft",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://ingfomenkrep.my.id",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AhZanMC", // Usually your GitHub org/user name.
  projectName: "project-ingfomenkrep", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /**@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://youtu.be/MDnTljPQDAw",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://youtu.be/MDnTljPQDAw",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true, // untuk aktifkan atau matikan tombol switch dark/light
        respectPrefersColorScheme: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "BCGZZETB2M",

        // Public API key: it is safe to commit it
        apiKey: "a214f2aa5402106aa6ca1d94ee6017d2",

        indexName: "ingfomenkrep-my",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // Dimatiin dulu karena bikin bug
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/docs',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      },
      // Logo
      image: "img/logo.webp",
      // Navbar Menu
      navbar: {
        title: "Ingfo Menkrep",
        logo: {
          alt: "Logo Ingfo Menkrep",
          src: "img/logo.webp",
        },
        items: [
          // Navbar Menu : Sebelah Kiri
          { 
            to: "docs/intro", 
            label: "Library", 
            position: "left" 
          },
          { 
            to: "/blog", 
            label: "Blog", 
            position: "left" 
          },
          { 
            to: "/about",
            label: "About Us", 
            position: "left" 
          },
          // Navbar Menu : Sebelah Kanan
          {
            // Dropdown
            type: 'dropdown',
            label: 'Community',
            position: 'right',
            // dropdownActiveClassDisabled: true,
            items: [
              {
                href: 'https://ingfomenkrep.my.id/discord',
                label: 'Discord',
              },
              {
                href: 'https://ingfomenkrep.my.id/saluran-wa',
                label: 'Saluran WA',
              },
              {
                href: 'https://ingfomenkrep.my.id/grup-wa',
                label: 'Grup WA',
              }
            ]
          },
          {
            href: "https://ingfomenkrep.my.id/support",
            label: "Support Me",
            position: "right",
          },
          {
            href: "https://ingfomenkrep.my.id/contact",
            label: "Contact Me!!",
            position: "right",
          },
        ],
      },
      // Footer Menu
      footer: {
        style: "dark",
        links: [
          // Footer Menu : Section 1
          {
            title: "Docs",
            items: [
              {
                label: "Informasi",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "AFDMC",
                to: "/docs/category/afdmc",
              },
            ],
          },
          // Footer Menu : Section 2
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://ingfomenkrep.my.id/discord",
              },
              {
                label: "Saluran WA",
                href: "https://ingfomenkrep.my.id/saluran-wa",
              },
              {
                label: "Grup WA",
                href: "https://ingfomenkrep.my.id/grup-wa",
              },
            ],
          },
          // Footer Menu : Section 3
          {
            title: "More",
            items: [
              {
                label: "Contact Me!!!",
                href: "https://ingfomenkrep.my.id/contact",
              },
              {
                label: "Support Me!!!",
                href: "https://ingfomenkrep.my.id/support",
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Made by <a href="https://ahzanmc.my.id">AhZanMC</a> Powered by <a href="https://ingfomenkrep.my.id">Ingfo Menkrep</a><br>This site is not affiliated with Mojang Studios.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
