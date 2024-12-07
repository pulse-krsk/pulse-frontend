import { FaVk } from 'react-icons/fa6';
import { ActionIcon, Anchor, AppShell, Container, Group } from '@mantine/core';
import classes from './footer.module.scss';
import { LogoSvg } from '@/shared/assets';

export const Footer = () => {
  return (
    <AppShell.Footer pos="initial" className={classes.footer}>
      <Container className={classes.inner}>
        <LogoSvg height={28} />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <Anchor target="_blank" href="https://vk.com/tvoe_vremya_krsk">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <FaVk size={18} />
            </ActionIcon>
          </Anchor>
        </Group>
      </Container>
    </AppShell.Footer>
  );
};
