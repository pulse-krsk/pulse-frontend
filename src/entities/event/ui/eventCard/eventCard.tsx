import { Badge, Button, Card, Center, Group, Image, Text } from '@mantine/core';
import classes from './eventCard.module.scss';
import type { EventCardProps } from './eventCard.props';
import { formatDateToDayMonth } from '@/shared/lib';

export const EventCard = ({ event }: EventCardProps) => {
  const { price, age_restriction, description, img, start_time, title, types } = event;

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
        <Badge variant="outline">{type}</Badge>
      </Center>
    );
  });

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={img} alt="Tesla Model S" />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{title}</Text>
          <Text fz="xs" c="dimmed">
            {description}
          </Text>
          <Text fw={500}>{age_restriction + '+'}</Text>
        </div>
        <Badge variant="outline">{formatDateToDayMonth(start_time)}</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
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

          <Button radius="xl" style={{ flex: 1 }}>
            Подробнее
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};
