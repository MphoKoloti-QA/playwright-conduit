import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    retries: 1,
    reporter: [['html', { open: 'never' }], ['list']],
    use: {
        baseURL: 'https://conduit.bonfire.social', // Update with your application's URL
        headless: true, // Run tests in headless mode
        screenshot: 'only-on-failure', // Capture screenshots only on test failure
        video: 'retain-on-failure', // Record videos only on test failure
        trace: 'retain-on-failure', // Collect trace information only on test failure
    },
    projects: [ // Define projects for different browsers
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } }, // Use the default desktop Chrome configuration
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        { name: 'webkit', use: { ...devices['Desktop Safari'] } },
        ],
    });
