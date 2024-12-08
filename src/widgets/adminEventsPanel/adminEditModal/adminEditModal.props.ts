import type { Event } from '@/entities/event/types';

export type AdminEditModalProps = {
  opened: boolean;
  onClose: () => void;
  title: string;
  event: Event;
};
