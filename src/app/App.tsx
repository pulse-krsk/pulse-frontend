import { ReduxProvider, RouterProvider, AuthProvider, ThemeProvider } from './providers';
import './styles/index.scss';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

export const App = () => {
  return (
    <ReduxProvider>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider />
        </ThemeProvider>
      </AuthProvider>
    </ReduxProvider>
  );
};
