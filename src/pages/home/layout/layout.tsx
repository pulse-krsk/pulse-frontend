import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/Header';
import { AppShell, Flex } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
  return (
    <AppShell footer={{ height: 96, offset: true }} header={{ height: 59, offset: true }}>
      <Header />
      <AppShell.Main py={120} px={160}>
        <Flex direction={'column'} gap={120}>
          <Outlet></Outlet>
        </Flex>
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
};
