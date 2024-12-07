import { Link } from 'react-router-dom';
import { YA_OAUTH_URL } from './yaAuthLink.constants';
import { ActionIcon, Flex } from '@mantine/core';
import { FaYandex } from 'react-icons/fa';

export const YaAuthLink = () => {
  return (
    <ActionIcon component={Link} to={YA_OAUTH_URL} color="red" radius={'xl'} p="md">
      <Flex justify={'center'} align={'center'} gap={'sm'}>
        <FaYandex size={20} />
      </Flex>
    </ActionIcon>
  );
};
