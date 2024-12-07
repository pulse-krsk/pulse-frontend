import { type ChangeEvent, useCallback, useState } from 'react';
import { useDebounceEffect } from 'ahooks';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useEventsSearchParams } from '@/entities/event/hooks';
import { Input } from '@mantine/core';

export const EventSearch = () => {
  const { title, setEventsSearchParams } = useEventsSearchParams();
  const [search, setSearch] = useState(title);

  const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  }, []);

  useDebounceEffect(
    () => {
      setEventsSearchParams({
        title: search,
      });
    },
    [search],
    {
      wait: 300,
    },
  );

  return (
    <Input
      leftSection={<FaMagnifyingGlass />}
      size="md"
      placeholder="Поиск по названию"
      value={search}
      onChange={handleChange}
    />
  );
};
