import { Dialog } from "../organisms";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "../molecules";

export default {
  title: "Design System/Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} as Meta<typeof Dialog>;

const Template: StoryFn<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  bodyContent:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.",
  footerContent: (
    <>
      <Button
        type="text"
        onClick={() => alert("Cancel clicked")}
        children={"Cancel"}
      />
      <Button
        type={"square"}
        onClick={() => alert("Submit clicked")}
        children={"Submit"}
      />
    </>
  ),
};
