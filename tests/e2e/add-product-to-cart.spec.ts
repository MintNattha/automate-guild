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
      await page.getByRole('button', { name: 'Continue Shopping' }).click();

      // Add 2nd product to cart
      await page.locator('.productinfo a[data-product-id="2"]').click();

      // Go to cart
      await page.getByText('View Cart').click();

      // Verify that 2 products in the cart are the  1st and 2nd products from the product list
      await expect(page.locator("#cart_info_table")).toBeVisible();

      // Verify that prices in each product are correct
      await expect(page.locator('tr#product-1 td.cart_price p')).toHaveText('Rs. 500');
      await expect(page.locator('tr#product-2 td.cart_price p')).toHaveText('Rs. 400');


      // Verify that the total price is correct
      await page.getByText('Proceed To Checkout').click();
      await expect(page.getByRole('heading', { name: 'Review Your Order' })).toBeVisible();
      await expect(page.locator('.table.table-condensed td .cart_total_price').last()).toHaveText('Rs. 900');

      // Verify that the total items are correct
      await expect(page.locator('tr#product-1 td.cart_quantity .disabled')).toHaveText('1');
      await expect(page.locator('tr#product-2 td.cart_quantity .disabled')).toHaveText('1');

      // Process checkout
      // await page.getByText('Proceed To Checkout').click();

      // Verify user is navigated to Address page successfully
      // await expect(page.getByRole('heading', { name: 'Address Details' })).toBeVisible();
    });
})