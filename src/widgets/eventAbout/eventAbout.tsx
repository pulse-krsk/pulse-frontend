import { AppShell, Badge, Flex, Image, Text, Title } from '@mantine/core';
import type { EventAboutProps } from './eventAboutProps';
import { formatDateToDayMonth } from '@/shared/lib';
import { RxCalendar } from 'react-icons/rx';

export const EventAbout = ({ event }: EventAboutProps) => {
  const eventTypesUi = event.types.map(({ type }, idx) => {
    return (
      <Badge key={idx} size="xl" c="#323E48" color="#E9ECEF" variant="filled">
        {type}
      </Badge>
    );
  });

  return (
    <AppShell.Section>
      <Flex gap={40}>
        <Image radius="md" w={580} src={event.img} />
        <Flex direction={'column'} gap={24}>
          <Flex gap={24}>
            <Badge c={'red'} color="#FEEAEA" size="xl" leftSection={<RxCalendar />}>
              {formatDateToDayMonth(event.start_time)} - {formatDateToDayMonth(event.end_time)}
            </Badge>
            {eventTypesUi}
          </Flex>
          <Flex direction={'column'} gap={48}>
            <Flex direction={'column'} gap={16}>
              <Title fz={48} fw={'bold'}>
                {event.title}
              </Title>
              <Text>
                <span style={{ fontWeight: 'bold' }}>адрес:</span> {event.place.address.city},{' '}
                {event.place.address.street}, {event.place.address.building}
              </Text>
              <Text size="md" c="dimmed">
                {event.description}
              </Text>
            </Flex>
            <Text style={{ textAlign: 'right' }}>
              от{' '}
              <span style={{ fontWeight: 'bold', color: 'red', fontSize: '48px' }}>
                {event.price} ₽
              </span>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </AppShell.Section>
  );
};
