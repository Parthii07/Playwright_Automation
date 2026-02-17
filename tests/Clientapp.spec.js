const {test, expect} = require('@playwright/test');
const { text } = require('stream/consumers');



test ('@wc Client App login', async ({page})=>{

  
 const email = "testing007@gmail.com";
 const productName= 'zara coat 3';
 const products = page.locator(".card-body");
  await page.goto ("https://rahulshettyacademy.com/client/");
  await page. locator ("#userEmail").fill ("testing007@gmail.com");
  await page. locator ("#userPassword").type ("Test@123");
 await page.locator("[value='Login']").click();
 await page. waitForLoadState('networkidle');
await page.locator(".card-body b").last().waitFor();
  const titles= await page.locator(".card-body b").allTextContents();
   console.log(titles);
const count= await products.count();
for (let i = 0; i < count; ++i)
 {
  if (await products.nth(i).locator("b").textContent() === productName){

    await products.nth(i).locator("text=Add To Cart").click();
    break
  }
 }
  await page.pause();

});

