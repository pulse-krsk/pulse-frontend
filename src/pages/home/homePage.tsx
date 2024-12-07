import { Header } from '@/widgets/Header';
import { Onboarding } from '@/widgets/Onboarding';
import { Flex } from '@mantine/core';

export const HomePage = () => {
  return (
    <Flex>
      <Header />
      <Onboarding />
    </Flex>
  );
};
