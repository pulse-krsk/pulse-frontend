import { About } from '@/widgets/about';
import { Colobaration } from '@/widgets/colobaration';
import { Onboarding } from '@/widgets/Onboarding';
import { UpcomingEvents } from '@/widgets/upcomingEvents';

export const HomePage = () => {
  return (
    <>
      <Onboarding />
      <About />
      <UpcomingEvents />
      <Colobaration />
    </>
  );
};
