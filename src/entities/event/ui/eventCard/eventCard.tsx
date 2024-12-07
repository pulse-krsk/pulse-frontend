import { joinPaths } from '@/shared/lib';
import type { EventCardProps } from './eventCard.props';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { ROUTER_PATHS } from '@/shared/constants';
import { Link } from 'react-router-dom';

export const EventCard = ({ event }: EventCardProps) => {
  const { id, img, title, description, price } = event;
  const eventHref = ROUTER_PATHS.HOME + joinPaths(ROUTER_PATHS.EVENTS, id);
  return (
    <Link to={{ pathname: eventHref }} style={{ textDecoration: 'none' }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={img} height={160} alt="Norway" />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{title}</Text>
          <Badge color="pink">{!price ? 'Бесплатно' : <span>{price} руб.</span>}</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {description}
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          Подробнее
        </Button>
      </Card>
    </Link>
  );
};
