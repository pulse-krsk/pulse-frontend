import type { DefaultProps } from '@/shared/types';
import type { Event } from '@/entities/event/types';

export type EventAboutProps = DefaultProps & {
  event: Event;
};
