import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { faker } from '@faker-js/faker';
import { ReviewCard } from './reviewCard';
import { ThemeProvider } from '@/app/providers';

const meta = {
  component: ReviewCard,
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
  title: 'Entities/Review/ReviewCard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ReviewCard>;

type Story = StoryObj<typeof ReviewCard>;

export const ReviewCardDefault: Story = {
  args: {
    review: {
      id: faker.string.numeric(),
      rating: 4.3,
      body: faker.lorem.sentence(15),
      user: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
      },
    },
  },
};

export default meta;
