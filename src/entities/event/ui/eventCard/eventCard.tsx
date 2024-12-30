import { Badge, Button, Card, Center, Group, Image, Text } from '@mantine/core';
import classes from './eventCard.module.scss';
import type { EventCardProps } from './eventCard.props';
import { formatDateToDayMonth, joinPaths } from '@/shared/lib';
import { ROUTER_PATHS } from '@/shared/constants';
import { Link } from 'react-router-dom';

export const EventCard = ({ event }: EventCardProps) => {
  const { id, price, ageRestriction, description, img, startTime, title, types } = event;
  const fake_img = 'https://i.pinimg.com/736x/24/86/41/248641f0c552c540dede9a5801fa8205.jpg';

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
        <Image src={fake_img} alt={img} width={370} height={168} fit="cover" />
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
          <Text fw={500}>{ageRestriction + '+'}</Text>
        </div>
        <Badge color="#1864AB" variant="outline">
          {formatDateToDayMonth(startTime)}
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
