import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { Onboarding } from './Onboarding';
import { ThemeProvider } from '@/app/providers';
import { AppShell } from '@mantine/core';

const meta = {
  component: Onboarding,
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
  title: 'Widgets/Onboarding',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Onboarding>;

type Story = StoryObj<typeof Onboarding>;

export const OnboardingDefault: Story = {};

export default meta;
