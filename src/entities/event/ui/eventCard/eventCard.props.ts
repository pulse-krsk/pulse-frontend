import type { DefaultProps } from '@/shared/types';
import type { Event } from '../../types/';

export type EventCardProps = DefaultProps & {
  event: Event;
};
