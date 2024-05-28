import { test, expect } from '@playwright/test';

test.describe('Login', () => {
    test('Login with correct email', async ({ page }) => {
        // Launch a browser
        await page.goto('https://automationexercise.com/');
        // Verify that home page is visible successfully
        await expect(page).toHaveTitle(/Automation Exercise/);
        // Click on 'Login' button
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        // Verify 'Login to your account' is visible
        await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
        // Fill Username, Password 
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('mint.nattawadee@maqe.com');
        await page.getByPlaceholder('Password').fill('Mint1111');
        await page.getByRole('button', { name: 'Login' }).click();
        //Verify that 'Logged in as username' is visible
        await expect(page.getByText('Logged in as Mint')).toBeVisible();
    })

    // test('Logout', async ({ page }) => {
    //      // Launch a browser
    //     await page.goto('https://automationexercise.com/');
    //     // Verify that home page is visible successfully
    //     await expect(page).toHaveTitle(/Automation Exercise/);
    //      // Click on 'Login' button
    //     await page.getByRole('link', { name: ' Signup / Login' }).click();
    //     // Verify 'Login to your account' is visible
    //     await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
    //     // Fill Username, Password 
    //     await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('mint.nattawadee@maqe.com');
    //     await page.getByPlaceholder('Password').fill('Mint1111');
    //     await page.getByRole('button', { name: 'Login' }).click();
    //     //Verify that 'Logged in as username' is visible
    //     await expect(page.getByText('Logged in as Mint')).toBeVisible();
    //     await page.getByRole('link', { name: ' Logout' }).click();
    //     //Verify that user is navigated to login page
    //     await expect(page).toHaveURL('https://automationexercise.com/login');

    // })

//     test('Login with incorrect email', async ({ page }) => {
//         // Launch a browser
//         await page.goto('https://automationexercise.com/');
//         // Verify that home page is visible successfully
//         await expect(page).toHaveTitle(/Automation Exercise/);
//         // Click on 'Login' button
//         await page.getByRole('link', { name: ' Signup / Login' }).click();
//         // Verify 'Login to your account' is visible
//         await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
//         // Fill Username, Password 
//         await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('mint.nattawadee+22@maqe.com');
//         await page.getByPlaceholder('Password').fill('Mint1111');
//         await page.getByRole('button', { name: 'Login' }).click();
//         //Verify that 'Logged in as username' is visible
//         await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
//     })
})