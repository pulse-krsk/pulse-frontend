import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Button,
  Container,
  Flex,
  Group,
} from '@mantine/core';
import { RxAvatar } from 'react-icons/rx';
import { useDisclosure } from '@mantine/hooks';
import { LogoSvg } from '@/shared/assets';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from '@/shared/constants';
import { joinPaths } from '@/shared/lib';
import { selectors } from '@/entities/auth/model';
import { useAppSelector } from '@/app/hooks';

const links = [
  { link: ROUTER_PATHS.HOME, label: 'главная' },
  { link: ROUTER_PATHS.HOME + joinPaths(ROUTER_PATHS.EVENTS), label: 'мероприятия' },
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const isAuth = useAppSelector(selectors.getIsAuth);
  const items = links.map((link) => (
    <Link key={link.label} to={{ pathname: link.link }} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <AppShell.Header>
      <Flex visibleFrom="xs" px={160} h={59} justify="space-between" align="center">
        <Link to={{ pathname: links[0].link }}>
          <LogoSvg height={23} />
        </Link>
        <Group gap={4} visibleFrom="xs">
          {items}
          <Anchor
            href="https://forms.yandex.ru/u/6754606984227c4dc164e016/"
            className={classes.link}
            target="_blank"
            style={{
              textDecoration: 'none',
              color: 'light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))',
              padding: '8px 12px',
              borderRadius: 'var(--mantine-radius-sm)',
              fontSize: 'var(--mantine-font-size-sm)',
              fontWeight: 500,
            }}>
            сотрудничество
          </Anchor>
        </Group>
        <Group gap={16} visibleFrom="xs">
          {isAuth ? (
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
            {isAuth ? (
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
  );
};
