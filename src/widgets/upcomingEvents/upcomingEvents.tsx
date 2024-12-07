import { EventCard } from '@/entities/event/ui/eventCard';
import { AppShell, Grid } from '@mantine/core';
import { useGetClosestEventsQuery } from '@/entities/event/api';

export const UpcomingEvents = () => {
  const { data: events, isSuccess } = useGetClosestEventsQuery();

  return (
    <AppShell.Section>
      <Grid columns={12} gutter={{ base: 5, xs: 'md', md: 'xl', xl: 40 }}>
        {isSuccess &&
          events.map((event, index) => (
            <Grid.Col key={index} span={4}>
              <EventCard event={event} />
            </Grid.Col>
          ))}
      </Grid>
    </AppShell.Section>
  );
};
