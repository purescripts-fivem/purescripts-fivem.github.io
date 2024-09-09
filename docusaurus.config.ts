import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentation',
  tagline: 'purescripts.net',
  favicon: 'img/logo.png',
  organizationName: 'purescripts-fivem',
  projectName: 'purescripts-fivem.github.io',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://purescripts-fivem.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  deploymentBranch: 'origin',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.

  onBrokenLinks: 'throw',
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
      {
        docs: {
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'Pure Scripts | Documentation',
      logo: {
        alt: 'Purescripts Logo',
        src: 'img/logo.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'defaultSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
      ],
    },
    footer: {},
    prism: {
      theme: prismThemes.dracula,
      // darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
