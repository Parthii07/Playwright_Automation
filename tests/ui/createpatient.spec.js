import { test, expect } from '@playwright/test';
import { login } from '../../utils/login';

test('Create Patient', async ({ page }) => {

  

await page.goto('https://niglabs.com/users/patient.php');

  await page.fill('#patientName', 'parthi');
  await page.fill('#mobileNo','7904223568');
  await page.fill('#age', '25');
  await page.fill('#emailId', 'parthi@example.com');

  await page.click('#patient_save');

  await page.waitForURL(/billing\.php/);
  await page.fill('#test', 'blood group');
  await page.getByText('BLOOD GROUP - Rs.').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.click('#test_save'); 


});