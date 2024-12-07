import { useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { EVENTS_SEARCH_PARAMS, PAGE_DEFAULT_VALUE, TITLE_DEFAULT_VALUE } from '../constants';
import type { EventsSearchParams, EventsSearchParamsSnakeCase } from '../types';
import { deleteAllEmptyFields, isInteger } from '@/shared/lib';
import { PRICE_FROM_DEFAULT_VALUE, PRICE_TO_DEFAULT_VALUE } from '../constants/params';

// Функция для извлечения числовых значений с проверкой на корректность
const getNumberOrDefault = (searchNum: string, defaultValue: number): number => {
  let num: number;
  if (isInteger(searchNum)) {
    num = +searchNum;
    if (num < defaultValue) {
      num = defaultValue;
    }
  } else {
    num = defaultValue;
  }
  return num;
};

export const useEventsSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Извлечение значения title из searchParams
  const title = searchParams.get(EVENTS_SEARCH_PARAMS.TITLE) ?? undefined;

  // Страница, по умолчанию 1
  const page = getNumberOrDefault(
    searchParams.get(EVENTS_SEARCH_PARAMS.PAGE) ?? PAGE_DEFAULT_VALUE.toString(),
    PAGE_DEFAULT_VALUE,
  );

  // Дата начала события
  const startDate = searchParams.get(EVENTS_SEARCH_PARAMS.START_DATE) ?? undefined;

  // Дата окончания события
  const endDate = searchParams.get(EVENTS_SEARCH_PARAMS.END_DATE) ?? undefined;

  const types = useMemo(() => searchParams.getAll(EVENTS_SEARCH_PARAMS.TYPES), [searchParams]);

  const priceFrom = getNumberOrDefault(
    searchParams.get(EVENTS_SEARCH_PARAMS.PRICE_FROM) ?? PRICE_FROM_DEFAULT_VALUE.toString(),
    PRICE_FROM_DEFAULT_VALUE,
  );

  const priceTo = getNumberOrDefault(
    searchParams.get(EVENTS_SEARCH_PARAMS.PRICE_TO) ?? PRICE_TO_DEFAULT_VALUE.toString(),
    PRICE_TO_DEFAULT_VALUE,
  );

  // Формируем объект с поисковыми параметрами
  const formattedSearchParams: Partial<Record<EventsSearchParamsSnakeCase, string>> = useMemo(
    () => ({
      title: title === TITLE_DEFAULT_VALUE ? undefined : title,
      page: page === PAGE_DEFAULT_VALUE ? undefined : page.toString(),
      start_date: startDate,
      end_date: endDate,
      types: types.length > 0 ? types.join(',') : undefined,
      price_from: priceFrom === PRICE_FROM_DEFAULT_VALUE ? undefined : priceFrom.toString(),
      price_lte: priceTo === PRICE_TO_DEFAULT_VALUE ? undefined : priceTo.toString(),
    }),
    [title, page, startDate, endDate, types, priceFrom, priceTo],
  );

  // Функция для обновления параметров поиска
  const setEventsSearchParams = useCallback(
    ({ title, page, startDate, endDate, types, priceFrom, priceTo }: EventsSearchParams) => {
      const newSearchParams = { ...formattedSearchParams };
      deleteAllEmptyFields(newSearchParams); // Удаляем пустые поля из объекта параметров

      if (page && page !== PAGE_DEFAULT_VALUE) {
        newSearchParams[EVENTS_SEARCH_PARAMS.PAGE] = page.toString();
      } else {
        delete newSearchParams[EVENTS_SEARCH_PARAMS.PAGE];
      }

      if (title !== undefined && title !== TITLE_DEFAULT_VALUE) {
        newSearchParams[EVENTS_SEARCH_PARAMS.TITLE] = title;
      } else {
        delete newSearchParams[EVENTS_SEARCH_PARAMS.TITLE];
      }

      if (startDate) {
        newSearchParams[EVENTS_SEARCH_PARAMS.START_DATE] = startDate;
      } else {
        delete newSearchParams[EVENTS_SEARCH_PARAMS.START_DATE];
      }

      if (endDate) {
        newSearchParams[EVENTS_SEARCH_PARAMS.END_DATE] = endDate;
      } else {
        delete newSearchParams[EVENTS_SEARCH_PARAMS.END_DATE];
      }

      // Обработка массива типов
      if (types && types.length > 0) {
        newSearchParams[EVENTS_SEARCH_PARAMS.TYPES] = types.join(','); // Преобразуем массив в строку
      } else {
        delete newSearchParams[EVENTS_SEARCH_PARAMS.TYPES];
      }

      if (priceFrom !== undefined) {
        if (priceFrom === PRICE_FROM_DEFAULT_VALUE) {
          delete newSearchParams[EVENTS_SEARCH_PARAMS.PRICE_FROM];
        } else {
          newSearchParams[EVENTS_SEARCH_PARAMS.PRICE_FROM] = priceFrom.toString();
        }
      }
      if (priceTo !== undefined) {
        if (priceTo === PRICE_TO_DEFAULT_VALUE) {
          delete newSearchParams[EVENTS_SEARCH_PARAMS.PRICE_TO];
        } else {
          newSearchParams[EVENTS_SEARCH_PARAMS.PRICE_TO] = priceTo.toString();
        }
      }

      setSearchParams(newSearchParams); // Обновляем параметры в URL
    },
    [formattedSearchParams, setSearchParams],
  );

  return {
    title,
    page,
    startDate,
    endDate,
    types,
    priceFrom,
    priceTo,
    setEventsSearchParams,
  };
};
