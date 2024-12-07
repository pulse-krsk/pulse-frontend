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
      age_restriction: +faker.number.int(),
      description: faker.lorem.sentence(),
      img: faker.image.url(),
      start_time: faker.date.recent(),
      end_time: faker.date.recent(),
      title: faker.commerce.productName(),
      types: [{ type: 'sport' }, { type: 'music' }],
    },
  },
};

export default meta;
