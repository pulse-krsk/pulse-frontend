import { EventCard } from '@/entities/event/ui/eventCard';
import type { Event } from '@/entities/event/types/event';
import { faker } from '@faker-js/faker';
import { AppShell, Grid } from '@mantine/core';

export const UpcomingEvents = () => {
  const event: Event = {
    id: faker.string.numeric(),
    price: +faker.commerce.price(),
    age_restriction: 18,
    description: faker.lorem.sentence(15),
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    start_time: faker.date.recent(),
    end_time: faker.date.recent(),
    title: faker.commerce.productName(),
    types: [{ type: 'sport' }, { type: 'music' }],
  };

  const events = [event, event, event, event, event, event];

  const cards = events.map((event, index) => (
    <Grid.Col key={index} span={4}>
      <EventCard event={event} />
    </Grid.Col>
  ));

  return (
    <AppShell.Section>
      <Grid columns={12} gutter={{ base: 5, xs: 'md', md: 'xl', xl: 40 }}>
        {cards}
      </Grid>
    </AppShell.Section>
  );
};
