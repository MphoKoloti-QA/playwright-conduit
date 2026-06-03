import { test, expect } from './fixtures/base';

test.describe('Login page', () => {
    test('should display login form', async ({ loginPage, page }) => {
        await loginPage.navigate();
        await expect(page).toHaveURL(/user\/login/);
        await expect(loginPage.usernameInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.signInButton).toBeVisible();
    });

    test('should show error with invalid credentials', async ({ loginPage, page }) => {
        await loginPage.navigate();
        await loginPage.login('invalid@email.com', 'wrongpassword');
        await expect(loginPage.errorMessage).toBeVisible();
    });

    test('should navigate to register page from login', async ({ loginPage, page }) => {
        await loginPage.navigate();
        await page.getByRole('link', { name: 'Need an account?' }).click();
        await expect(page).toHaveURL(/register/);
    });
});