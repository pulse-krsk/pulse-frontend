import type { DefaultProps } from '@/shared/types';
import type { EventType } from '../../types/';

export type EventCardProps = DefaultProps & {
  event: EventType;
};
