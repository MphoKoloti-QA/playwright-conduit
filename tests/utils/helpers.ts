import { Page, Locator, expect } from '@playwright/test';

export async function waitForPageLoad(page: Page): Promise<void> {
    await page.waitForLoadState('networkidle');
}

export async function expectElementToBeVisibleAndEnabled(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
    await expect(locator).toBeEnabled();
}

export async function getTextFromLocator(locator: Locator): Promise<string> {
    const text = await locator.textContent();
    return text?.trim() ?? '';
}

export async function clickAndWaitForNavigation(page: Page, locator: Locator): Promise<void> {
    await Promise.all([
        page.waitForNavigation(),
        locator.click(),
    ]);
}

export function buildUrl(baseUrl: string, path: string): string {
    return `${baseUrl}/${path}`.replace(/([^:]\/)\/+/g, '$1');
}