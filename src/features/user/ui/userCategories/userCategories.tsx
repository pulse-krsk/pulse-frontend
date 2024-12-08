import { useState } from 'react';
import { UnstyledButton, Text, Card, Group, SimpleGrid } from '@mantine/core';
import classes from './userCategories.module.scss';
import { RxCardStack, RxCamera, RxPlay, RxTrash, RxSewingPin } from 'react-icons/rx';
import { cn } from '@/shared/lib';

export const UserCategories = () => {
  const mockdata = [
    { title: 'Еда', icon: RxCardStack, color: 'blue' },
    { title: 'Кино', icon: RxCamera, color: 'red' },
    { title: 'Музыка', icon: RxPlay, color: 'violet' },
    { title: 'Спорт', icon: RxTrash, color: 'green' },
    { title: 'Выставка', icon: RxSewingPin, color: 'teal' },
  ];

  // Состояние с массивом активных категорий
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  // Переключение активного состояния
  const toggleActive = (title: string) => {
    setActiveCategories(
      (prev) =>
        prev.includes(title)
          ? prev.filter((category) => category !== title) // Убираем из активных
          : [...prev, title], // Добавляем в активные
    );
  };

  // Рендер элементов
  const items = mockdata.map((item) => (
    <UnstyledButton
      key={item.title}
      className={cn(classes.item, { [classes.active]: activeCategories.includes(item.title) })}
      onClick={() => toggleActive(item.title)}
      style={
        activeCategories.includes(item.title)
          ? { border: '2px solid #de0b1c', backgroundColor: '#F8F9FA' }
          : { backgroundColor: '#F8F9FA' }
      }>
      <item.icon color={item.color} size={32} />
      <Text fw={500} size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card
      w={'600'}
      h={'fit-content'}
      bg={'#F8F9FA'}
      withBorder
      radius="md"
      className={classes.card}>
      <Group justify="space-between">
        <Text fw={500} className={classes.title}>
          Любимые категории
        </Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
};
