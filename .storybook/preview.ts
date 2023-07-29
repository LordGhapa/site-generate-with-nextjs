/** @type { import('@storybook/react').Preview } */
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';

import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      theme: theme,
    },
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.lightBg,
      },
      {
        name: 'dark',
        value: theme.colors.darkBg,
      },
    ],
  },
};

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   backgrounds: {
//     default: 'dark',
//     // values: [
//     //   {
//     //     name: 'twitter',
//     //     value: '#00aced',
//     //   },
//     //   {
//     //     name: 'facebook',
//     //     value: '#3b5998',
//     //   },
//     // ],
//   },
// };
