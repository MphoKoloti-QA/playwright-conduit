import { test, expect } from './fixtures/base';
import { waitForPageLoad, getTextFromLocator, expectElementToBeVisibleAndEnabled } from './utils/helpers';

test.describe('Locators', () => {
    test('locate elements using CSS selectors', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        const banner = page.locator('div.banner');
        await expect(banner).toBeVisible();
        const bannerText = (await banner.textContent()) ?? '';
        expect(bannerText).toContain('conduit');
        });

        test('filter locators to find specific elements', async ({ page }) => {
            await page.goto('/');
            await page.waitForLoadState('networkidle');
            const articles = page.locator('.article-preview');
            const firstArticle = articles.first();
            await expect(firstArticle).toBeVisible();
            const readMoreLink = firstArticle.locator('a', { hasText: 'Read more' });
            await expect(readMoreLink).toBeVisible();
        });

         test('use filter() to narrow down matching elements', async ({ page }) => {
            await page.goto('/');
            await page.waitForLoadState('networkidle');
            const tagLinks = page.locator('.tag-list a');
            const count = await tagLinks.count();
            expect(count).toBeGreaterThan(0);
            const firstTag = tagLinks.first();
            await expect(firstTag).toBeVisible();
            await expect(firstTag).toBeEnabled();
            const tagText = ((await firstTag.textContent()) ?? '').trim();
            expect(tagText.length).toBeGreaterThan(0);
         });

         test('locate elements within a specific container', async ({ page }) => {
            await page.goto('/');
            await page.waitForLoadState('networkidle');
            const sidebar = page.locator('.sidebar');
            const popularTagsHeader = sidebar.locator('p', { hasText: 'Popular Tags' });
            await expect(popularTagsHeader).toBeVisible();
         });
});