import type { Meta, StoryObj } from '@storybook/react';
import { ItemsNotFound as Component } from './itemsNotFound';

const meta = {
  component: Component,
  title: 'Shared/ItemsNotFound',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const ItemsNotFoundDefault: Story = {};

export default meta;
