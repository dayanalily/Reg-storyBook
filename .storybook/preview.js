import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';

// import { theme } from '../src/assets/scss/stylesheet';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
    },
  },
  backgrounds: {
    disable: true,
  },
  themes: {
    default: 'Dark Theme',
    clearable: false,
    list: [ 
      { name: 'Dark Theme', class: 'dark-theme', color: '#000000' },
      { name: 'Light Theme', class: 'light-theme', color: '#FFFFFF' }
    ],
  },
}

addDecorator((story) => (
  // <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  <ThemeProvider>{story()}</ThemeProvider>
));