import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
  return (
    <AppShell>
      <AppShell.Main>
        <Outlet></Outlet>
      </AppShell.Main>
    </AppShell>
  );
};
