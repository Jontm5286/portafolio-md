import type { StorybookConfig } from "@storybook-astro/framework";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|astro)"],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook-astro/framework",
    options: {},
  },
};

export default config;
