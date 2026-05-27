import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly navBar: Locator;
    readonly signInLink: Locator;
    readonly logo: Locator;
    constructor(page: Page) {
        this.page = page;
        this.navBar = page.locator('nav.navbar');
        this.signInLink = page.getByRole('link', { name: 'Sign in' });
        this.logo = page.locator('a.navbar-brand');
    }
    async navigate() {
        await this.page.goto('/');
    }
    async isLoaded(): Promise<boolean> {
        return await this.navBar.isVisible();
    }
}