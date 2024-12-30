import { useEventsSearchParams } from '@/entities/event/hooks';
import { useGetEventsQuery } from '@/entities/event/api';
import { useEffect, useState } from 'react';
import { useIntersection } from '@mantine/hooks';
import { Box, Grid, Loader, Text, Alert } from '@mantine/core'; // Добавим компонент Alert для вывода ошибок
import { EventCard } from '@/entities/event/ui';
import type { GetEventsResponse } from '@/entities/event/types';
import { PRICE_TO_DEFAULT_VALUE } from '@/entities/event/constants/params';

const renderLoading = () => {
  return (
    <Box>
      <Loader />
    </Box>
  );
};

const renderNoMore = () => {
  return (
    <Box>
      <Text size="sm">Больше нет элементов</Text>
    </Box>
  );
};

const renderItems = (data: GetEventsResponse | undefined) => {
  return data?.data.map((event, idx) => (
    <Grid.Col key={idx}>
      <EventCard event={event} />
    </Grid.Col>
  ));
};

const renderError = (error: { message?: string }) => {
  return (
    <Alert title="Ошибка загрузки" color="red">
      {error?.message || 'Произошла ошибка при загрузке данных.'}
    </Alert>
  );
};

export const EventList = () => {
  const { endDate, page, startDate, title, types, setEventsSearchParams, priceFrom, priceTo } =
    useEventsSearchParams();

  const priceToWithDefault = priceTo === PRICE_TO_DEFAULT_VALUE ? undefined : priceTo;

  const { data, isLoading, isFetching, isSuccess, isError, error } = useGetEventsQuery({
    page,
    startDate,
    endDate,
    title,
    types,
    priceFrom,
    priceTo: priceToWithDefault,
  });

  const [hasMore, setHasMore] = useState(true);

  const { ref, entry } = useIntersection({
    root: null,
    rootMargin: '0px',
    threshold: 1.0, // Загрузка при достижении элемента
  });

  useEffect(() => {
    // Проверяем, что элемент виден и если нет текущей загрузки
    if (entry?.isIntersecting && hasMore && !isFetching) {
      setEventsSearchParams({
        page: page + 1,
      });
    }
  }, [entry, hasMore, isFetching, page, setEventsSearchParams]);

  useEffect(() => {
    if (data?.data.length === 0) {
      setHasMore(false);
    }
  }, [data]);
  return (
    <div>
      {isError && renderError(error as { message: string })} {/* Обработка ошибки */}
      {!isError && (
        <>
          <Grid gutter="md">{renderItems(data)}</Grid>

          {isSuccess && hasMore && <div ref={ref}>{isFetching && <Loader />}</div>}

          {isSuccess && !hasMore && renderNoMore()}
          {(isLoading || isFetching) && renderLoading()}
        </>
      )}
    </div>
  );
};
