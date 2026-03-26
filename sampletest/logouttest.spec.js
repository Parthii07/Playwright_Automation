const {test, expect} = require('@playwright/test')

test ('Logout test', async ({page})=>
{
await page.goto ("https://niglabs.com/index.php");
await page.locator ('#username') .fill ("parthi4@gmail.com");
await page.locator ("#password").fill ("Parthi@12");
await page.locator ('#login_btn').click();
await page.waitForLoadState('networkidle');

await expect(page).toHaveURL("https://niglabs.com/users/patient.php");

await page.getByRole('button', { name: 'Account' }).click();
await page.getByRole('link', { name: 'Logout' }).click();
await expect (page).toHaveURL ("https://niglabs.com/index.php");

});

