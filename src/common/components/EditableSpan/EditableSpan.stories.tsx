import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { EditableSpan } from "common/components/EditableSpan/EditableSpan";
import { fn } from "@storybook/test";

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof EditableSpan> = {
  title: "TODOLISTS/EditableSpan",
  component: EditableSpan,
  // This component will have an automatically generated Autodocs entry:
  // https://storybook.js.org/docs/react/writing-docs/autodocs
  parameters: {
    layout: ["centered"],
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  argTypes: {
    value: {
      description: "Start value empty. Add value push button set string.",
    },
    onChange: {
      description: "Value EditableSpan changed",
    },
  },
  args: {
    onChange: fn(),
    value: "Change me",
  },
};

export default meta;
type Story = StoryObj<typeof EditableSpan>;

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const EditableSpanStory: Story = {
  args: {
    onChange: action("Value EditableSpan changed"),
  },
};
