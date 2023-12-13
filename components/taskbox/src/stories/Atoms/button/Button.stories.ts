import type { Meta, StoryObj } from '@storybook/angular';
import Button from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  render: (args: Button) => ({
    props: {
      backgroundColor: null,

      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    // type: { control: 'select', options: ['primary', 'secondary', 'secondaryGray'] }
  },
};

export default meta;
type Story = StoryObj<Button>;


export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Button',
  },
};
export const SecondaryGray: Story = {
  args: {
    type: 'secondaryGray',
    label: 'Button',
  },
};
export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    label: 'Button',
  },
};
export const TertiaryGray: Story = {
  args: {
    type: 'tertiaryGray',
    label: 'Button',
  },
};
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Button',
  },
};
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
