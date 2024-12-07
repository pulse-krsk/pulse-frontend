import type { Review } from './review';

export type AddReviewRequest = Pick<Review, 'body' | 'rating'> & { eventId: string };
