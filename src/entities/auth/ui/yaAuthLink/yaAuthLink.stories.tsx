import type { Meta, StoryObj } from '@storybook/react';
import { YaAuthLink as Component } from './yaAuthLink';
import { withRouter } from 'storybook-addon-remix-react-router';
import { ThemeProvider } from '@/app/providers';

const meta = {
  component: Component,
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
  title: 'Entities/Auth/YaAuthLink',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const YaAuthLinkDefault: Story = {
  args: {},
};

export default meta;
