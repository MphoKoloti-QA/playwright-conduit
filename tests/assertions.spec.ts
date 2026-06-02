import { test, expect } from './fixtures/base';

test.describe('Assertions', () => {
    test('hard assertion - stop on first failure', async({ homePage, page }) => {
        await homePage.navigate();
        await expect(page).toHaveTitle(/Conduit/);
        await expect(homePage.navBar).toBeVisible();
        await expect(homePage.navBar).toContainText('conduit');
        await expect(homePage.signInLink).toHaveText('Sign in');
        await expect(page).toHaveURL(/conduit/);
    });

    test('soft assertion - collapse all failures', async ({ homePage, page }) => {
        await homePage.navigate();
        await expect.soft(page).toHaveTitle(/Conduit/);
        await expect.soft(homePage.navBar).toBeVisible();
        await expect.soft(homePage.signInLink).toBeVisible();
        await expect.soft(homePage.logo).toBeVisible();
        await expect.soft(page).toHaveURL('https://conduit.mate.academy/');
    });

    test('element count and state assertions', async ({ homePage, page }) => {
        await homePage.navigate();
        const articles = page.locator('.article-preview');
        await expect(articles.first()).toBeVisible();
        expect(await articles.count()).toBeGreaterThan(0);
        const tagList = page.locator('.tag-list .tag-default');
        await expect(tagList.first()).toBeVisible();
        expect(await tagList.count()).toBeGreaterThan(0);
        await expect(homePage.signInLink).toBeEnabled();
        const count = await articles.count();
        console.log(`number of articles: ${count}`);
    });
});