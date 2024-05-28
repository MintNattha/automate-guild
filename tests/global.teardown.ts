import { test, expect } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';

test('logout', async ({ page, browser  }) => {
	const newPage = await browser.newPage();
	// Reset storages and cookies to file
	await newPage.context().storageState({ path: STORAGE_STATE });

	// Go to home page
	await page.goto('/');
  
    // Verify user is navigated to sign out page successfully
    await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible();
});
