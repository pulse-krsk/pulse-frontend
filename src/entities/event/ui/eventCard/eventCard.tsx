import { Badge, Button, Card, Center, Group, Image, Text } from '@mantine/core';
import classes from './eventCard.module.scss';
import type { EventCardProps } from './eventCard.props';
import { formatDateToDayMonth, joinPaths } from '@/shared/lib';
import { ROUTER_PATHS } from '@/shared/constants';
import { Link } from 'react-router-dom';

export const EventCard = ({ event }: EventCardProps) => {
  const { id, price, age_restriction, description, img, start_time, title, types } = event;

  const cardHref = ROUTER_PATHS.HOME + joinPaths(ROUTER_PATHS.EVENTS, id);

  const priceUi =
    price > 0
      ? price.toLocaleString('ru-Ru', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          style: 'currency',
          currency: 'RUB',
        })
      : 'Бесплатно';

  const eventTypesUi = types.map(({ type }, idx) => {
    return (
      <Center key={idx}>
        <Badge c="red" color="#FFE3E3" variant="filled">
          {type}
        </Badge>
      </Center>
    );
  });

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section p={0} className={classes.imageSection}>
        <Image src={img} alt="Tesla Model S" width={370} height={168} fit="cover" />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{title}</Text>
          <Text
            fz="xs"
            c="dimmed"
            style={{
              textOverflow: 'ellipsis',
              height: '2em',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              width: 234,
            }}>
            {description}
          </Text>
          <Text fw={500}>{age_restriction + '+'}</Text>
        </div>
        <Badge color="#1864AB" variant="outline">
          {formatDateToDayMonth(start_time)}
        </Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label} style={{ marginBottom: 8 }}>
          Категория
        </Text>

        <Group gap={8} mb={-8}>
          {eventTypesUi}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              {priceUi}
            </Text>
          </div>

          <Link
            to={{ pathname: cardHref }}
            style={{ display: 'flex', flex: 1, textDecoration: 'none' }}>
            <Button color="red" style={{ flex: 1 }}>
              Подробнее
            </Button>
          </Link>
        </Group>
      </Card.Section>
    </Card>
  );
};
