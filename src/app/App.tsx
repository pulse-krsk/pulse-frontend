import { ReduxProvider, RouterProvider } from './providers';
import './styles/index.scss';
import '@mantine/core/styles.css';

export const App = () => {
  return (
    <ReduxProvider>
      <RouterProvider />
    </ReduxProvider>
  );
};
