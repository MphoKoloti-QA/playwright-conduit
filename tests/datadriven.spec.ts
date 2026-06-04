import { test, expect } from './fixtures/base';
import loginData from './testdata/loginData.json';

test.describe('Data-driven login validation', () => {
    for (const scenario of loginData) {
        test(`login attempt: ${scenario.description}`, async ({ loginPage }) => {
            await loginPage.navigate();
            await loginPage.login(scenario.email, scenario.password);
            if (scenario.expectedError) {
                await expect(loginPage.errorMessage).toBeVisible();
            }
        });
    }
});

test.describe('additional invalid email formats', () => {
    const invalidEmails = [
      { desc: 'missing @ symbol', email: 'notanemail.com' },
      { desc: 'missing domain', email: 'user@' },
      { desc: 'empty string', email: '' },
    ];

    for (const { desc, email } of invalidEmails) {
      test(`email format: ${desc}`, async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.usernameInput.fill(email);
        await loginPage.passwordInput.fill('somepassword');
        await loginPage.signInButton.click();
        await expect(loginPage.signInButton).toBeVisible();
      });
    }
});