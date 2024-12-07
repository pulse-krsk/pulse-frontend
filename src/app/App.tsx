import { ReduxProvider, RouterProvider } from './providers';
import './styles/index.scss';

export const App = () => {
  return (
    <ReduxProvider>
      <RouterProvider />
    </ReduxProvider>
  );
};
