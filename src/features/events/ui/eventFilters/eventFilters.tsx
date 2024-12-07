import { useState, useCallback } from 'react';
import { useGetEventTypesQuery } from '@/entities/event/api/api';
import { useEventsSearchParams } from '@/entities/event/hooks';
import { Alert, Button, Flex, MultiSelect, NumberInput } from '@mantine/core';
import { Paper, Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

export const EventFilters = () => {
  // Получаем параметры фильтрации из hook
  const {
    endDate,
    startDate,
    types,
    setEventsSearchParams,
    priceFrom: initialPriceFrom,
    priceTo: initialPriceTo,
  } = useEventsSearchParams();

  // Состояния для фильтров
  const [selectedTypes, setSelectedTypes] = useState<string[]>(types); // Для категорий
  const [priceFrom, setPriceFrom] = useState<number | string>(initialPriceFrom); // Для минимальной цены
  const [priceTo, setPriceTo] = useState<number | string>(initialPriceTo); // Для максимальной цены
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    startDate ? new Date(startDate) : null,
    endDate ? new Date(endDate) : null,
  ]); // Для даты

  // Получаем типы событий
  const { data: eventTypes, isSuccess } = useGetEventTypesQuery();

  // Обработчик применения фильтров
  const handleApplyFilters = useCallback(() => {
    setEventsSearchParams({
      startDate: dateRange[0]?.toISOString(),
      endDate: dateRange[1]?.toISOString(),
      types: selectedTypes,
      priceFrom: +priceFrom,
      priceTo: +priceTo,
    });
  }, [selectedTypes, priceFrom, priceTo, dateRange, setEventsSearchParams]);

  const handleResetFilters = useCallback(() => {
    // Сбрасываем все фильтры на начальные значения
    setSelectedTypes([]); // Сброс категории
    setPriceFrom(0); // Сброс минимальной цены
    setPriceTo(0); // Сброс максимальной цены
    setDateRange([null, null]); // Сброс диапазона дат

    // Сбрасываем параметры в hook
    setEventsSearchParams({
      startDate: '',
      endDate: '',
      types: [],
    });
  }, [setEventsSearchParams]);

  return (
    <Paper shadow="xs" p="lg" style={{ width: 300 }}>
      <Text size="lg" w={500} mb="md" fw={'bold'}>
        Фильтры
      </Text>

      {/* Фильтр по категории */}
      <Flex direction="column" mb="md" gap={'md'}>
        <Text size="sm" w={500} fw={500}>
          Категория
        </Text>
        {isSuccess && (
          <MultiSelect
            placeholder="Выберите категории"
            data={eventTypes.map(({ type }) => type)}
            value={selectedTypes}
            onChange={setSelectedTypes} // Обновляем состояние выбранных категорий
          />
        )}
        {!isSuccess && <Alert color="red">Нет доступных категорий</Alert>}
      </Flex>

      {/* Фильтр по дате */}
      <Flex direction="column" mb="md" gap={'md'}>
        <Text size="sm" w={500} fw={500}>
          Дата
        </Text>
        <DatePicker
          type="range"
          value={dateRange}
          onChange={setDateRange} // Обновляем диапазон дат
        />
      </Flex>

      {/* Фильтр по цене */}
      <Flex direction="column" mb="md" gap={'md'}>
        <Text size="sm" w={500} fw={500}>
          Цена
        </Text>
        <Flex gap="xs">
          <NumberInput
            placeholder="от"
            prefix="₽"
            value={priceFrom}
            onChange={setPriceFrom} // Обновляем минимальную цену
            min={0}
          />
          <NumberInput
            placeholder="до"
            prefix="₽"
            value={priceTo}
            onChange={setPriceTo} // Обновляем максимальную цену
            min={0}
          />
        </Flex>
      </Flex>

      <Flex gap={'md'} justify={'space-between'} align={'center'} mt={'xl'}>
        <Button fullWidth variant="outline" onClick={handleResetFilters}>
          Сбросить
        </Button>
        {/* Кнопка применения фильтров */}
        <Button fullWidth onClick={handleApplyFilters}>
          Применить
        </Button>
      </Flex>
    </Paper>
  );
};
