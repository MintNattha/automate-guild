import { expect } from '@playwright/test';
import test from '../fixtures/helper';

const email = 'pai.jidapa@maqe.com';
const password = 'password1234';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  
    // Verify that home page is visible successfully
    const element = await page.locator('#slider-carousel');
    await expect(element).toBeVisible();
    // await helper.verifyNavigateToHomepage(); // Use helper
  
    // Click on 'Login' button
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    // await helper.clickLink('Signup / Login'); // Use helper
  
    // Verify user is navigated to sign in page successfully
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
  
    // Click on 'Login' button
    await page.getByRole('link', { name: 'Logout' }).click();
    // await helper.clickLink('Logout'); // Use helper
  
    // Verify user is navigated to sign in page successfully
    await expect(page.getByRole('link', { name: 'Signup / Login' })).toBeVisible();
  });
  
  test('User with correct email and password', async ({ page }) => {
    // Enter email
    await page.getByTestId('login-email').fill(email); // Success

    // Enter password
    await page.getByTestId('login-password').fill(password);

    // Click login button
    await page.getByRole('button', { name: 'Login' }).click();
    // await helper.clickButton('Login'); // Use helper

    // Verify that home page is visible successfully
    const element = await page.locator('#slider-carousel');
    await expect(element).toBeVisible();
    // await helper.verifyNavigateToHomepage(); // Use helper

    // Verify logged in
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  });
})