import { RxCalendar, RxComponent2, RxBell } from 'react-icons/rx';
import { Badge, Container, Group, SimpleGrid, Title, Text, Card, AppShell } from '@mantine/core';
import classes from './about.module.scss';

const data = [
  {
    title: 'все в одном месте',
    description:
      'Сервис объединяет все городские события на одной платформе, упрощая доступ к информации без необходимости поиска в разных источниках.',
    icon: RxComponent2,
  },
  {
    title: 'актуальная информация',
    description:
      'Сервис постоянно обновляется, обеспечивая пользователей только самыми свежими данными о событиях. Любые изменения мгновенно отображаются на платформе.',
    icon: RxBell,
  },
  {
    title: 'мгновенные уведомления',
    description:
      'Благодаря оперативным уведомлениям пользователи всегда знают о новых событиях, изменениях в расписании или отменах.',
    icon: RxCalendar,
  },
];

export const About = () => {
  const features = data.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke="2" color="#00416B" />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <AppShell.Section>
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" color="red" size="lg">
            О нас
          </Badge>
        </Group>

        <Title order={2} className={classes.title} ta="center" mt="sm">
          почему мы?
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Наш сервис создан, чтобы вы всегда были в курсе самых интересных событий вашего города.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    </AppShell.Section>
  );
};
