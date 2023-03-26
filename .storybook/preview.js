import { withThemeFromJSXProvider } from "@storybook/addon-styling"
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/Theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      regular: theme,
    },
    defaultTheme: 'regular',
    Provider: ThemeProvider,
  })
]