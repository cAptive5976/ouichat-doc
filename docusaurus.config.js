// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OuiChat',
  tagline: 'Projet SAE302 du BUT Réseaux et Télécommunications de l\'UCA',
  favicon: 'img/favicon.png',

  url: 'https://ouichat.charlesmj.fr',
  baseUrl: '/',

  organizationName: 'cAptive5976',
  projectName: 'ouichat',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/cAptive5976/ouichat-doc/tree/main/',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OuiChat',
        logo: {
          alt: 'Logo de OuiChat',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'downloadSidebar',
            position: 'left',
            label: 'Téléchargement',
          },
          {
            href: 'https://github.com/cAptive5976/ouichat',
            label: 'Code du projet',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'OuiChat',
                to: '/docs/ouichat',
              },
              {
                label: 'OuiContact',
                to: '/docs/ouicontact',
              },
            ],
          },
          {
            title: 'Voir mes projets',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cAptive5976',
              },
            ],
          },
          {
            title: 'Liens vers les projets',
            items: [
              {
                label: 'OuiChat',
                href: 'https://github.com/cAptive5976/ouichat',
              },
              {
                label: 'OuiContact',
                href: 'https://github.com/cAptive5976/ouicontact',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} cAptive. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
