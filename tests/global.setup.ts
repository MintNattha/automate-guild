import { expect } from '@playwright/test';
import test from './fixtures/helper';
import { STORAGE_STATE } from '../playwright.config';

const email = 'mint.nattawadee@maqe.com';
const password = 'Mint1111';

test('login', async ({ page, helper  }) => {
	await page.goto('/');
  
    // Verify that home page is visible successfully
    await helper.verifyNavigateToHomepage();
  
    // Click on 'Login' button
    await helper.clickLink('Signup / Login'); // Use helper
  
    // Verify user is navigated to sign in page successfully
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

	// Enter email
    await page.getByTestId('login-email').fill(email); // Success

    // Enter password
    await page.getByTestId('login-password').fill(password);

    // Click login button
    await page.getByRole('button', { name: 'Login' }).click();

	// Verify logged in
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

	// Please write the code to snap all storages and cookies to file `STORAGE_STATE`
	await page.context().storageState({ path: STORAGE_STATE});
});
