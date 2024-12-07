import type { DefaultProps } from '@/shared/types';

export type ReviewModalProps = DefaultProps & {
  opened: boolean;
  onClose: () => void;
  title: string;
};
