import { useAbortEffect } from '@/shared/hooks';
import { EventsPanel } from '@/widgets/eventsPanel';
import { Flex } from '@mantine/core';

export const EventsPage = () => {
  useAbortEffect();
  return (
    <Flex direction={'column'}>
      <EventsPanel />
    </Flex>
  );
};
