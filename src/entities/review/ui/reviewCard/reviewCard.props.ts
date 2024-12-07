import type { DefaultProps } from '@/shared/types';
import type { Review } from '../../types/';

export type ReviewCardProps = DefaultProps & {
  review: Review;
};
