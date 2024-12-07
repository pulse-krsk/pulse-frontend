import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';

export const AuthLayout = () => (
  <AppShell>
    <AppShell.Main>
      <Outlet />
    </AppShell.Main>
  </AppShell>
);
