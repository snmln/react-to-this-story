import type { Meta, StoryObj } from '@storybook/angular';
import IconButton from './iconButton.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<IconButton> = {
  title: 'Atoms/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
  render: (args: IconButton) => ({
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
type Story = StoryObj<IconButton>;


export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};


