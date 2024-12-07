import type { Meta, StoryObj } from '@storybook/react';
import { AuthPanel as Component } from './authPanel';
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
  title: 'Widgets/AuthPanel',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const AuthPanelDefault: Story = {
  args: {},
};

export default meta;
