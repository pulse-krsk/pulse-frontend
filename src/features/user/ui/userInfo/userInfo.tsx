import {
  AppShell,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Switch,
  Title,
  Text,
  Container,
} from '@mantine/core';
import { RxExit } from 'react-icons/rx';
import classes from './userInfo.module.scss';
import type { User } from '@/entities/user/types';

export const UserInfo = () => {
  const user: User = {
    email: 'uR2Eo@example.com',
    firstName: 'Иван',
    lastName: 'Иванов',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  };
  return (
    <AppShell.Section>
      <Flex direction={'column'} gap={48}>
        <Flex justify={'space-between'} align={'center'}>
          <Image radius={'50%'} src={user.avatar} alt="Аватар пользователя" w={84} h={84} />
          <Button color="red" leftSection={<RxExit />}>
            Выйти
          </Button>
        </Flex>
        <Flex gap={12}>
          <Title fz={32}>Личная информация</Title>
        </Flex>
        <Flex gap={40}>
          <Container>
            <Title fz={16}>Имя</Title>
            <Text fz={24}>{user.firstName}</Text>
          </Container>
          <Container>
            <Title fz={16}>Фамилия</Title>
            <Text fz={24}>{user.lastName}</Text>
          </Container>
          <Container>
            <Title fz={16}>Email</Title>
            <Text fz={24}>{user.email}</Text>
          </Container>
        </Flex>
        <Card withBorder radius="md" p="xl" className={classes.card}>
          <Group justify="space-between" className={classes.item} wrap="nowrap" gap="xl">
            <div>
              <Text>Уведомления на почту</Text>
            </div>
            <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
          </Group>
        </Card>
      </Flex>
    </AppShell.Section>
  );
};
