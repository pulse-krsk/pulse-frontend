import { ActionIcon, Flex, Table, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaRegEdit } from 'react-icons/fa';
import { RxTrash, RxPlus } from 'react-icons/rx';
import { AdminAddModal } from './adminAddModal';
import { faker } from '@faker-js/faker';
import { AdminEditModal } from './adminEditModal';
import { useState } from 'react';
import type { Event } from '@/entities/event/types';

export const AdminEventsPanel = () => {
  const event = {
    id: faker.string.numeric(),
    price: +faker.commerce.price(),
    age_restriction: +faker.number.int(),
    description: faker.lorem.sentence(),
    img: faker.image.url(),
    start_time: faker.date.recent(),
    end_time: faker.date.recent(),
    title: faker.commerce.productName(),
    types: [{ type: 'sport' }, { type: 'music' }],
    place: {
      id: faker.string.numeric(),
      address: {
        id: faker.string.numeric(),
        city: faker.location.city(),
        street: faker.location.street(),
        building: faker.location.buildingNumber(),
      },
      latitude: +faker.location.latitude(),
      longitude: +faker.location.longitude(),
    },
  };

  const events = [event, event]; // Вместо этого вы должны получить ваши реальные события из базы данных или состояния
  const [addModalOpened, { open: openAdd, close: closeAdd }] = useDisclosure(false);
  const [editModalOpened, { open: openEdit, close: closeEdit }] = useDisclosure(false);
  const [currentEvent, setCurrentEvent] = useState<Event>(events[0]); // Отслеживаем текущее событие для редактирования

  // Открыть модальное окно редактирования для конкретного события
  const handleEdit = (event: Event) => {
    setCurrentEvent(event);
    openEdit();
  };

  return (
    <>
      <AdminAddModal opened={addModalOpened} onClose={closeAdd} title="Добавить мероприятие" />
      <AdminEditModal
        opened={editModalOpened}
        onClose={closeEdit}
        title="Редактировать мероприятие"
        event={currentEvent} // Передаем текущее событие для редактирования
      />

      <Flex>
        <Title>Мероприятия</Title>
        <ActionIcon onClick={openAdd}>
          <RxPlus />
        </ActionIcon>
      </Flex>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Наименование</Table.Th>
            <Table.Th></Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {events.map((event, index) => (
            <Table.Tr key={index}>
              <Table.Td>{event.title}</Table.Td>
              <Table.Td style={{ width: '1%', textAlign: 'right' }}>
                <ActionIcon onClick={() => handleEdit(event)}>
                  <FaRegEdit />
                </ActionIcon>
              </Table.Td>
              <Table.Td style={{ width: '1%', textAlign: 'right' }}>
                <ActionIcon>
                  <RxTrash />
                </ActionIcon>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
};
