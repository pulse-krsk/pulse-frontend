import { AppShell, Flex } from '@mantine/core';
import { AuthPanel } from '@/widgets/authPanel';

export const LoginPage = () => {
  return (
    <Flex
      component={AppShell.Section}
      direction={'column'}
      justify={'center'}
      align={'center'}
      style={{ minHeight: 'inherit' }}>
      <AuthPanel />
    </Flex>
  );
};
