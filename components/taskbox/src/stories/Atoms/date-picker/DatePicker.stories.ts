import type { Meta, StoryObj } from '@storybook/angular';
import DatePicker from './datePicker.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<DatePicker> = {
  title: 'Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
  render: (args: DatePicker) => ({
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
type Story = StoryObj<DatePicker>;


export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};


