import type { Meta, StoryObj } from '@storybook/angular';
import Avatar from './avatar.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  render: (args: Avatar) => ({
    props: {
      backgroundColor: null,

      ...args,
    },
  }),
  argTypes: {


  },
};

export default meta;
type Story = StoryObj<Avatar>;


export const Primary: Story = {
  args: {
    size: "large",
    type: 'square',
    label: "Button"
  },
};

