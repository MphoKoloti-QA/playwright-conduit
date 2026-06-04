import { test, expect } from '@playwright/test';

test.describe('Authenticated user', () => {
    test.use({ storageState: 'auth.json' });

    test('logged in user should see their username in the navbar', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveURL('https://conduit.mate.academy/');
        const userLink = page.getByRole('link', { name: 'corbin32' });
        await expect(userLink).toBeVisible();
        await expect(page.getByRole('link', { name: 'Sign in' })).not.toBeVisible();
    });
});