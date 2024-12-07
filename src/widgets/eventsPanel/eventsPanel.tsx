import { EventFilters, EventList, EventSearch } from '@/features/events';
import { Flex, Text } from '@mantine/core';

export const EventsPanel = () => {
  return (
    <Flex direction={'column'} component={'section'}>
      <Flex gap={'md'} align={'center'} justify={'space-between'}>
        <Text size="xl" w={500} fw={'bold'}>
          События
        </Text>
        <EventSearch />
      </Flex>
      <Flex gap={'md'} justify={'space-between'}>
        <EventFilters />
        <EventList />
      </Flex>
    </Flex>
  );
};
