import { useEventParams } from '@/entities/event/hooks';
import { useAbortEffect } from '@/shared/hooks';
import { EventAbout } from '@/widgets/eventAbout';
import { EventMap } from '@/widgets/eventMap';
import { ReviewSection } from '@/widgets/reviewSection';

export const EventPage = () => {
  useAbortEffect();

  const { eventId } = useEventParams();

  if (!eventId) {
    return null;
  }

  return (
    <>
      <EventAbout eventId={eventId} />
      <ReviewSection eventId={eventId} />
      <EventMap eventId={eventId} />
    </>
  );
};
