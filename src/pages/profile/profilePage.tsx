import { UserCategories, UserInfo } from '@/features/user';
import { Flex } from '@mantine/core';

export const ProfilePage = () => {
  return (
    <Flex mt={60} justify={'space-between'} align={'center'}>
      <UserInfo />
      <UserCategories />
    </Flex>
  );
};
