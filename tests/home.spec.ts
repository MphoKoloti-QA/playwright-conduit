import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
    test('should load the home page successfully', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Conduit/);
        await expect(page).toHaveURL('https://conduit.mate.academy');
        const navBar = page.locator('nav.navbar');
        await expect(navBar).toBeVisible();
        const signInLink = page.getByRole('link', { name: 'Sign in' });
        await expect(signInLink).toBeVisible();
        const logo = page.locator('a.navbar-brand');
            await expect(logo).toBeVisible();
    });
});
