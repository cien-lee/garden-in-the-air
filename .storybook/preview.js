import '@styles/global';
import { lightTheme, darkTheme } from '@styles/theme';

const withTheme = (Story, context) => {
  return (
    <div className={lightTheme}>
      <Story {...context} />
    </div>
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withTheme,
];
