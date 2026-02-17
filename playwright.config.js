// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
testDir: './', // root folder
  timeout: 60 * 1000,
  expect: {
   timeout: 5000,
  },
  reporter: 'html',
    use: {
    
    browserName: "chromium",
    headless : false,
    screenshot : "on",
    trace: "on",



    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    
  },

  

});
module.exports = config

