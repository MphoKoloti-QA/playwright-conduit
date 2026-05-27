import { test, expect } from './fixtures/base';

test.describe('Home page', () => {
    test('should load the home page successfully', async ({ homePage, page }) => {
        await homePage.navigate();
        await expect(page).toHaveTitle(/Conduit/);
        await expect(page).toHaveURL('https://conduit.mate.academy/');
        await expect(homePage.navBar).toBeVisible();
        await expect(homePage.signInLink).toBeVisible();
        await expect(homePage.logo).toBeVisible();
    });
    });