import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { faker } from '@faker-js/faker';
import { EventCard } from './eventCard';
import { ThemeProvider } from '@/app/providers';

const meta = {
  component: EventCard,
  decorators: [
    withRouter,
    (Story) => {
      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    },
  ],
  title: 'Entities/Event/EventCard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EventCard>;

type Story = StoryObj<typeof EventCard>;

export const EventCardDefault: Story = {
  args: {
    event: {
      id: faker.string.numeric(),
      price: +faker.commerce.price(),
      ageRestriction: +faker.number.int(),
      description: faker.lorem.sentence(),
      img: faker.image.url(),
      startTime: String(faker.date.recent()),
      endTime: String(faker.date.recent()),
      title: faker.commerce.productName(),
      types: [{ type: 'sport' }, { type: 'music' }],
      place: {
        id: faker.string.numeric(),
        address: {
          id: faker.string.numeric(),
          city: faker.location.city(),
          street: faker.location.street(),
          building: faker.location.buildingNumber(),
        },
        latitude: +faker.location.latitude(),
        longitude: +faker.location.longitude(),
      },
    },
  },
};

export default meta;
