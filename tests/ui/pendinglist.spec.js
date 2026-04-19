import { test, expect } from '@playwright/test';
import { login } from '../../utils/login';

test( 'Pending list', async ({page}) => {

await login(page);

await expect(page).toHaveURL('https://niglabs.com/users/patient.php');
await page.getByRole('link', { name: 'Billing' }).click();
await page.getByRole('link', { name: 'Pending Collection' }).click();
await page.waitForURL(/bill_list\.php/)
await page.locator('#search').click();
await page .fill('#search', 'test');
await page.locator('#search_submit').click();
});