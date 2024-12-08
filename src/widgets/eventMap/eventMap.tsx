import { useGetEventQuery } from '@/entities/event/api';
import { Flex, Title } from '@mantine/core';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const EventMap = ({ eventId }: { eventId: string }) => {
  const { data: event, isSuccess } = useGetEventQuery(eventId);

  if (!isSuccess) {
    return null;
  }

  const {
    place: {
      latitude,
      longitude,
      address: { street, building, city },
    },
  } = event;

  const coordinates = [latitude, longitude];

  return (
    <Flex gap={'lg'} direction={'column'}>
      <Title size={28}>На карте города</Title>
      <div style={{ height: '400px', width: '100%' }}>
        <YMaps>
          <Map
            defaultState={{
              center: coordinates, // Центр карты
              zoom: 10, // Уровень масштабирования
            }}
            width="100%"
            height="100%">
            <Placemark
              geometry={coordinates}
              properties={{
                hintContent: 'Текущее местоположение',
                balloonContent: `${street}, ${building}, ${city}`,
              }}
            />
          </Map>
        </YMaps>
      </div>
    </Flex>
  );
};
