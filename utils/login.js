export async function login(page) {
    
    await page.goto('https://niglabs.com/index.php');
    await page.fill('#username', 'parthi4@gmail.com');
    await page.fill('#password', 'Parthi@12');
    await page.click('#login_btn');
  await page.waitForURL('https://niglabs.com/users/patient.php');
} 