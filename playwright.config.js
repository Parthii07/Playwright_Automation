// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './',
  timeout: 60 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: 'html',

  use: {
    headless: false,
    screenshot: 'off',
    trace: 'on',
  },

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
});