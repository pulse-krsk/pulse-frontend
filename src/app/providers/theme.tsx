import { createTheme, MantineProvider } from '@mantine/core';
import type { DefaultProps } from '@/shared/types';

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});

export const ThemeProvider = ({ children }: DefaultProps) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
