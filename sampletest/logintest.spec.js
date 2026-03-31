const { test, expect } = require('@playwright/test');

// Reusable function for error validation
async function validateError(page) {
  await expect(page.locator('text=Invalid')).toBeVisible();
}

test('Login test', async ({ page }) => {
  await page.goto("https://niglabs.com/index.php");
  await page.fill('#username', "parthi4@gmail.com");
  await page.fill('#password', "Parthi@12");
  await page.click('#login_btn');

  await expect(page).toHaveURL(/patient\.php/);
});

// Negative Scenarios

// test('Invalid Password', async ({ page }) => {
//   await page.goto('https://niglabs.com/index.php');
//   await page.fill('#username', 'parthi4@gmail.com');
//   await page.fill('#password', '123');
//   await page.click('#login_btn');
//   await validateError(page);
// });

// test('Invalid Username', async ({ page }) => {
//   await page.goto('https://niglabs.com/index.php');
//   await page.fill('#username', 'wrong@mail.com');
//   await page.fill('#password', 'Parthi@12');
//   await page.click('#login_btn');
//   await validateError(page);
// });

// test('Empty Username', async ({ page }) => {
//   await page.goto('https://niglabs.com/index.php');
//   await page.fill('#password', 'Parthi@12');
//   await page.click('#login_btn');
//   await validateError(page);
// });

// test('Empty Password', async ({ page }) => {
//   await page.goto('https://niglabs.com/index.php');
//   await page.fill('#username', 'parthi4@gmail.com');
//   await page.click('#login_btn');
//   await validateError(page);
// });

// test('Both Fields Empty', async ({ page }) => {
//   await page.goto('https://niglabs.com/index.php');
//   await page.click('#login_btn');
//   await validateError(page);
// });

// test('Password Case Sensitivity Check', async ({ page }) => {
//   await page.goto('https://niglabs.com/index.php');
//   await page.fill('#username', 'parthi4@gmail.com');
//   await page.fill('#password', 'PARTHI@12');
//   await page.click('#login_btn');
//   await validateError(page);
// });