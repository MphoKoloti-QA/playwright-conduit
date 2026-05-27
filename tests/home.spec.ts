import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('Home page', () => {
    test('should load the home page successfully', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await expect(page).toHaveTitle(/Conduit/);
        await expect(page).toHaveURL('https://conduit.mate.academy/');
        await expect(homePage.navBar).toBeVisible();
        await expect(homePage.signInLink).toBeVisible();
        await expect(homePage.logo).toBeVisible();
    });
});