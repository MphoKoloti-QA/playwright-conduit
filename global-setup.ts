import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const { baseURL } = config.projects[0].use;
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(`${baseURL}/user/login`);
    await page.getByPlaceholder('Email').fill('corbin@yahoo.com');
    await page.getByPlaceholder('Password').fill('Corbin@3296');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForURL(`${baseURL}/`, { timeout: 60000 });
    await page.context().storageState({ path: 'auth.json' });
    await browser.close();
}

export default globalSetup;