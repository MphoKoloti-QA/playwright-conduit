import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
    testDir: './tests',
    globalSetup: './global-setup.ts',
    timeout: 30000,
    retries: 1,
    reporter: [['html', { open: 'never' }], ['list']],
    use: {
        baseURL: 'https://conduit.mate.academy',
        headless: true, // Run tests in headless mode
        screenshot: 'only-on-failure', // Capture screenshots only on test failure
        video: 'retain-on-failure', // Record videos only on test failure
        trace: 'retain-on-failure', // Collect trace information only on test failure
    },
    projects: [ // Define projects for different browsers
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        ],
    });
