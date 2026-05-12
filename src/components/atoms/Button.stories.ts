// @ts-nocheck
import Button from "./Button.astro";

export default {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    href: { control: "text" },
  },
  args: {
    variant: "primary",
    size: "md",
  },
};

export const Primary = {
  args: {
    variant: "primary",
  },
  render: (args) => ({
    component: Button,
    props: args,
    slots: { default: "Button Text" },
  }),
};

export const Outline = {
  args: {
    variant: "outline",
  },
  render: (args) => ({
    component: Button,
    props: args,
    slots: { default: "Button Text" },
  }),
};

export const Ghost = {
  args: {
    variant: "ghost",
  },
  render: (args) => ({
    component: Button,
    props: args,
    slots: { default: "Button Text" },
  }),
};

export const Small = {
  args: {
    size: "sm",
  },
  render: (args) => ({
    component: Button,
    props: args,
    slots: { default: "Small" },
  }),
};

export const Large = {
  args: {
    size: "lg",
  },
  render: (args) => ({
    component: Button,
    props: args,
    slots: { default: "Large Button" },
  }),
};

export const AsLink = {
  args: {
    variant: "primary",
    href: "#",
  },
  render: (args) => ({
    component: Button,
    props: args,
    slots: { default: "Link Button" },
  }),
};
