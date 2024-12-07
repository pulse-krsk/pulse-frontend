import { MantineProvider } from '@mantine/core';
import type { DefaultProps } from '@/shared/types';

export const ThemeProvider = ({ children }: DefaultProps) => {
  return <MantineProvider>{children}</MantineProvider>;
};
