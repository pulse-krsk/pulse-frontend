import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { Header } from './Header';
import { ThemeProvider } from '@/app/providers';
import { AppShell } from '@mantine/core';

const meta = {
  component: Header,
  decorators: [
    withRouter,
    (Story) => {
      return (
        <ThemeProvider>
          <AppShell>
            <Story />
          </AppShell>
        </ThemeProvider>
      );
    },
  ],
  title: 'Widgets/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const HeaderDefault: Story = {};

export default meta;
