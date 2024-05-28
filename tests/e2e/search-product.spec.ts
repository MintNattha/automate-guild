import { expect } from '@playwright/test';
import test from '../fixtures/helper';

test.describe('Search product', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  
    // Verify that home page is visible successfully
    const element = await page.locator('#slider-carousel');
    await expect(element).toBeVisible();
    // await helper.verifyNavigateToHomepage(); // Use helper
  
    // Click on 'Products' button
    await page.getByRole('link', { name: 'Products' }).click();
    // await helper.clickLink('Products'); // Use helper
  
    // Verify user is navigated to ALL PRODUCTS page successfully
    await page.getByPlaceholder('Search Product');
    await expect(page.getByRole('heading', { name: 'ALL PRODUCTS' })).toBeVisible();
  });
  
  test('should be able to search product with all lower letter case', async ({ page, helper }) => {
    const keyword = 'blue top';
    
    // Enter product name
    await page.getByPlaceholder('Search Product').fill(keyword);
    // Click search button
    const searchButtonElement = await page.locator('#submit_search');
    await searchButtonElement.click();

    // Check if search result show up
    await expect(page.getByRole('heading', { name: 'SEARCHED PRODUCTS' })).toBeVisible();

    // Check how many 'Blue top' found, it should > 0
    const elementCount = await page.getByText(keyword).count();
    await expect(elementCount).toBeGreaterThan(0);
  });

  test('should be able to search product with capital letter case', async ({ page, helper }) => {
    const keyword = 'Blue Top';
    
    // Enter product name
    await page.getByPlaceholder('Search Product').fill(keyword);
    // Click search button
    const searchButtonElement = await page.locator('#submit_search');
    await searchButtonElement.click();


    // Check if search result show up
    await expect(page.getByRole('heading', { name: 'SEARCHED PRODUCTS' })).toBeVisible();

    // Check how many 'Blue top' found, it should > 0
    const elementCount = await page.getByText(keyword).count();
    await expect(elementCount).toBeGreaterThan(0);
  });

  test('should not have search result', async ({ page }) => {
    const keyword = 'test';
    
    // // Enter product name
    await page.getByPlaceholder('Search Product').fill(keyword);
    // Click search button
    const searchButtonElement = await page.locator('#submit_search');
    await searchButtonElement.click();

    // Check if search result show up
    await expect(page.getByRole('heading', { name: 'SEARCHED PRODUCTS' })).toBeVisible();

    // Check how many 'Blue top' found, it should > 0
    const elementCount = await page.getByText(keyword).count();
    await expect(elementCount).toBe(0);
  });
})