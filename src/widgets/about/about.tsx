import { RxAvatar } from 'react-icons/rx';
import { Badge, Container, Group, SimpleGrid, Title, Text, Card, AppShell } from '@mantine/core';
import classes from './about.module.scss';

const data = [
  {
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: RxAvatar,
  },
  {
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: RxAvatar,
  },
  {
    title: 'No third parties',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: RxAvatar,
  },
];

export const About = () => {
  const features = data.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke="2" />
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
            Best company ever
          </Badge>
        </Group>

        <Title order={2} className={classes.title} ta="center" mt="sm">
          Integrate effortlessly with any technology stack
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    </AppShell.Section>
  );
};
