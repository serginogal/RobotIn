// .storybook/preview.js

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'light',
    status:  {
          green: '#00BA34',
          orange: '#F98600',
          red: '#E92020',
        },
  },
})

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];