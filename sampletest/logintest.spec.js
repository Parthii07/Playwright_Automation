const {test, expect} = require('@playwright/test')

test ('Login test', async ({page})=>
{
await page.goto ("https://niglabs.com/index.php");
await page.locator ('#username') .fill ("parthi4@gmail.com");
await page.locator ("#password").fill ("Parthi@12");
await page.locator ('#login_btn').click();
await page.waitForLoadState('networkidle');
await expect (page).toHaveURL ("https://niglabs.com/users/patient.php");

});
test('Invalid Password', async ({ page }) => {
    await page.goto('https://niglabs.com/index.php');
    await page.fill('#username', 'parthi4@gmail.com');
    await page.fill('#password', '123');
    await page.click('#login_btn');
    await expect(page.locator('.error')).toHaveText('Invalid credentials');
  });
  test('Invalid Username', async ({ page }) => {
    await page.goto('https://niglabs.com/index.php');
    await page.fill('#username', 'p@nigsoft.com');
    await page.fill('#password', 'Parthi@12');
    await page.click('#login_btn');
    await expect(page.locator('.error')).toBeVisible();
  });
  
   test('Empty Username', async ({ page }) => {
    await page.goto('https://niglabs.com/index.php');
    await page.fill('#password', 'Parthi@12');
    await page.click('#login_btn');
    await expect(page.locator('.error')).toBeVisible();
  });
  test('Empty Password', async ({ page }) => {
    await page.goto('https://niglabs.com/index.php');
    await page.fill('#username', 'parthi4@gmail.com');
    await page.click('#login_btn');
    await expect(page.locator('.error')).toBeVisible();
  });

  test('Both Fields Empty', async ({ page }) => {
    await page.goto('https://niglabs.com/index.php');
    await page.click('#login_btn');
    await expect(page.locator('.error')).toBeVisible();
  });

  test('Password Case Sensitivity Check', async ({ page }) => {
    await page.goto('https://niglabs.com/index.php');
    await page.fill('#username', 'parthi4@gmail.com');
    await page.fill('#password', 'PARTHI@12');
    await page.click('#login_btn');
    await expect(page.locator('.error')).toBeVisible();
  });