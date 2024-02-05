import type { Meta, StoryObj } from '@storybook/angular';
import Header from './header.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Header> = {
  title: 'Atoms/Header',
  component: Header,
  tags: ['autodocs'],
  render: (args: Header) => ({
    props: {

      ...args,
    },
  }),
  argTypes: {
    headerLevel: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5'] }
  },
};

export default meta;
type Story = StoryObj<Header>;


export const Primary: Story = {
  args: {
    headerLevel: "h2",
  },
};
