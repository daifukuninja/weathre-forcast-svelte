import type { Meta, StoryObj } from '@storybook/svelte';

import K2c from './K2c.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Example/K2c',
  component: K2c,
  tags: ['autodocs'],
  argTypes: {
    kelvin: { control: 'number' },
  },
} satisfies Meta<K2c>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const KelvinToCelsius: Story = {
  args: {
    kelvin: 273.15
  },
};
