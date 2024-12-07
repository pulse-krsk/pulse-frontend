import { ROUTER_PATHS } from '@/shared/constants';
import { joinPaths } from '@/shared/lib/joinPaths';
import { AppShell, Button, Flex, Text, Title, Image } from '@mantine/core';
import { Link } from 'react-router-dom';

export const Onboarding = () => {
  const pathEvents = ROUTER_PATHS.HOME + joinPaths(ROUTER_PATHS.EVENTS);

  return (
    <Flex justify="space-between" align={'center'} component={AppShell.Section} pos="relative">
      <Flex direction={'column'} gap={48}>
        <Flex direction={'column'} maw={600} gap={24}>
          <Title size={72}>Будь в центре событий твоего города</Title>
          <Text c="dimmed">
            Подписывайтесь на категории, получайте персональные рекомендации и планируйте свой досуг
            с помощью нашей карты.
          </Text>
        </Flex>
        <Link to={pathEvents}>
          <Button size="md" color="Red">
            К событиям
          </Button>
        </Link>
      </Flex>
      <Image
        src="/images/onboarding_building.png"
        alt="Здание"
        maw={600}
        visibleFrom="lg"
        pos="absolute"
        right={-160}
      />
    </Flex>
  );
};
