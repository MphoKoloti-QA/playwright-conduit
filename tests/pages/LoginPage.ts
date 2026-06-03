import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly errorMessage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Email');
        this.passwordInput = page.getByPlaceholder('Password');
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
        this.errorMessage = page.locator('.error-messages');
    }
    async navigate() {
        await this.page.goto('/user/login');
    }
    async login(email: string, password: string) {
        await this.usernameInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }
    async isloggedIn(): Promise<boolean> {
        return await this.page.locator('a.nav-link').isVisible();
    }
}