import { ThemeProvider as GravityThemeProvider } from '@gravity-ui/uikit';
import type { DefaultProps } from '@/shared/types';

export const ThemeProvider = ({ children }: DefaultProps) => {
  return <GravityThemeProvider>{children}</GravityThemeProvider>;
};
