// @ts-nocheck
import Badge from "./Badge.astro";

export default {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "accent", "outline"],
    },
  },
  args: {
    variant: "default",
  },
};

export const Default = {
  args: {
    variant: "default",
  },
  render: (args) => ({
    component: Badge,
    props: args,
    slots: { default: "Status" },
  }),
};

export const Accent = {
  args: {
    variant: "accent",
  },
  render: (args) => ({
    component: Badge,
    props: args,
    slots: { default: "Featured" },
  }),
};

export const Outline = {
  args: {
    variant: "outline",
  },
  render: (args) => ({
    component: Badge,
    props: args,
    slots: { default: "New" },
  }),
};
