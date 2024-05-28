import { Page, test as base, expect } from '@playwright/test';

class Helper {
	constructor(public readonly page: Page) {
		this.page = page;
	}

    async verifyNavigateToHomepage() {
        const element = await this.page.locator('#slider-carousel');
        await expect(element).toBeVisible();
	}

    async clickLink(name: string) {
        await this.page.getByRole('link', { name }).click();
	}

    async clickButton(name: string) {
        await this.page.getByRole('button', { name }).click();
	}
}

const test = base.extend<{ helper: Helper }>({
	helper: async ({ page }, use) => {
		await use(new Helper(page));
	},
});

export default test;