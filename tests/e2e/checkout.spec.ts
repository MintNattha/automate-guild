import { test, expect } from '@playwright/test';

const message = 'confirm order ja';
const cardname = 'Test';
const cardnumber = '4111111111111111';
const cvc = '311';
const expireMonth = "05";
const expireYear =  "2026";

test.describe('Checkout', () => {
    test('able to process checkout', async ({ page }) => {
        await page.goto('/');
    
        // Click on 'Products' button
        await page.getByRole('link', { name: 'Products' }).click();

        // Verify user is navigated to ALL PRODUCTS page successfully
        await expect(page.getByRole('heading', { name: 'ALL PRODUCTS' })).toBeVisible();

        // Add first product to cart
        await page.locator(`.add-to-cart`).first().click();

        // Check confirm added cart modal
        await expect(page.locator("#cartModal")).toBeVisible();

        // Click the 'Cart' button
        await page.getByText('View Cart').click();

        // Verify that the cart page is displayed
        await expect(page.locator("#cart_info_table")).toBeVisible();
        
        // Verify that the total items are correct
        await expect(page.locator('tr#product-1 td.cart_quantity .disabled')).toHaveText('1');

        // Click Proceed To Checkout
        await page.getByText('Proceed To Checkout').click();

        // Verify Address Details and Review Your Order
        await expect(page.getByRole('heading', { name: 'Address Details' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Review Your Order' })).toBeVisible();

        // Enter a description in the comment text area and click 'Place Order'
        await page.locator('textarea[name="message"]').fill(message);
        await page.getByText('Place Order').click();

        // Verify that the payment page is displayed
        await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();

        // Enter payment details: Name on Card, Card Number, CVC, Expiration date
        await page.getByTestId('name-on-card').fill(cardname);
        await page.getByTestId('card-number').fill(cardname);
        await page.getByTestId('cvc').fill(cvc);
        await page.getByTestId('expiry-month').fill(expireMonth);
        await page.getByTestId('expiry-year').fill(expireYear);

        // Click the 'Pay and Confirm Order' button
        await page.getByText('Pay and Confirm Order').click();

        // Verify success message 'Your order has been placed successfully!'
        await expect(page.getByAltText('Your order has been placed successfully!')).toBeHidden();

      });
})