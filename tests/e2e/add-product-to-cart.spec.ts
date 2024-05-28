import { expect } from '@playwright/test';
import test from '../fixtures/helper';

test.describe('Add products to cart', () => {
  test('Add 2 products to cart', async ({ page }) => {
      await page.goto('/');
  
      // Click on 'Products' button
      await page.getByRole('link', { name: 'Products' }).click();

      // Verify user is navigated to ALL PRODUCTS page successfully
      await expect(page.getByRole('heading', { name: 'ALL PRODUCTS' })).toBeVisible();

      // Add 1st product to cart
      await page.locator(`.add-to-cart`).first().click();

      // Add 2nd product to cart
      await page.locator(`.add-to-cart`).first().click();

      // Check confirm added cart modal
      await expect(page.locator("#cartModal")).toBeVisible();

      // Go to cart
      await page.getByText('View Cart').click();

      // Verify redirect to shopping cart
      await expect(page.locator("#cart_info_table")).toBeVisible();

      // Process checkout
      await page.getByText('Proceed To Checkout').click();

      // Verify user is navigated to Address page successfully
      await expect(page.getByRole('heading', { name: 'Address Details' })).toBeVisible();
    });
})