import type { Meta, StoryObj } from "@storybook/angular";
import Rating from "./rating.component";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Rating> = {
  title: "Atoms/Rating",
  component: Rating,
  tags: ["autodocs"],
  render: (args: Rating) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    rating: { control: { type: "number", min: 0, max: 5, step: 0.5 } },
    iconSize: { control: "select", options: ["small", "medium", "large"] },
  },
};

export default meta;
type Story = StoryObj<Rating>;

export const Primary: Story = {
  args: {},
};
