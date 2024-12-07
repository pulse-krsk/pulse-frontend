import { ActionIcon, AppShell, Burger, Button, Container, Flex, Group } from '@mantine/core';
import { RxAvatar } from 'react-icons/rx';
import { useDisclosure } from '@mantine/hooks';
import { LogoSvg } from '@/shared/assets';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from '@/shared/constants';
import { joinPaths } from '@/shared/lib';

const links = [
  { link: ROUTER_PATHS.HOME, label: 'главная' },
  { link: ROUTER_PATHS.HOME + joinPaths(ROUTER_PATHS.EVENTS), label: 'мероприятия' },
  { link: 'https://google.com', label: 'сотрудничество' },
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const isAuth = false;
  const items = links.map((link) => (
    <Link key={link.label} to={{ pathname: link.link }} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <AppShell>
      <AppShell.Header>
        <Flex visibleFrom="xs" px={160} h={59} justify="space-between" align="center">
          <LogoSvg height={23} />
          <Group gap={4} visibleFrom="xs">
            {items}
          </Group>
          <Group gap={16} visibleFrom="xs">
            {!isAuth ? (
              <Link to={{ pathname: ROUTER_PATHS.HOME + joinPaths(ROUTER_PATHS.PROFILE) }}>
                <ActionIcon variant="default">
                  <RxAvatar />
                </ActionIcon>
              </Link>
            ) : (
              <Link to={{ pathname: ROUTER_PATHS.LOGIN }} className={classes.link}>
                <Button color="red">Войти</Button>
              </Link>
            )}
          </Group>
        </Flex>
        <Flex hiddenFrom="xs" py={10} px={15} justify="space-between" align="center">
          <LogoSvg display={'block'} height={18} />
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Flex>
        {opened && (
          <Container>
            <Group gap={4} hiddenFrom="xs">
              {items}
            </Group>
            <Group gap={16} hiddenFrom="xs">
              {!isAuth ? (
                <Link to={{ pathname: ROUTER_PATHS.HOME + joinPaths(ROUTER_PATHS.PROFILE) }}>
                  <Button mx={12} my={8} color="red">
                    Профиль
                  </Button>
                </Link>
              ) : (
                <Link to={{ pathname: ROUTER_PATHS.LOGIN }} className={classes.link}>
                  <Button color="red">Войти</Button>
                </Link>
              )}
            </Group>
          </Container>
        )}
      </AppShell.Header>
    </AppShell>
  );
};
